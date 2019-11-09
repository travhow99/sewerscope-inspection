function previewFiles() {

  var preview = document.querySelector('#preview');
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

  if (files) {
    [].forEach.call(files, readAndPreview);
  }

}

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

    // observer.disconnect();
    // addImgRemover();
    // observer.observe(targetNode, config);
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
function addConditions(id) {
  const defect = id.selector;
  let placeholder = "Main Line Condition ";

  const defectNum = defect.substr(-1);

  placeholder += defectNum;

  id.append(`<option selected="true" disabled="disabled">${placeholder}</option>`);

  // Loop through conditions
  conditions.forEach(function (condition, index) {
    // if '{num}' is present
    if (condition.indexOf('{num}') >= 0) {
      id.append(`<option class="number">${condition}</option>`);
    } else {
      id.append(`<option>${condition}</option>`);
    }
  });

  // add class 'number'

  //id.append('<option>test</option>');
}

$(document).ready(function() {
  $(this).scrollTop(0);

  // Include Bootstrap tooltip for dynamic element
  $('[data-toggle="tooltip"]').tooltip();

  $("body").tooltip({
      selector: '[data-toggle="tooltip"]'
  });

  //console.log(conditions.length);

  function jsUcfirst(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

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

  $('select').change(function() {
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
    console.log('clicked');
    let $this = $(this);
    console.log($this);
    $this.closest('.editing').siblings('.form-control').show();
    $this.closest('.editing').hide();

    $this.closest('.location-edit').siblings('.form-control').show();
    $this.closest('.location-edit').remove();
  });

  // Click function for dynamic .add-range
  $(document).on('click', '.add-range', function(){
    const rangeElement = ` - <input type="number" class="number-range">`;

    //Hide tooltip
    $(this).tooltip('hide');

    $(this).replaceWith(rangeElement);
  });

  function generatePDF() {
    event.preventDefault();

    const title = $('#companyName').val();
    console.log(title);

    let source = `<body><h1>${title}</h1>`;

    var x = $("#mainForm").serializeArray();
    console.log(x)
    $.each(x, function(i, field){
      source += '<p><strong>' + jsUcfirst(field.name) + ":</strong> " + field.value + '</p>';
    });

    // Gather all form-group info
    $('.form-group').each(function() {
      let $value;
      let $label = $(this).children('label').text();
      if ($(this).has('.editing').length !== 0) {
        $value = $(this).children('.editing').text();
      } else if ($(this).has('.location-edit').length !== 0) {
        $value = $(this).children('.location-edit').text();
      } else if ($label === 'Inspector Recommendations:') {
        $value = '<ul>';
        $.each($('#recommendations input:checked'), function(index, value) {
          $value += "<li>";
          $value += $(value).val();
          $value += "</li>";
        });
        $value += '</ul>';
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

      console.log(images);

      Object.keys(images).map((x) => {
        console.log(images[x]);
        formData.append('images[]', images[x]);
        // formData.append('images[]', x[1], `image${x}.jpg`);
        // Append to formData
      });

      formData.append('text', source);

      console.log(formData);

      $.ajax({
        type: 'POST',
        url: 'pdf/generate-pdf.php',
        data: formData,
        processData: false,
        contentType: false
       }).done(function(response) {
        if (response == 'success') {
          console.log('test')
          // location.reload();
          window.open('pdf/report.pdf', '_blank');
        }
      });

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


      console.log(res);


      $(this).html(res);
    })
  }

// TO-DO
  // Prevent submission if incomplete
  $("#submit").click(function() {
    // Call function to fix all .editing
    gatherData();

    generatePDF();
  });

  $('.add-condition').click(function() {
    $('#condition4').show();
    $(this).hide();
  })


});
