class Thermostat {
  constructor(){
    this.temperature = 20
    this.power_saving_mode = false
    this.max_temperature = 32
  }

  max_temperature(){
    switch (this.power_saving_mode) {
      case true:
      this.max_temperature = 25
      break;
  }
}

  increase(number) {
    this.temperature += number;
    if (this.temperature > this.max_temperature)
      {throw new Error("That's too much")};
    return this.temperature;

  }

  power_saving_mode_tumbler(){
    !this.power_saving_mode;
  }


  decrease(number){
    this.temperature -= number;
    if (this.temperature < 10)
      {throw new Error("10 is minimum")};
    return this.temperature;

  }

}

var a = new Thermostat;
a.power_saving_mode_tumbler();
a.decrease(8)
console.log(a.temperature)
