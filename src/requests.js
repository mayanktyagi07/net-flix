const API_KEY = "b80ea47efbb9d926f5e323b9bf469510"

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumantaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,


    

}
export default requests
//https://api.themoviedb.org/3//movie/top_rated?api_key=b80ea47efbb9d926f5e323b9bf469510&language=en-US