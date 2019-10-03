const favMovie = { 
    title: 'Harry Potter and the prisoner of Azkaban',
    duration: 160, 
    stars: ['Redcliff', 'Watson', 'Grint'],
}

function movieInfo(movie){
    console.log(movie.title + 'lasts for ' + movie.duration + ' minutes. Stars: ' + movie.stars);
}
movieInfo(favMovie)

