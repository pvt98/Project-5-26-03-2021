// Le DOM se charge
document.addEventListener('DOMContentLoaded', () =>{
    const teddiesApi = 'http://localhost:3000/api/teddies';
    const mainContent = document.getElementById('content');
    
    // récuperer l'id et l'url 
    let param = new URLSearchParams(window.location.search);
    const id = param.get('id');

    // fonction pour récupérer le produit 
    function getProduct(){
        let requete = new XMLHttpRequest();
        requete.open('GET', teddiesApi + '/' + id);
        requete.responseType = 'json';
        requete.send(null);
        requete.onload = function(){
            let reponse = requete.response;
            let id = reponse['_id'];
    
            // création de la carte avec div
            let card = document.createElement('div');
            card.classList.add('card');
            card.classList.add('col-6');
            card.classList.add('m-auto');
            mainContent.appendChild(card);
    
            // ajout de l'image avec img
            let image = document.createElement('img');
            image.setAttribute('src', reponse['imageUrl']);
            image.id = ("productImage");
            card.appendChild(image);
    
            // du nom avec h2
            let name = document.createElement('h2');
            name.textContent = reponse['name'];
            name.id = ("productName");
            card.appendChild(name);
    
            // de la description avec p
            let description = document.createElement('p');
            description.textContent = reponse['description'];
            card.appendChild(description);
    
            // des couleurs avec div
            let color = document.createElement('div');
            let labelColor = document.createElement('label');
            labelColor.setAttribute('for', 'colors');
            
            labelColor.textContent = "couleur :   ";

            // ajout du selecteur option pour les couleurs 
            let selectColor = document.createElement('select');
            selectColor.setAttribute('id', 'colors');

            // pour chaque reponse des couleurs
            for (let i = 0; i < reponse['colors'].length; i++){
                let option = document.createElement('option');
                option.setAttribute('value', reponse['colors'][i]);
                option.textContent = reponse['colors'][i];
                selectColor.appendChild(option);
            }
            // placement de label et select dans variable color avec div
            color.appendChild(labelColor);
            color.appendChild(selectColor);
            // placement de color dans la carte
            card.appendChild(color);  
    
            // le prix avec span 
            let price = document.createElement('span');
            let euros = parseInt(reponse['price']);
            price.id = ("teddyPrice");
            euros = euros / 100;
            price.textContent = 'Prix : ' + euros + ' \u20ac';
            card.appendChild(price);
    
            // le bouton d'ajout au panier avec button
            let button = document.createElement('button');
            button.textContent = 'Ajouter au panier';
            button.classList.add('btn');
            button.classList.add('btn-success');
            button.classList.add('col-4');
            button.classList.add('m-auto');
            card.appendChild(button);

            button.addEventListener("click", function(){ // au clic

                
                let productPrice = document.getElementById("teddyPrice");
                let productImage = document.getElementById("productImage")
                let productName = document.getElementById("productName");
                let storage = JSON.parse(localStorage.getItem("panier"));


              


                    if (storage == null){
                        let storage = ["string"];
                        let newObj = {id:id}
                        storage.push(newObj);
                        storage.shift();
                        console.log(storage);
                        localStorage.setItem("panier", (JSON.stringify(storage)));
                        window.alert("L'objet a été ajouté au panier")
                    

                } else{
                    let newObj = {id:id}
                        storage.push(newObj);
                        console.log(storage)
                        localStorage.setItem("panier", (JSON.stringify(storage)))
                        window.alert("L'objet a été ajouté au panier")
                }

            });


            
        }
    
    }
    // récuperation du produit 
    getProduct();





});

