const palindromes = function (str) {
    //convert passed string to all lowercase and remove any punctuation or spaces
    //convert string to array reverse it then join again
    //compare cleaned string with reverse string
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g,"");
    let reversedStr = cleanedStr.split('').reverse().join('');

    if (reversedStr === cleanedStr){
        return true;
    }
    return false;

};

// Do not edit below this line
module.exports = palindromes;
