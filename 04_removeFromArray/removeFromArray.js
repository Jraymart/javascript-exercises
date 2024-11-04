const removeFromArray = function(...args) {
    //While going over each argument passed into the function,
    //first argument is the array to be editted,
    //arguments after will be values to be removed
    //while going over each value in array, remove any value that matches the value to be removed
    
    for(let i = 1; i < args.length; i++){ //iterate through each argument after the first
        let removeVal = args[i];
        for(let j = args[0].length -1; j >= 0; j--){ //iterate through each value in array and remove matches
            if(args[0][j] === removeVal){
                args[0].splice(j,1);
            }
        }
    }
    return args[0];
};

// Do not edit below this line
module.exports = removeFromArray;
