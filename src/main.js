const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        'api_key': API_KEY,
    },
});

async function getTrendingMoviesPreview(){

    const {data} = await api('trending/movie/day'); //data viene del objeto que crea axios, para traer unicamente la información bajo dicho campo.
    const movies = data.results; //results from json structure of api documentation
    
    movies.forEach(movie => {
        
        const trendingMoviesPreviewList = document.querySelector('#trendingPreview .trendingPreview-movieList') //Selecciona el id trendingPreview y la clase trendingPreview-movieList
        const movieContainer = document.createElement('div'); //crea dentro de dicha clase un div
        movieContainer.classList.add('movie-container'); //agrega la clase movie-container al div

        
        const movieImg = document.createElement('img');//Crea una etiqueta img
        
        movieImg.classList.add('movie-img');//Añade la clase movie-img
        
        movieImg.setAttribute('alt','movie.title');//Añade atributos
        
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300'+ movie.poster_path);//Formato src viene desde la Api 


        movieContainer.appendChild(movieImg);
        trendingMoviesPreviewList.appendChild(movieContainer);
    });
}

async function getCategoriesPreview(){

    const {data} = await api('genre/movie/list');
    const categories = data.genres; //results from json structure of api documentation
    
    categories.forEach(category => {
        const categoriesPreviewList = document.querySelector('#categoriesPreview .categoriesPreview-list')
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', 'id' + category.id);
        
        
        const categoryTitleText = document.createTextNode(category.name);
        
        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        categoriesPreviewList.appendChild(categoryContainer);

    });
}



