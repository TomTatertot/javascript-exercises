const removeFromArray = function(array, numRemove, ...moreArgs) {

    let i = 0;
    while (i < array.length){
        if (array[i] === numRemove){
            array.splice(i, 1);
        }
        else i++;
    }
    if (moreArgs.length > 0){
        for (let i = 0; i < moreArgs.length; i++){
            let removeArgNum = moreArgs[i];
            let j = 0;  
            while (j < array.length){
                if (array[j] === removeArgNum){
                    array.splice(j, 1);
                }
                else j++;
            }
        }
    }

    return array;
}
// Do not edit below this line
module.exports = removeFromArray;
