class Thermostat {
  constructor(){
    this.temperature = 20
  }
  increase(number) {
    return this.temperature += number;
  }
}
