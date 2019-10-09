function addOne(numbers) {
	const more = numbers.map(function(number){
        return parseInt(number+1);
    });
    return more; 
    
};

module.exports = addOne;
