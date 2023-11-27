//function
function truthyCount(){
    //truthy value
    let vals = [true, 0, "Bonjour", false, "",40,'+',50,"prototype"];
    let tCount = cntTruthyVals(vals);
    console.log('Number of truethies', tCount);
}

//function
function cntTruthyVals(array) {
    let countInc = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i]) {
            countInc++;
        }
    }
    return countInc;
}

truthyCount();