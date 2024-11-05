const leapYears = function(year) {
    //Leap Years are divisible by 4
    //Years divisible by 100 are not leap years
    //Years divisible by 400 are leap years
    if (year % 4 === 0 && (!(year % 100 === 0) || year % 400 === 0)){
        return true;
    }
    else return false;
};

// Do not edit below this line
module.exports = leapYears;
