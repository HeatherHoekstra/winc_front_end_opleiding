const API_KEY = "9d8bbf46d70093430614085824d8832b";

async function getMovies() {
  const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
  const result = fetch(apiUrl, { method: "GET" })
    .then(response => response.json())

    .catch(error => console.log(error));
  return await result;
}
