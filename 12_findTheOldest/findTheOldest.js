const findTheOldest = function (people) {
   return people.reduce((oldest, current) => {
        const oldAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        return oldAge < currentAge ? current : oldest;
    });
};

const getAge = function(birth, death){
    if(!death){
        death = new Date().getFullYear();
    }
    return death - birth;
};



  
// Do not edit below this line
module.exports = findTheOldest;
