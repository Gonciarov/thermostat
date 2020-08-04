
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
      thermostat.increase(5);
      expect(thermostat['temperature']).toEqual(25);

    });

  });

  describe('decrease temperature', function() {
    it('can decrease the temperature', function() {
      thermostat.decrease(5);
      expect(thermostat['temperature']).toEqual(15);

    });

  });

  describe('throws an error for min', function() {
    it('can throw an error for too low', function() {

      expect(function() {thermostat.decrease(11)}).toThrowError("10 is minimum");
    });
  });
  describe('throws an error for max', function() {
    it('can throw an error for too high temperature', function() {

      expect(function() {thermostat.increase(20)}).toThrowError("That's too much");
    });
  });
  describe('power save mode can be switch on and off', function() {
    it('power save mode can be boolean', function() {

      expect(thermostat['power_saving_mode']).toBeFalsy();

    });
  });
});
