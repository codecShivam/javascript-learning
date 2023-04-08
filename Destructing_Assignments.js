var voxel ={ x: 3.6 , y: 4.5 ,z:3};
// // 

var x = voxel.x; //x=3.6
var y = voxel.y;//y=4.5
var z = voxel.z;//z=3
// 
// instead of this
const {x: a,y:b, z:c} = voxel;//a=3.6 ,b =4.5 ,c=3;
document.write(`${a} ${b} ${c}`);
// 
const arr1=['jan','fab','march','apr','may'];
let arr2;
(function (){
  arr2=arr1; 
  arr1[0]='potato';
})();
console.log(arr2);
// 

// // Use Destructuring assignment to assign variables from objects
const avgTemp = {
  today: 77.5,
  tomorrow: 79
};
function AVG_temp(avgTemp){
"use strict";
 // const tempOfTomorrow = avgTemp;//istead of this
  const { tomorrow: tempOfTommorw } = avgTemp;
  return tempOfTommorw;
  }
console.log( AVG_temp(avgTemp));
// 
// for nested object 
const localForecast = {
    today: { min: 72, max: 84 },
    tomorrow: { min: 34, max: 53 }
};
function getMaxOfTmr(forecast) {
    "use strict";
    const { tomorrow: { max: maxOfTomorrow } } = forecast;
    return maxOfTomorrow;
}
document.write(getMaxOfTmr(localForecast));//53
// 

// // Use Destructuring Assignment to assign variables from arrays
const [z, , x] = [1, 2, 3, 4, 5, 6];
document.write(z, x)//1 3
// 
// let a = 8, b = 5;
(() => {
    "use strict";
    [a,b]=[b,a];
})();
document.write(a)
document.write(b)
// 
const source =[1,2,3,4,5,6,7,8,9,10];
// 
function removeFirstTwo(list){
    // const [a,b, ...arr] = list;//a=1,b=2 
    const [, , ...arr]=list; //these both will remove the first two elements
    return arr;
}
const arr= removeFirstTwo(source);
document.write(arr);
document.write(source);
// 
//Use Destructuring Assignment to Pass an Object as a function's parameters
// 

const stats = {
    max:54,
    sd:3,
    median:54,
    mode: 34,
    min:43,
    average:3,
};
const half = (function(){
    // return function (stats){
    //     return (stats.max + stats.min)/2.0;
    // } //return the same as below but here whole stats will passed 
    return function half({max,min}){
        return (max + min)/2.0;//we don't need to write stats.min or max because we have already called them using destructuring assignment
    };

})();
console.log(stats);
document.write(half(stats));