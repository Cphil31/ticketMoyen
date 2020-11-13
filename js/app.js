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
        
        let sum = document.createElement("p");
        sum.setAttribute("class","text-center");
        divResult.innerHTML="";


        let res = Math.round(ticketMoyen * 100) / 100
        console.log(res);
        
        sum.innerHTML=`Le ticket moyen est de ${res} euros `;
        divResult.appendChild(sum);

        
        
        e.preventDefault();
    })

}