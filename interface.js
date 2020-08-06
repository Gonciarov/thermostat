$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);
  $('#psm-status').text("Power saving mode is " + thermostat.psmStatus());
  $('#decrease').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
    thermostat.decrease();
    $('#temperature').text(thermostat.temperature);
  });
  $('#current-city').change(function() {
    city = $('#current-city').val();

  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a604eeb52c0819d71493632cb9136d65&units=metric', function(data) {
   $('#current-temperature').text(data.main.temp);
})
})
  $('#increase').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
    thermostat.increase();
    $('#temperature').text(thermostat.temperature);
  });
  $('#reset').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
    thermostat.reset();
    $('#temperature').text(thermostat.temperature);
  });
  $('#powersaving-on').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
    thermostat.power_saving_mode_on();
    $('#psm-status').text("Power saving mode is " + thermostat.psmStatus());
  });
  $('#powersaving-off').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
    thermostat.power_saving_mode_off();
    $('#psm-status').text("Power saving mode is " + thermostat.psmStatus());
  });

});

// api.openweathermap.org/data/2.5/weather?q=London&appid=a604eeb52c0819d71493632cb9136d65
