function getData() {
    const API_URL = "https://starwars.egghead.training/";
  
    const responsePromise = fetch(API_URL + 'films');
    
    return responsePromise.then(
        (res)=>{
            //console.log(res);
            return res.json();
        },(error) => {
            console.log(error);
        }).then(films => {
            const filmTitles = films.map (film => film.title);
            return filmTitles;
        },(error) => []);
  }

  
export default getData;