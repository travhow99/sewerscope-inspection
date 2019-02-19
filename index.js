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
});
