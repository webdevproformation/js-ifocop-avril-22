fetch("./assets/db.json")
.then(reponse => reponse.json())
.then(function(articles){
    const [ ,id] = location.search.split("=")
    // console.log(id)
    const article = articles.find(function(a){ return a.id == id })
    if(!article) return location.href = "/jour5/" ; // sécurité 
    console.log()
    const articleHtml = `
        <h1>${article.titre}</h1>
        <img src="${article.img}" alt="">
        <p>${article.contenu}</p>
    `
    document.querySelector("main").innerHTML = articleHtml
})

// const hello = "bonjour les amis"
// const resultat = hello.split(" ")
// ["bonjour","les","amis"]