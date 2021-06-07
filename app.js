const form = document.querySelector('#form');
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

// récupère les éléments HTML qui ont l'attribu name et la valeur ...
let username = form.elements.namedItem("username");
let password = form.elements.namedItem("password");

// mise en place des écoutes d'évènements
// input permet d'écouter à chaque changement du input
username.addEventListener('input', validate);
password.addEventListener('input', validate);



// blocage de la soumission des données pour le projet
form.addEventListener('submit', function (e){
    e.preventDefault();   
});

function validate(e){
    let target = e.target;
    let usernameStatus;
    // console.log("testing validation");
    if(target.name == "password"){
        // si le password value  match le regex, alors class valid
        if(passwordRegex.test(target.value)){
            target.classList.add('valid');
            target.classList.remove('invalid');
            console.log("validation : OK");
        }
        // sinon class invalid
        else{
            target.classList.add('invalid');
            target.classList.remove('valid');
        }
    }
    if(target.name == "username"){
        if(target.value.length >= 5){
            target.classList.add('valid');
            target.classList.remove('invalid');
            console.log("validation : OK");
        }
        // sinon class invalid
        else{
            target.classList.add('invalid');
            target.classList.remove('valid');
            console.log("validation : WRONG");
        }
    }
}

