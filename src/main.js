const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers:{
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': API_KEY,
    },
});

async function getTrendingMoviesPreview(){

    const {data} = await api('trending/movie/day'); //data viene del objeto que crea axios, para traer unicamente la información bajo dicho campo.
    const movies = data.results; //results from json structure of api documentation
    
    movies.forEach(movie => {
        //Selecciona el id trendingPreview y la clase trendingPreview-movieList
        const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList')
        //crea dentro de dicha clase un div
        const movieContainer = document.createElement('div');
        //agrega la clase movie-container al div
        movieContainer.classList.add('movie-container');

        //Crea una etiqueta img
        const movieImg = document.createElement('img');
        //Añade la clase movie-img
        movieImg.classList.add('movie-img');
        //Añade atributos
        movieImg.setAttribute('alt','movie.title');
        //Formato src viene desde la Api 
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300'+ movie.poster_path);


        movieContainer.appendChild(movieImg);
        trendingPreviewMoviesContainer.appendChild(movieContainer);
    });
}

async function getCategoriesPreview(){

    const {data} = await api('genre/movie/list');
    const categories = data.genres; //results from json structure of api documentation
    
    categories.forEach(category => {
        const previewCategoriesContainer = document.querySelector('#categoriesPreview .categoriesPreview-list')
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', 'id' + category.id);
        
        
        const categoryTitleText = document.createTextNode(category.name);
        
        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        previewCategoriesContainer.appendChild(categoryContainer);

    });

    
}

getTrendingMoviesPreview();
getCategoriesPreview();

