// central de la page d'accueil


fetch("./assets/db.json")
.then(reponse => reponse.json())
.then(function(articles){
    const accueil = {
        hero : "https://source.unsplash.com/random/1200x400",
        titre : "Bienvenu sur mon blog",
        articles : articles.slice(0,3)
    }
    
    let htmlAccueil = `
        <img src="${accueil.hero}" alt="" class="img-responsive">
        <h1 class="text-center">${accueil.titre}</h1>`
    
        htmlAccueil += `<section class="row">`
        htmlAccueil += genererArticles(accueil.articles);
        htmlAccueil += `</section>`
    document.querySelector("main").innerHTML = htmlAccueil
})

