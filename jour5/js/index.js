// central de la page d'accueil

const accueil = {
    hero : "https://source.unsplash.com/random/1200x400",
    titre : "Bienvenu sur mon blog",
    articles : [
        { titre : "article1" , contenu : "lorem ipsum" , id : 1 , img : "https://source.unsplash.com/random/400x200" },
        { titre : "article2" , contenu : "lorem ipsum" , id : 2 , img : "https://source.unsplash.com/random/400x201" },
        { titre : "article3" , contenu : "lorem ipsum" , id : 3 , img : "https://source.unsplash.com/random/400x202" }
    ]
}

let htmlAccueil = `
    <img src="${accueil.hero}" alt="" class="img-responsive">
    <h1 class="text-center">${accueil.titre}</h1>
`
    htmlAccueil += `<section class="row">`
for(let i = 0 ; i < accueil.articles.length ; i++){
    htmlAccueil += `
        <article class="col-4 mb-4">
            <div class="card">
                <h2 class="card-header">${accueil.articles[i].titre}</h2>
                <img src="${accueil.articles[i].img}" alt="">
                <p class="card-body">${accueil.articles[i].contenu}</p>
                <div class="card-footer">
                    <a href="single.html?id=${accueil.articles[i].id}" class="btn btn-success btn-sm">
                        lire la suite ...
                    </a>
                </div>
            </div>
        </article>`
}
    htmlAccueil += `</section>`
document.querySelector("main").innerHTML = htmlAccueil