import { LightningElement } from 'lwc';

export default class Netflix extends LightningElement  {
  searchQuery;
  hasSearchQuery=false;

  renderedCallback() {
    this.loadPopularMovies();
    this.loadTrendingMovies();
    this.hasSearchQuery=true;
  }

  handleChange(event){
    this.searchQuery=event.target.value;
    this.hasSearchQuery=this.searchQuery?true:false;
  }

  loadPopularMovies() {
  fetch("https://api.themoviedb.org/3/movie/popular?api_key=26e6c70b1c0f7b13af614c4aa81998bf")
  .then((response) => {
      return response.json();
    })
    .then((newResponse) => {
      var popularMovies = newResponse.results.slice(0, 12); //20

      popularMovies.forEach((movie) => {
        var poster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        this.template.querySelector(".popular").insertAdjacentHTML(
          "afterbegin",
          `<a href="" class="slds-col slds-size_2-of-12 slds-var-p-around_medium"><img src="${poster}" alt=""/></a>`
        );
      });
    });
  }
  //=======================================================
  loadTrendingMovies() {
  fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=26e6c70b1c0f7b13af614c4aa81998bf")
    .then((response) => {
      return response.json();
    })
    .then((newResponse) => {
      var trendingMovies = newResponse.results.slice(0, 8);

      trendingMovies.forEach((movie) => {
        //it will execute based on the array size
        var poster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        this.template.querySelector(".trending").insertAdjacentHTML(
          "afterbegin",
          `<a href="" class="slds-col slds-size_2-of-12 slds-p-around_medium"><img src="${poster}" alt=""/></a>`
        );
      });
    });
  }
//=======================================================
  handleButtonClick(){
      this.template.querySelector(".general-section").style.display = "none";
      var query = this.template.querySelector("lightning-input").value;
      console.log('SearchText '+query);

      fetch(`https://api.themoviedb.org/3/search/movie?api_key=26e6c70b1c0f7b13af614c4aa81998bf&query=${query}`)
        .then((response) => {
          return response.json();
        })
        .then((newResponse) => {
          var movies = newResponse.results;
          movies.forEach((movie) => {
            if(movie.poster_path==null)
            return;
            var poster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
            this.template.querySelector(".searchResults").insertAdjacentHTML(
              "beforeend",
              `<a href="" class="slds-col slds-size_2-of-12 slds-p-around_medium"><img src="${poster}"alt=""/></a>`
                );
          });
        });
      }
}