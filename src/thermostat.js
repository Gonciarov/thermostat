class Thermostat {
  constructor(){
    this.temperature = 20
    this.power_saving_mode = true
    this.max_temperature = 25
  }

  currentUsage(){
    if (this.temperature < 18)
      {return 'Low_usage'}
    if (this.temperature <= 25 )
      {return 'Medium_usage'}
    return 'High_usage'
  }

  increase() {
    if (this.power_saving_mode === false)
      {this.max_temperature = 32}
      if (this.power_saving_mode === true)
        {this.max_temperature = 25}
    this.temperature += 1;
    if (this.temperature > this.max_temperature)
      { this.temperature = this.max_temperature;
        throw new Error("That's too much")};
    return this.temperature;

  }

  power_saving_mode_on(){
    this.power_saving_mode = true;
    this.temperature = 20;
  }

  power_saving_mode_off(){
    this.power_saving_mode = false;
  }

  reset(){
    this.temperature = 20;
  }
  psmStatus(){
    if (this.power_saving_mode === true)
    {return 'ON'}
    if (this.power_saving_mode === false)
    {return 'OFF'}
  }

  decrease(){

    this.temperature -= 1;
    if (this.temperature < 10)
      { this.temperature = 10;
        throw new Error("10 is minimum")};
    return this.temperature;

  }

}

var a = new Thermostat;

a.power_saving_mode_off();

console.log(a.psmStatus());
for (i = 0; i < 11; i++) {
  a.increase();
};
