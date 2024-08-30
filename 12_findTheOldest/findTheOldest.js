const findTheOldest = function(array) {
    return array.reduce((groupedPeople, person) => {
        const groupedPeopleAge = groupedPeople.yearOfDeath == null ? new Date().getFullYear() - groupedPeople.yearOfBirth : groupedPeople.yearOfDeath - groupedPeople.yearOfBirth;
        const personAge = person.yearOfDeath == null ? new Date().getFullYear() - person.yearOfBirth : person.yearOfDeath - groupedPeople.yearOfBirth;

        return groupedPeopleAge < personAge ? person : groupedPeople;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
