let form = document.querySelector('#form');
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

// récupère les éléments HTML qui ont l'attribu name et la valeur ...
let username = form.elements.namedItem("username");
let password = form.elements.namedItem("password");
let submitBtn = document.getElementById('submit-btn');
let submitBtnIndication = document.getElementById('submit-btn-indication');
let usernameIndication = document.getElementById('indication-username');
let passwordIndication = document.getElementById('indication-password');

// mise en place des écoutes d'évènements
// input permet d'écouter à chaque changement du input
username.addEventListener('input', validate);
password.addEventListener('input', validate);
let usernameStatus = false;
let passwordStatus = false;

function validate(e){
    let target = e.target;

    let connexionStatus = false;
    // console.log("testing validation");
    if(target.name == "password"){
        // si le password value  match le regex, alors class valid
        if(passwordRegex.test(target.value)){
            target.classList.add('valid');
            target.classList.remove('invalid');
            passwordIndication.style.visibility = "hidden";
            passwordStatus = true;
        }
        // sinon class invalid
        else{
            target.classList.add('invalid');
            target.classList.remove('valid');
            passwordIndication.style.visibility = "visible";
            passwordIndication.innerHTML = "*le mot de passe doit comporté au minimum : <br> 1 majuscule, 1 chiffre, et 8 caractères";
        }
        console.log(passwordStatus);
        return passwordStatus;   
    }
    if(target.name == "username"){
        if(target.value.length >= 5){
            target.classList.add('valid');
            target.classList.remove('invalid');
            usernameIndication.style.visibility = "hidden";
            usernameStatus = true;
        }
        // sinon class invalid
        else{
            target.classList.add('invalid');
            target.classList.remove('valid');
            usernameIndication.style.visibility = "visible";
            usernameIndication.innerHTML = "*l'identifiant doit comporté au minimum 5 caractères";
        }
        console.log(usernameStatus);
        return usernameStatus;  
    }   
}
// blocage de la soumission des données pour le projet
form.addEventListener('submit', function (e){
    e.preventDefault();  
    if(usernameStatus ==true && passwordStatus == true){
        alert("Connexion en cours");
    } 
});
submitBtn.addEventListener('mouseenter', function (e){
    if(usernameStatus ==true && passwordStatus == true){
        submitBtn.style.cursor ="pointer";
    }
    else{
        submitBtn.style.cursor="not-allowed";
        submitBtnIndication.style.visibility = "visible";
        submitBtnIndication.innerHTML = "Respectez le format demandé avant de valider les saisies";
    } 
})
submitBtn.addEventListener('mouseleave', function (e){
    submitBtnIndication.style.visibility = "hidden";
})
