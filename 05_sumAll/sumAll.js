const sumAll = function(minimum, maximum) {
    if(minimum < 0  || maximum < 0) return("Error");
    let total = 0;
    for(i = minimum; i <= maximum; i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
