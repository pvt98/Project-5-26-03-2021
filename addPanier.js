import {ajaxetfetch} from "/js/module/ajaxetfetch.js"

let storage = JSON.parse(localStorage.getItem("panier"));

    createContainers();
    

var totalPrice = 0;
storage.forEach( function(element, index, array) {
   
    let article = ajaxetfetch.loadDoc("http://localhost:3000/api/teddies/", element.id);
    let articleJson = JSON.parse(article);
    console.log(index);
    
    createOrder(articleJson, index);

    totalPrice = totalPrice + articleJson.price;  
});

    // fonction pour le prix total de la commande
    function totalCont(){
        let totalProduct = document.getElementById("price")
        totalProduct.innerHTML = (totalPrice + " " + "€")
    }

    totalCont();

    //createAllElements(storage);

    function createContainers(){
        
        let commandCont = document.getElementById("commandcont");
    
        function noTeddies(commandCont){
            let noProduct = document.createElement("h2");
            noProduct.innerHTML = "Votre panier est vide"
            commandCont.appendChild(noProduct);
        }
    // si les storage est nul on renvoie la fonction panier vide
        if (storage == null){
            noTeddies(commandCont);

    // sinon on renvoie l'order preview
        } else {
            let orderPreview = document.createElement("div");
            orderPreview.id = ("orderPreview")
            commandCont.appendChild(orderPreview);
        }
    }

    // création du contenu de la commande
    function createOrder(storage, index){
        let order = document.createElement("form");
        order.className = ("order container");
    
        // ajout de l'image
        let orderImg = document.createElement("img");
        orderImg.className = ("orderPreview_image border");
        orderImg.src = (storage.imageUrl);
        order.appendChild(orderImg);
    
        // ajout du name
        let orderName = document.createElement("h1")
        orderName.className = ("orderPreview_name")
        orderName.innerHTML = (storage.name);
        order.appendChild(orderName);

        // ajout du prix
        let orderPrice = document.createElement("h2");
        orderPrice.className = ("orderPreview_price");
        let prixArticle = storage.price/100;
        orderPrice.innerHTML = ( prixArticle + " " + "€");
        order.appendChild(orderPrice);

        // ajout du bouton supprimer
        let pushProduct = document.createElement("div");
        pushProduct.className = ("far fa-trash-alt")
        pushProduct.id = ("btn_trash")
        order.appendChild(pushProduct);

        var indexTab = index;
        pushProduct.addEventListener("click", function(){

            console.log(indexTab);



        })

        let orderPreview = document.getElementById("orderPreview");
        orderPreview.appendChild(order);
    }

    // envoie du contenu du panier a l'API //
    /////////////////////////////////////////

    const passerCom = document.getElementById("orderButton");
    /////////////////////////////////////////

    passerCom.addEventListener('click' , function (e)  {
      
        /////////////////////////////////////////
        console.log(e);
        // envoi du prix total au localStorage


        localStorage.setItem('PrixTotalCommande', totalPrice);

        const storagePrice = localStorage.getItem('PrixTotalCommande');


        console.log(storagePrice);
        /////////////////////////////////////////

        
        
        /*Envoi à l'API 
        /*Tableau et objet demandé par l'API pour la commande*/

        let contactFn = document.getElementById("form_fn").value;
        let contactLn = document.getElementById("form_ln").value;
        let contactA = document.getElementById("form_a").value;
        let contactC = document.getElementById("form_c").value;
        let contactE = document.getElementById("form_e").value;

        /////////////////////////////////////////

        /////////////////////////////////////////

        

    
            const onlyLettersRegex = /^[a-zA-Z-éÉàâäéèêëïîôöùûüÿç]+$/;
            const adressRegex = /^[0-9a-zA-Z-éÉàâäéèêëïîôöùûüÿç\ ]+/;
            const emailRegex = /\S+@\S+\.\S+/;
    
            let result_fn = onlyLettersRegex.test(contactFn);
            let result_ln = onlyLettersRegex.test(contactLn);
            let result_a = adressRegex.test(contactA);
            let result_c = onlyLettersRegex.test(contactC); 
            let result_e = emailRegex.test(contactE);

            console.log(result_fn);
    
            if (result_fn === true && result_ln === true && result_a === true && result_c === true && result_e === true){
                
                console.log("ca passe");
                  // ouverture de la page confirmation de commande 
                window.open("commande.html");

            } else {
                
                console.log("ca passe pas");
            }
       


 /////////////////////////////////////////

        /*Création de l'objet "contact"*/
    });


 


    

    





    








