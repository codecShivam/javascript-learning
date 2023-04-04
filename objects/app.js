var collection = {
    "216": {
        "person": "aryan",
        "age": 19,
        "works": [
            "gym", "library"
        ]
    },
    "218": {
        "person": "abdul",
        "age": 18,
        "works": [
            "anime", "code"
        ]
    }
}

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id,prop,value){
    if (value === ""){
        delete collection[id][prop];
    }else if  (prop === "works"){
        collection[id][prop] = collection[id ][prop] || [];
        collection[id][prop].push(value);
    }else{
        collection[id][prop]= value;
    }
    return collection;
}
;
console.log(updateRecords("218","person","shivam"));