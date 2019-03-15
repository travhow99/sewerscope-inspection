$(document).ready(function() {

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

  $('select').change(function() {
    let $this = $(this);
    let $selected = $this.find(':selected');

    const numberInput = `<input type="number" class="number-input">`;
    //let $selected = $('#lineCondition3 option:selected');

    if ($selected.hasClass('number')) {
      $editable = $selected.text().replace("{num}", numberInput);
      $selected.parent().prev().after(`<p class="editing">${$editable} <span class="remover">x</span></p>`);
      $(this).hide();
    }

  });

  $(document).on('click', '.remover', function(){
    console.log('clicked');
    let $this = $(this);
    console.log($this);
    $this.closest('.editing').siblings('.form-control').show();
    $this.closest('.editing').hide();
  });



  function generatePDF() {
    event.preventDefault();
    let source = `<body><h1>Sewer Scope Report</h1>`;

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
      } else {
        $value = $(this).children('select').val();
      }
      source += '<p><strong>' + $label + '</strong> ' + $value  + '</p>';
    });

    var pdf = new jsPDF('p', 'pt', 'letter');
    pdf.canvas.height = 72 * 11;
    pdf.canvas.width = 72 * 8.5;

    //console.log(source);

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

      //let pdfBase64 = pdf.output('datauristring');
/*
      window.plugin.email.open({
        to: [''],
        subject: 'New PDF!',
        body: 'Hi there, here is that new PDF you wanted!',
        isHTML: false,
        attachments: [pdfBase64]
      });
*/
    //pdf.save('test.pdf');
    //pdf.output('dataurlnewwindow');


    $.ajax({
      //method: "POST",
      url: "email.php",
      type: "POST",
      data: source,
      /*
    }).done(function(data){
       console.log(data);
       */
    });

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
    const $span = ' <span class="remover">x</span>';

    $('.editing').each(function() {

      let $inputValue = $(this).children('.number-input').val();
      let $html = $(this).html();

      let res = $html.replace($input, $inputValue);
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
