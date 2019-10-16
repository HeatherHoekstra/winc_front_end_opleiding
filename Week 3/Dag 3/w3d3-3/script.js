console.log("hi");

getMovies().then(responseJson => {
  //console.log("hier is je data om iets mee te gaan doen:", responseJson);
  document.body.innerHTML =
    "<pre>" + JSON.stringify(responseJson, null, " ") + "</pre>";
});
