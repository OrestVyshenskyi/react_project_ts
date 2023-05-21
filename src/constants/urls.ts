const baseURL = 'https://api.themoviedb.org/3';
const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjFhZTkxOTZhNTM4ZDM2ODVhOGIzZTRjYWUzNThkYyIsInN1YiI6IjY0NWY2NWU4OGM0NGI5MDBlMTY0ZDMxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mIOpUi6JeklhVboUY2MlrSxC0By1yDBy9845aWWC_5A'


const urls = {
    movies:'/discover/movie',
    search:'search/movie?query=',
    genres:'/genre/movie/list',
    movieById:'/movie',
    genresById:'/discover/movie'

}
export {
    baseURL,
    urls,
    accessToken
}