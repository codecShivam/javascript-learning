function makeClass(){
      class Thermostat{
        constructor(temp){
            this._temp = 5/9 * (temp - 32);//_temp underscore is mainly used when we don't need that name outside of that fuction
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
      }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
console.log(thermos);//an object _temp: 24.4444
thermos.temperature = 26;//set will work here
temp = thermos.temperature;
console.log(temp);//26