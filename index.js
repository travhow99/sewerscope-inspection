$(document).ready(function() {

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

    var x = $("#mainForm").serializeArray();
    $.each(x, function(i, field){
      console.log(field.name + ":" + field.value + " ");
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
      console.log($(this));
      let $inputValue = $(this).children('.number-input').val();
      let $html = $(this).html();

      let res = $html.replace($input, $inputValue);
      res = res.replace($span, '');

      console.log($html.indexOf($input));
      console.log(res);
      $(this).html(res);
    });
  }

  $("#submit").click(function() {
    // Call function to fix all .editing
    gatherData();

    generatePDF();
  });


});
