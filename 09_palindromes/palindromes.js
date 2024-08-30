const palindromes = function (word) {
    if (word == word.split('').reverse().join('')){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
