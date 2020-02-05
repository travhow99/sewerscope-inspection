const opt = {
  // margin: 1,
  pagebreak: { mode: 'avoid-all' },
  filename:     'sewerscope-report.pdf',
  // html2canvas:  { scale: 1 },
  // jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
}

function previewFiles() {

  var preview = document.querySelector('#preview');
  preview.innerHTML = '';
  var files   = document.querySelector('input[type=file]').files;

  function readAndPreview(file) {

    // Make sure `file.name` matches our extensions criteria
    if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
      var reader = new FileReader();

      reader.addEventListener("load", function () {
        var container = document.createElement('div');
        var span = document.createElement('span');
        span.classList.add('img-remover');

        var x = document.createTextNode('x');
        span.appendChild(x);

        var image = new Image();
        image.height = 100;
        image.title = file.name;
        image.src = this.result;

        container.appendChild(image);
        container.appendChild(span);

        preview.appendChild(container);
      }, false);

      reader.readAsDataURL(file);
    }

  }

  function checkFileSize(file) {
    return;
    if (file.size / 1024 / 1024 > 1) {
      alert('Please upload files under 1MB');
      document.querySelector('input[type=file]').value = '';
      files = false;
      return false;
    }
  }

  if (files) {  
    [].forEach.call(files, checkFileSize);
    

    [].forEach.call(files, readAndPreview);
  }

}

// TODO: Remove file from File Input list...
$('body').on('click', '.img-remover', function() {
  $(this).prev('img, span').remove();
  $(this).remove();
});

// Select the node that will be observed for mutations
const targetNode = document.getElementById('preview');

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing


function gatherImages() {
  let fileInput = document.getElementById('browse');
  let files = fileInput.files;

  // files = Object.entries(files);

  return files;
}


const conditions = [
  'Multiple offsets were visible in the main sewer line/pipe.',
  'An offset was visible in the main sewer line/pipe at approximately {num} feet from the access point.',
  'An offset with root intrusion was visible in the main sewer line/pipe at approximately {num} feet from the access point.',
  'Multiple offsets with root intrusion were visible in the main sewer line/pipe.',
  'Multiple offsets with heavy root intrusion were visible in the main sewer line/pipe.',
  'An offset with heavy root intrusion was visible in the main sewer line/pipe at approximately {num} feet from the access point.',
  'Root intrusion at a joint was visible in the main sewer line/pipe at approximately {num} feet from the access point.',
  'Heavy root intrusion at a joint was visible in the main sewer line/pipe at approximately {num} feet from the access point.',
  'Hairline cracks appeared to be visible in the main sewer line/pipe at approximately {num} feet from the access point.',
  'There appeared to be a crack visible in the main sewer line/pipe at approximately {num} feet from the access point.',
  'The main sewer line/pipe was holding water at approximately {num} feet from the access point.',
  'A belly / low point was visible in the main sewer line/pipe at approximately {num} feet from the access point.',
  'The main sewer line/pipe appeared to be separated / disconnected at approximately {num} feet from the access point.',
  'The main sewer line/pipe appeared to be crushed at approximately {num} feet from the access point.',
  'The main sewer line/pipe appeared to be broken at the city tap.',
  'Root intrusion was visible at the city tap.',
  'A belly / low point that was holding water and debris was visible in the main sewer line/pipe at approximately {num} feet from the access point.',
  'The main sewer line/pipe appeared to be cracked at the city tap.',
  'The main sewer line/pipe appeared to be offset at the city tap.',
  'Heavy rust / scale was visible in the cast iron portion of the main sewer line/pipe.',
  'An offset with heavy root intrusion was located in the main sewer line/pipe city tap.',
  'Heavy grease build up was visible in the main sewer line/pipe.',
  'The camera was restricted / could not proceed at approximately {num} feet from the access point.',
  'Due to the heavy intrusion of roots, the main sewer line/pipe was not visible for inspection.',
  'Due to the heavy intrusion of roots, portions the main sewer line/pipe were not visible for inspection.',
  'Due to the heavy scale, the interior portion of the main sewer line/pipe was not fully visible for inspection.',
  'The camera could not advance past {num} feet / was not able to reach city tap, the sewer scope / inspection is limited to areas viewed.',
  'The main sewer line/pipe appeared to be egg shaped / compressed.',
  'The main sewer line/pipe appeared to be delaminated / deteriorated.',
  'The main sewer line/pipe appeared to be Orangeburg / Bermico (Bituminous fiber pipe), there have been documented problems related with this product.',
  'A crack was visible in the main sewer line/pipe at approximately {num} feet from the access point.',
  'Multiple cracks were visible in the main sewer line/pipe.',
  'The main sewer line/pipe was holding water and debris at multiple locations.',
  'Heavy root intrusion at a joint was visible in the main sewer line/pipe at multiple locations.'
];

// Append conditions as options
// TODO:
// Adapt for recommendations as well
function addConditions(id) {
  const defect = id.selector;
  let placeholder = "Main Line Condition ";

  const defectNum = defect.substr(-1);

  placeholder += defectNum;

  id.append(`<option selected="true" disabled>${placeholder}</option>`);

  // Loop through conditions
  conditions.forEach(function (condition, index) {
    // if '{num}' is present
    if (condition.indexOf('{num}') >= 0) {
      id.append(`<option class="number">${condition}</option>`);
    } else {
      id.append(`<option>${condition}</option>`);
    }
  });
}

function addRecommendation() {
  const el = $('#recommendations');
  let placeholder = "Inspector Recommendation";

  el.append(`<option value="0" selected disabled>${placeholder}</option>`);

  // Loop through recommendations
  recommendations.forEach(function (rec, index) {
    // if '{num}' is present
    if (rec.indexOf('{num}') >= 0) {
      el.append(`<option class="number">${rec}</option>`);
    } else {
      el.append(`<option>${rec}</option>`);
    }
  });

}

function jsUcfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

$(document).ready(function() {
  $(this).scrollTop(0);

  
  

  // Include Bootstrap tooltip for dynamic element
  $('[data-toggle="tooltip"]').tooltip();

  $("body").tooltip({
      selector: '[data-toggle="tooltip"]'
  });  

  $( function() {
    $( "#datepicker" ).datepicker();
  } );

  $('.timepicker').timepicker({
      timeFormat: 'h:mm p',
      interval: 15,
      minTime: '6',
      maxTime: '10:00pm',
      defaultTime: '8',
      startTime: '6:00',
      dynamic: false,
      dropdown: true,
      scrollbar: true
  });

  addConditions($('#lineCondition1'));
  addConditions($('#lineCondition2'));
  addConditions($('#lineCondition3'));
  addConditions($('#lineCondition4'));
  addRecommendation();

  $('select:not(#recommendations)').change(function() {
    let $this = $(this);
    let $selected = $this.find(':selected');

    const numberInput = `<input type="number" class="number-input"><a class="add-range" data-toggle="tooltip" title="Add Range"><sup>+</sup></a>`;
    //let $selected = $('#lineCondition3 option:selected');

    if ($selected.hasClass('number')) {
      $editable = $selected.text().replace(/{num}/g, numberInput);
      $selected.parent().prev().after(`<p class="editing">${$editable} <span class="remover">x</span></p>`);
      $(this).hide();
    }

    // Changeable locations
    if ($selected.hasClass('location')) {
      console.log('location');
      const dropdown = `<select class="location-dropdown">
                          <option>front yard</option>
                          <option>rear yard</option>
                          <option>side yard</option>
                          <option>street</option>
                          <option>alley</option>
                        </select>`;
      $location = $selected.text().replace('{location}', dropdown);
      $selected.parent().prev().after(`<p class="location-edit">${$location} <span class="remover">x</span></p>`);
      $(this).hide();
    }

  });

  // Click function for dynamic .remover
  $(document).on('click', '.remover', function(){
    let $this = $(this);
    console.log($this);

    if ($this.parents('ul').attr('id') === 'recommendationList') {
      console.log('found it');

      $this.parents('li').remove();
    } else {
      $this.closest('.editing').siblings('.form-control').show();
      $this.closest('.editing').hide();
  
      $this.closest('.location-edit').siblings('.form-control').show();
      $this.closest('.location-edit').remove();
    }

  });

  // Click function for dynamic .add-range
  $(document).on('click', '.add-range', function(){
    const rangeElement = ` - <input type="number" class="number-range">`;

    //Hide tooltip
    $(this).tooltip('hide');

    $(this).replaceWith(rangeElement);
  });

  function generatePDF() {
    console.log('gather PDF');
    event.preventDefault();

    const title = $('#companyName').val();
    console.log(title);

    let source = `<body>
                    <h1>Sewer Scope Report</h1>
                    <h2>${title}</h2>`;

    var x = $("#mainForm").serializeArray();
    console.log(x)
    $.each(x, function(i, field){
      source += '<p><strong>' + jsUcfirst(field.name) + ":</strong> " + field.value + '</p>';
    });

    // Gather all form-group info
    $('.form-group').each(function() {
      let $value;
      let $label = $(this).children('label').text();
      if ($(this).has('.editing').length !== 0 && $label !== 'Inspector Recommendations:') {
        $value = $(this).children('.editing').text();
      } else if ($(this).has('.location-edit').length !== 0) {
        $value = $(this).children('.location-edit').text();
      } else if ($label === 'Inspector Recommendations:') {
        $label = 'Inspector Recommendation:';
        $value = '<ul>';

        $.each($('#recommendationList li'), function(i, val) {
          let v = $(val).text();
          console.log(v);
          v = v.replace(' x', '');
          $value += `<li>${v}</li>`;
        });

        $value += '</ul>';
        if ($value === '<ul></ul>') {
          $value = '';
        }
      } else if ($(this).attr('id')==="video") {
        $value = 'https://' + $('#videoUrl').val();
      } else {
        $value = $(this).children('select').val();
      }
      if ($value && $value !== 'https://' && $value !== '') {
        source += '<p><strong>' + $label + '</strong> ' + $value  + '</p>';
      }
      // console.log($label, $value);
    });
    console.log(source);

      let images = gatherImages();

      let formData = new FormData();

      const activeImages = [];

      $('#preview img').each((i, e) => {
          activeImages.push($(e).attr('title'));
      });

      Object.keys(images).map((x) => {

        // If image has been removed
        // don't send with formdata
        if (activeImages.indexOf(images[x].name) === -1) {
          return;
        }
        
        formData.append('images[]', images[x]);
      });

      formData.append('text', source);

      console.log(formData);

      $('.loader-container').css('display', 'flex');

      $('#print').html(source);
      // $('#print').append($('#preview').children());
      $('#preview').children().clone().appendTo('#print');

      var element = document.getElementById('print');
      // html2pdf(element);
      // html2pdf().set(opt).from(element).save();

      window.print();  




/*       $.ajax({
        type: 'POST',
        url: './pdf/generate-pdf.php',
        data: formData,
        processData: false,
        contentType: false
       }).done(function(response) {
        if (response == 'success') {
          window.open('./pdf/report.pdf?' + (new Date()).getTime(), '_blank');
          $('.loader-container').hide();
        }
      }).fail((response) => {
        alert('Upload failure. Try uploading fewer or smaller images.');
        $('.loader-container').hide();
      });
 */
    return;

  }

  function gatherData() {
    const $input = '<input type="number" class="number-input">';
    const $range = '<input type="number" class="number-range">';
    const $span = ' <span class="remover">x</span>';

    $('.editing').each(function() {

      let $inputValue = $(this).children('.number-input').val();
      let $inputRange = $(this).children('.number-range').val();

      let $html = $(this).html();

      let res = $html.replace($input, $inputValue);

      if ($inputRange) {
        res = res.replace($range, $inputRange)
      }

      res = res.replace($span, '');
      res = res.replace('+', '');

      $(this).html(res);
    });

    $('.location-edit').each(function() {
      const dropdown = `<select class="location-dropdown">
                          <option>front yard</option>
                          <option>rear yard</option>
                          <option>side yard</option>
                          <option>street</option>
                          <option>alley</option>
                        </select>`;

      let $selected = $(this).find('.location-dropdown').children(':selected').val();
      console.log($selected);

      let $html = $(this).html();

      let res = $html.replace(dropdown, $selected);

      res = res.replace($span, '');
      res = res.replace('+', '');

      $(this).html(res);
    })
  }

// TO-DO
  // Prevent submission if incomplete
  $("#submit").click(function(e) {
    e.preventDefault();
    if (!verifyForm()) {
      alert('Please fill in the required fields!');
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    }
    // Call function to fix all .editing
    gatherData();

    generatePDF();
  });

  function verifyForm() {
    var emptyFields = $('input.required').filter(function() {
        return $(this).val() === "";
    }).length;
    if (emptyFields === 0) {
      return true;
   } else {
      $('#error').show();
      return false;   
    }
  }

  $('.add-condition').click(function() {
    $('#condition4').show();
    $(this).hide();
  })

  $('#recommendations').change(function() {
    const recommendation = $(this).val();//children('option:selected').attr('title');

    let template = `<li>${recommendation} <span class="remover">x</span></li>`;
    console.log(template);
    if (template.indexOf('{num}') >= 0) {
      const numberInput = `<input type="number" class="number-input"><a class="add-range" data-toggle="tooltip" title="Add Range"><sup>+</sup></a>`;

      template = template.replace('<li>', '<li class="editing">');
      template = template.replace(/{num}/g, numberInput);
    }

    console.log(template);
    $(template).addClass('editing');

    $('#recommendationList').append(template);
    $(this).val('0');


  })


});
