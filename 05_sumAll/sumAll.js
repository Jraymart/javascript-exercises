const sumAll = function(start, end) {
    //sum(n) = n(n+1)/2
    //sum(start,end) = sum(end) - sum(start - 1)
    if(Number.isInteger(start) && Number.isInteger(end) && start >= 0 && end >= 0){
        if (start > end){
            let temp = start;
            start = end;
            end = temp;
        };
        const sumEnd = (end *(end + 1))/2;
        const sumStart = ((start -1) * start)/2;
        return sumEnd - sumStart;
    }
    else {return "ERROR";}
};

// Do not edit below this line
module.exports = sumAll;
