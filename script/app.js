let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let commentaire = document.getElementById("message");
let formulaire = document.getElementById("form");
console.log(formulaire);


function champCompleted(){
    // verification des champs vide ou non
         if (firstName.value !== "" && lastName.value !== "" && commentaire.value !== ""){
         addComment();

    } else {
        let errorMessage = document.getElementById("error-message");
        console.log(errorMessage);
        errorMessage.style.display ="block";
    }
}


function addComment(){
    // ajout du nouveau commentaire
    let newComment = document.createElement("div");
    let nomPrenom= document.createElement("h3");
    let com = document.createElement("p");

   
    nom.innerHTML = firstName.value + lastName.value; 
    com.innerHTML = commentaire.value;

    let listComment = document.getElementById("comment-list");
    newComment.appendChild(nomPrenom);;
    newComment.appendChild(com);
    listComment.appendChild(newComment);



    // réinisialiser les champs : 
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("message").value = "";
}

formulaire.addEventListener("submit", champCompleted);

