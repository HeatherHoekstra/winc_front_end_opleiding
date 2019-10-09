var getWordLengths = function(someWords) {
    const wordLength = someWords.map(function(word){
        return word.length;
    });
    return wordLength;
       };

module.exports = getWordLengths;