function myEach(hoodies, iannichopi) {
    for (const a in hoodies) {
        iannichopi(hoodies[a]);
    }
    return hoodies
}
function myMap(hoodies, iannichopi) {
    let newArray = [];
    for (const a in hoodies){
        newArray.push(iannichopi(hoodies[a]));
    }
    return newArray;
}
function myReduce(hoodies,iannichop, acc){
    let value = acc ? acc : Object.values(hoodies)[0]
    for(const a in hoodies){
     value = iannichop(value, hoodies[a], hoodies)
    }
    return value;
}
function myFind (collection, predicate){
    let itemFound;
    for (const a in collection){
        itemFound = predicate(collection[a]);
        if(itemFound){
            itemFound = collection[a];
            return itemFound;
        }
    }
}
function myFilter (collection, predicate){
    const returnedArray = [];
    for(const a in collection){
        const itemFound = predicate(collection[a]);
        if(itemFound){
            returnedArray.push(collection[a]);
        }
    }
    return returnedArray;
}
function mySize (collection){
    let entity = 0;
    for (const a in collection) { entity ++ };
    return entity;
}
function myFirst(array, int) {
    let returnedInteger;
    let returnedArray = [];
    if(int){
        for (let i = 0; i < int; i++){
            returnedArray.push(array[i]);
        }
        return returnedArray;
    } else {
        returnedInteger = array[0];
        return returnedInteger
    }
}
function myLast (array, int) {
    const reversedArray = array.reverse();
    let returnedInteger;
    let returnedArray = [];
    if(int){
        for (let i = array.length - int; i < array.length; i++){
            returnedArray.push(array[i]);
        }
        return returnedArray;
    } else {
        returnedInteger = reversedArray[0];
        return returnedInteger;
    }
}
function myKeys (object) {
    const keysArray = [];
    for(const k in object){
        keysArray.push(k);
    }
    return keysArray;
}

function myValues (object) {
    const valuesArray = [];
    for(const k in object){
        valuesArray.push(object[k]);
    }
    return valuesArray;
} 
