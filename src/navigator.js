window.addEventListener('DOMContentLoaded', navigator , false);
window.addEventListener('hashchange', navigator , false);

function navigator(){
    console.log({location});
    
    if(location.hash.startsWith('#trends')){
        trendsPage();
    }else if (location.hash.startsWith('#search=')){
        searchPage();
    }else if (location.hash.startsWith('#movie=')){
        moviesPage();
    }else if (location.hash.startsWith('#category=')){
        categoriesPage();
    }else{  
        homePage();
    }
}

function homePage(){
    console.log('home!!'); 

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericListSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');

    getTrendingMoviesPreview();
    getCategoriesPreview();
}
function categoriesPage(){
    console.log('categories!!');
}
function moviesPage(){
    console.log('movie!!');
}
function searchPage(){
    console.log('Search!!');
}
function trendsPage(){
    console.log('Trends!!');
}