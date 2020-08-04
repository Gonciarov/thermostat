
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

});
