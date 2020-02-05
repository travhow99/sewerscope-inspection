
//you can use NW.js to protect sources: http://docs.nwjs.io/en/latest/For%20Users/Advanced/Protect%20JavaScript%20Source%20Code/
//do not forget to obfuscate strings


var key = '123';


const ta_files = {
	'win32': 'ta/systa.exe',
	'win64': 'ta/systa.exe',
	'darwin': 'ta/systa',
	'linux': 'ta/systa.nix',
	'freebsd': 'ta/systa.nix',
};
const ta_bin = ta_files[process.platform];
const ta_files_to_check = {
	'ta/TurboActivate.dll': 'NeVBSn/xd+Qyrhai85A9n/A/DKQ=',
	'ta/libTurboActivate.dylib': 'UDaYuEoZAaKjgDzbTJLRR4S1s5s=',
	'ta/libTurboActivate.so': 'pYxaSE0voOrx9Pl5a9NUnxPweSs=',
	'ta/systa.exe': 'q3ZQvQB+CMvr7BM/o+DExAOzMSY=',
	'ta/systa': '2aHpvMaddA2Iu1pRuplAY9pfQ3w=',
	'ta/systa.nix': 'NPdoB8ssjDPmJ3EzQV7DNUjhg0s=',
	'ta/TurboActivate.dat': 'PhkRnrJT+bO/NvUGpZZIPtEoPV4=',
};
const ta_errors = {
	2: 'The product key is invalid or there\'s no product key.', //TA_E_PKEY
	4: 'Connection to the server failed.', //TA_E_INET
	5: 'The product key has already been activated with the maximum number of computers.', //TA_E_INUSE
	6: 'The product key has been revoked.', //TA_E_REVOKED
	7: 'Looks like some important files are incorrect. Please try again or re-install the app.', //TA_E_GUID
	8: 'Looks like some important files are incorrect. Please try again or re-install the app.', //TA_E_PDETS
	11: 'CoInitializeEx failed. Re-enable Windows Management Instrumentation (WMI) service. Contact your system admin for more information.', //TA_E_COM
	13: 'Failed because your system date and time settings are incorrect. Fix your date and time settings, restart your computer, and try to activate again.', //TA_E_EXPIRED
	15: 'Insufficient system permission. Start your process as an admin / elevated user.', //TA_E_PERMISSION
	17: 'The function failed because this instance of your program is running inside a virtual machine / hypervisor.', //TA_E_IN_VM
	28: 'Please enable all network adapters. The network adapters do not need an active Internet connections. They just need to not be disabled.', //TA_E_ENABLE_NETWORK_ADAPTERS
	30: 'The verified trial has expired.', //TA_E_TRIAL_EXPIRED
	34: 'The function failed because this instance of your program is running inside a Sandbox (e.g. Sandboxie, Docker, etc.).', //TA_E_IN_SANDBOX
};



const child_process = require('child_process');
const crypto = require('crypto');
const fs = require('fs');



function get_file_hash(file) {
	return new Promise(function(resolve, reject) {
		var hash = crypto.createHash('sha1');
		hash.setEncoding('base64');
		var fd = fs.createReadStream(file);
		fd.on('end', function() {
			hash.end();
			resolve([file, hash.read()]);
		});
		fd.pipe(hash);
	});
}



function systa() {
	var args = arguments;

	var check_files = [];
	for(var i in ta_files_to_check) {
		check_files.push( get_file_hash( i ) );
	}

	return Promise

	.all(check_files)

	.then(function(ress) {
		for(var res of ress) {
			if(ta_files_to_check[res[0]] != res[1]) {
				throw('Incorrect hash of '+res[0]+'   Should be '+ta_files_to_check[res[0]]);
			}
		}
	})

	.then(function() {
		return new Promise(function(resolve, reject) {
			var timeout = setTimeout(function() {
				reject('systa timeout');
			}, 60000);

			var curr_call = -1;

			var ret = {};

			var process = child_process.spawn(ta_bin, ['5']);

			process.stdout.on('data', function(data) {
				if(data.length > 4) {
					//additional result, for example after TrialDaysRemaining call
					var data2 = data.slice(4);
					data = data.slice(0, 4);
				} else {
					var data2 = false;
				}
				console.log('systa', curr_call, args[curr_call][0], 'stdout', data, data.readInt32LE(), data2);
				if(data2) {
					data2 = data2.readInt32LE();
				}
				ret[curr_call] = [data.readInt32LE(), data2];
				curr_call++;
				if(curr_call >= args.length) {
					process.kill();
					clearTimeout(timeout);
					resolve(ret);
				} else {
					write_call(curr_call);
				}
			});

			process.stderr.on('data', function(data) {
				console.log('systa', curr_call, args[curr_call][0], 'stderr', data.toString());
			});

			/*process.on('close', function(code) {
				console.log('child process exited with code', code);
			});*/

			function write_call(i) {
				curr_call = i;
				for(var argument of args[curr_call]) {
					if(argument.type == 'string') {
						var buf = Buffer.allocUnsafe(2);
						buf.writeInt16LE(argument.val.length, 0);
						process.stdin.write(buf);
						process.stdin.write(argument.val, 'utf8');
					} else {
						var buf = Buffer.allocUnsafe(argument.size);
						buf[argument.type](argument.val, 0);
						process.stdin.write(buf);
					}
				}
			}

			write_call(0);
		});
	});
}



systa(
	[
		{type: 'writeInt32LE', size: 4, val: 3} //func - CheckAndSavePKey
		, {type: 'string', val: key}
		, {type: 'writeUInt32LE', size: 4, val: 2} //flags - TA_USER
	],
	[
		{type: 'writeInt32LE', size: 4, val: 0} //func - Activate
	]
)

.then(function(res) {
	var activation_result = res[1][0];
	if(typeof(ta_errors[activation_result]) != 'undefined') {
		var serr = ta_errors[activation_result];
	} else {
		var serr = 'Please check the key, internet connection and your system and try again.';
	}
	console.error('Activation unsuccessful. '+serr+' Error code T'+(1000+activation_result));
})

.catch(function(err) {
	console.error('Looks like some important files are incorrect. Please try again or re-install the app.', err);
});
