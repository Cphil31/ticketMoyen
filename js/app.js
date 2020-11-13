window.onload = function () {
    let form = document.querySelector("form");

    console.log(form);
    let Ca = document.querySelector("input[name='Ca']");
    let NbClient = document.querySelector("input[name='Nb']");
    let ticketMoyen = 0 ;
    let divResult = document.querySelector(".result");



    //object.onsubmit = function(){myScript};
    
    form.addEventListener("submit",function(e){
        console.log("formulaire soumis");
        console.log(Ca.value);
        console.log(NbClient.value);

        console.log(`Chiffre d'affaire = ${Ca.value}`);
        console.log(`Nombre de clients = ${NbClient.value}`);

        ticketMoyen = Ca.value/NbClient.value;
        console.log(`Ticket Moyen = ${ticketMoyen}`);


        divResult.innerHTML=`Le ticket moyen est de ${ticketMoyen}`;
        console.log(divResult);

        
        
        e.preventDefault();
    })

}