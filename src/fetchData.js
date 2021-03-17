function getData() {
    const API_URL = "https://starwars.egghead.training/";
  
    const responsePromise = fetch(API_URL + 'films');
    
    return responsePromise.then(
        (res)=>{
            //console.log(res);
            return res.json();
        },(error) => {
            console.log(error);
        }).then(films => getFilmTitles(films)
        ,(error => []))
  }
function getFilmTitles(films){
    return films
    .sort((a,b) => a.episode_id - b.episode_id)
    .map(film => `${film.episode_id}. ${film.title}`);
}
  
export default getData;