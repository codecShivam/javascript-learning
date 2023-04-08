//USE CLASS SYNTAX TO DEFINE A CONSTRUCTOR FUNCTION

// var SpaceShuttle = function (targetPlanet) {
//     this.targetPlanet = targetPlanet;
//     // this.me = targetPlanet;we are targetting a key value and assigning it a vlaue
// }
// var zeus = new SpaceShuttle('Jupiter');//an object created 
// console.log(zeus.targetPlanet);
// console.log(zeus)


//OR OTHER METHOD
// class SpaceShuttle {
//     constructor(targetPlanet) {
//         this.targetPlanet = targetPlanet;
//     }
// };
// var zeus = new SpaceShuttle('Jupiter');//an object created 
// console.log(zeus.targetPlanet);
// console.log(zeus);







//One more example
function makeClassOfVegetables(){
    class Vegetable {
        constructor(name){
            this.name= name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClassOfVegetables();//gave a new name to the this whole fuction which provides content for object
const carrot = new Vegetable('Carrot');//maked an object 
console.log(carrot.name);
console.log(carrot);