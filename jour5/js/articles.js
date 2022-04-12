fetch("./assets/db.json")
.then(reponse => reponse.json())
.then(function(articles){
    let articlesHtml = `<section class="row">`
        articlesHtml += genererArticles(articles)
        articlesHtml += `<section>`
    document.querySelector("main").innerHTML = articlesHtml 
})