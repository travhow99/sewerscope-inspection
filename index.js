// TO-DO
  // And in the located section the street/yard/alley/road should be chang-able options like the footage counter in defects.


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

  });

  // Click function for dynamic .remover
  $(document).on('click', '.remover', function(){
    console.log('clicked');
    let $this = $(this);
    console.log($this);
    $this.closest('.editing').siblings('.form-control').show();
    $this.closest('.editing').hide();
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
    let source = `<body><h1>Sewer Scope Inspection</h1>`;

    var x = $("#mainForm").serializeArray();
    $.each(x, function(i, field){
      source += '<p><strong>' + jsUcfirst(field.name) + ":</strong> " + field.value + '</p>';
    });

    // Gather all form-group info
    $('.form-group').each(function() {
      let $value;
      let $label = $(this).children('label').text();
      if ($(this).has('.editing').length !== 0) {
        $value = $(this).children('.editing').text();
      } else if ($label === 'Inspector Recommendations:') {
        $value = $('#recommendations').val();
      } else if ($(this).attr('id')==="video") {
        $value = 'https://' + $('#videoUrl').val();
      } else {
        $value = $(this).children('select').val();
      }
      source += '<p><strong>' + $label + '</strong> ' + $value  + '</p>';
    });

    var pdf = new jsPDF('p', 'pt', 'letter');
    pdf.canvas.height = 72 * 11;
    pdf.canvas.width = 72 * 8.5;

    margins = {
      top: 40,
      bottom: 60,
      left: 40,
      width: 522
    };



    pdf.fromHTML(
      source,
      margins.left,
      margins.top, {
        'width': margins.width,
      },

      function (dispose) {
        // dispose: object with X, Y of the last line add to the PDF
        //          this allow the insertion of new lines after html
        //pdf.save('Test.pdf');

      }, margins);

      let pdfBase64 = pdf.output('datauristring');
/*
      window.plugin.email.open({
        to: [''],
        subject: 'New PDF!',
        body: 'Hi there, here is that new PDF you wanted!',
        isHTML: false,
        attachments: [pdfBase64]
      });
*/
    pdf.save('sewerscope-report.pdf');

/*
    let $formData = $('#mainForm');
    console.log($formData);
    var txt = "";
    var i;
    for (i = 0; i < $formData.length; i++) {
      txt = txt + $formData.elements[i].value + "<br>";
    }
    console.log(txt);


    console.log('clicked');
    var doc = new jsPDF()

    doc.text('Hello world!', 10, 10)
    //doc.save('a4.pdf')
*/
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

      $(this).html(res);
    });
  }

// TO-DO
  // Prevent submission if incomplete
  $("#submit").click(function() {
    // Call function to fix all .editing
    gatherData();

    generatePDF();
  });


});
