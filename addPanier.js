import {ajaxetfetch} from "/js/module/ajaxetfetch.js"

let storage = JSON.parse(localStorage.getItem("panier"));

    createContainers();
    

var totalPrice = 0;
storage.forEach( function(element, index, array) {
    console.log(element.id);
    let article = ajaxetfetch.loadDoc("http://localhost:3000/api/teddies/", element.id);
    console.log(article);

    let articleJson = JSON.parse(article);
    console.log(articleJson);

    console.log(index);
    createOrder(articleJson);

    totalPrice = totalPrice + articleJson.price;  

    


    
    
});
    console.log(totalPrice);

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
    
        if (storage == null){
            noTeddies(commandCont);

        } else {
            let orderPreview = document.createElement("div");
            orderPreview.id = ("orderPreview")
            commandCont.appendChild(orderPreview);
        }
    }


    function createOrder(storage){
        let order = document.createElement("form");
        order.className = ("order container");
    
        let orderImg = document.createElement("img");
        orderImg.className = ("orderPreview_image border");
        orderImg.src = (storage.imageUrl);
        order.appendChild(orderImg);
    
        let orderName = document.createElement("h1")
        orderName.className = ("orderPreview_name")
        orderName.innerHTML = (storage.name);
        order.appendChild(orderName);
    
        let orderPrice = document.createElement("h2");
        orderPrice.className = ("orderPreview_price");
        orderPrice.innerHTML = (storage.price + " " + "€");
        
        order.appendChild(orderPrice);

        let pushProduct = document.createElement("div");
        pushProduct.className = ("far fa-trash-alt")
        pushProduct.id = ("btn_trash")
        order.appendChild(pushProduct);

        let orderPreview = document.getElementById("orderPreview");
        orderPreview.appendChild(order);
    }

    
    // evenement au click on met une fonction avec la fleche et ()

    const btn_trash = document.getElementById("btn_trash");

    btn_trash.addEventListener('click' , () => {
        console.log('supprimé');
        localStorage.removeItem("panier");


    

})





  
   

    

    
    
       

   


// fonction pour creer le tableau







// locker le form
   

  
     
// fonction pour récuperer le local storage



    