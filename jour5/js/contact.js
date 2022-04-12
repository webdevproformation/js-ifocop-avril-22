const contactHtml = `
    <h1>Nous contacter</h1>
    <p>Vous avez des questions, veuillez utiliser le formulaire suivant :</p>
    <form>
        <div>
            <label for="email" class="form-label">votre email</label>   
            <input type="email" id="email" class="form-control">
        </div>
        <div class="my-4">
            <label for="commentaire" class="form-label">votre commentaire</label>   
            <textarea id="commentaire" class="form-control" rows="6"></textarea>
        </div>
        <div class="mb-4">
            <input type="submit" class="btn btn-outline-primary">
        </div>
    </form>
    <div class="reponse"></div>
`
document.querySelector("main").innerHTML = contactHtml; 

// traitement avant soumission du formulaire au serveur 
document.querySelector("form").addEventListener("submit" , function(e){
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const commentaire = document.querySelector("#commentaire").value;
    if(email != "" && commentaire != ""){
        document.querySelector(".reponse").innerHTML = `<div class="alert alert-success">merci pour votre message, nous revenons vers vous au plus vite </div>`
    }else{
        document.querySelector(".reponse").innerHTML = `<div class="alert alert-danger">veuillez compléter les deux champs </div>`
    }
});