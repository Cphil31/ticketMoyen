window.onload = function () {
    let form = document.querySelector("form");

    console.log(form);
    let Ca = document.querySelector("input[name='Ca']");
    let NbClient = document.querySelector("input[name='Nb']");

    //object.onsubmit = function(){myScript};
    
    form.addEventListener("submit",function(e){
        console.log("formulaire soumis");
        console.log(Ca.value);
        console.log(NbClient.value);

        console.log(`Chiffre d'affaire = ${Ca.value}`);
        console.log(`Nombre de clients = ${NbClient.value}`);
        e.preventDefault();
    })

}