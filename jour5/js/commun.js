// javascript
// injecter du html dans la balise header et la balise footer de toutes les pages du site 
// 1 seul endroit pour le html du menu et du pied de page 

const htmlMenu = `
    <nav class="navbar navbar-expand bg-light navbar-light mb-4">
        <a href="index.html" class="navbar-brand">
            <img src="https://via.placeholder.com/100x50" alt="logo">
        </a>
        <ul class="navbar-nav ms-auto">
            <li class="nav-item">
                <a href="index.html" class="nav-link">Accueil</a>
            </li>
            <li class="nav-item">
                <a href="articles.html" class="nav-link">Articles</a>
            </li>
            <li class="nav-item">
                <a href="contact.html" class="nav-link">Contact</a>
            </li>
        </ul>
    </nav>
`;
document.querySelector("header").innerHTML = htmlMenu

const htmlFooter = `
    <hr>
    <p class="text-center">
      ${ (new Date()).getFullYear() } - &copy; - Prénom - <a href="mentions.html">Mentions légales</a>
    </p>
`;
document.querySelector("footer").innerHTML = htmlFooter ;

function genererArticles(data){
    let html = ""
    for(let i = 0 ; i < data.length ; i++){
        html += `
            <article class="col-4 mb-4">
                <div class="card">
                    <h2 class="card-header">${data[i].titre}</h2>
                    <img src="${data[i].img}" alt="" loading="lazy">
                    <p class="card-body">${data[i].contenu}</p>
                    <div class="card-footer">
                        <a href="single.html?id=${data[i].id}" class="btn btn-success btn-sm">
                            lire la suite ...
                        </a>
                    </div>
                </div>
            </article>`
    }
    return html ;
}
