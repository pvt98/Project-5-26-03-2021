let totalCom = document.getElementById('totalCommande');
let storagePrix = JSON.parse(localStorage.getItem("PrixTotalCommande"));
    totalCom.innerHTML = (storagePrix + " " + "€");


    //récuperer le local storage
    

let totalList = document.getElementById('numberCommande');
let storageList = JSON.parse(localStorage.getItem("order"));
totalList.innerHTML = storageList.orderId

localStorage.clear();

   
 

//console.log(storageId);


////panier.clear