
describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('starts at 20', function() {
  it("should start when temperature is 20", function() {
    expect(thermostat['temperature']).toEqual(20);
  });
});

  describe('increase temperature', function() {
    it('can increase the temperature', function() {
      for (i = 0; i < 5; ++i) {
        thermostat.increase();
      }
      expect(thermostat['temperature']).toEqual(25);

    });

  });

  describe('decrease temperature', function() {
    it('can decrease the temperature', function() {
      for (i = 0; i < 5; ++i) {
        thermostat.decrease();
      }
      expect(thermostat['temperature']).toEqual(15);

    });

  });

  describe('throws an error for min', function() {
    it('can throw an error for too low', function() {
      for (i = 0; i < 10; ++i) {
        thermostat.decrease();
      }
      expect(function() {thermostat.decrease()}).toThrowError("10 is minimum");
    });
  });
  describe('throws an error for max', function() {
    it('can throw an error for too high temperature', function() {
      for (i = 0; i < 5; ++i) {
        thermostat.increase();
      }
      expect(function() {thermostat.increase()}).toThrowError("That's too much");
    });
  });
  describe('power save mode can be switch on and off', function() {
    it('power save mode can be boolean', function() {

      expect(thermostat['power_saving_mode']).toBeTruthy();

    });
  });
  describe ('reset', function() {
    it ('can reset temperature to 20 degrees', function() {
      thermostat.increase();
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });
  describe ('current_usage', function() {
    it ('can indicate low, medium or high usage', function() {
      thermostat.decrease()
      thermostat.decrease()
      thermostat.decrease()
      expect(thermostat.currentUsage()).toEqual('Low_usage')
    });
  });
});
