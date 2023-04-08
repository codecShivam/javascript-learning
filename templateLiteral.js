const result = {
    success: ["max-length","no-amd", "prefer-arrow-functions"],
    failure: ["no-var","var-on-top","linebreak"],
    skipped: ["id-blacklist","no-dup-keys"]
}
function makeList(arr){
    const resultDisplayArray=[];
    for(let i=0; i<arr.length ; i++)
    {
        resultDisplayArray.push(`<h1 class="text-warning" >${arr[i]}</h1>`)
    }
    return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);
document.write(resultDisplayArray);


// Write Concise Object Literal Declarations Using  Simple  Fields

// const createPerson = (name,age,gender) => { 
    // return {
    //     name:name,
    //     age:age,
    //     gender:gender
    // };
// };
console.log(createPerson("Shivam Yadav","19", " male"))
                        // OR//ONLY IF BOTH THE KEY AND VALUE  IS SAME
const createPerson = (name,age,gender)=> ({name,age,gender});
console.log(createPerson("Shivam Yadav", "19 ","male"));