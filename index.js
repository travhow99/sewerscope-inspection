$(document).ready(function() {
  console.log('ready');

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

  $('#lineCondition3').change(function() {

    const numberInput = `<input type="number" class="number-input">`;
    let $selected = $('#lineCondition3 option:selected');
    console.log($(this).siblings('.editing'));

    if ($selected.hasClass('number')) {
      $editable = $selected.text().replace("{num}", numberInput);
      $selected.parent().prev().append(`<p class="editing">${$editable} <span class="remover">x</span></p>`);
      $(this).hide();
    }

    console.log($('#lineCondition3 option:selected').text());
  });

});
