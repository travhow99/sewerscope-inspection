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

})
