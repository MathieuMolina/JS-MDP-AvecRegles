const bouton = document.getElementById('bouton');
const minuscule = document.querySelector("#minuscule");
const majuscule = document.querySelector("#majuscule");
const chiffre = document.querySelector("#chiffre");
const special = document.querySelector("#special");
const longueur = document.querySelector('#longueur');



window.onload = () => {
    document.querySelector("#password").addEventListener("input", checkPasseword);
}

//Fonction qui vérifie le MDP:
function checkPasseword() {
    
    // 1: on récupère ce qui a été saisi,
    let mdp = this.value;
    Valider(mdp);



    // 2: on vérifie qu'on a une minuscule avec une expression régulière

    if (/[a-z]/.test(mdp)){
        minuscule.classList.replace("invalid", "valid")
    }
    else {
        minuscule.classList.replace("valid", "invalid")
    }

    if (/[A-Z]/.test(mdp)){
        majuscule.classList.replace("invalid", "valid")
    }
    else {
        majuscule.classList.replace("valid", "invalid")
    }



    if (/[0-9]/.test(mdp)){
        chiffre.classList.replace("invalid", "valid")
    }
    else {
        chiffre.classList.replace("valid", "invalid")
    }


    if (/[$@!%*#&.]/.test(mdp)){
        special.classList.replace("invalid", "valid")
    }
    else {
        special.classList.replace("valid", "invalid")

    }

    if (/.{12,}/.test(mdp)){

        longueur.classList.replace("invalid", "valid")
    }else{
        longueur.classList.replace("valid", "invalid")
    }

    // document.querySelector("[type=submit]").style.display = "initial";
}



function Valider(mdp) {
    console.log();
    if ((/[$@!%*#&.]/.test(mdp)) && (/[0-9]/.test(mdp)) && (/[A-Z]/.test(mdp)) &&  (/[a-z]/.test(mdp)) && /.{12,}/.test(mdp)) {
        bouton.style.display = "block";
    }
}