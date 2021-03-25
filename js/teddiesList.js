// Le DOM se charge 
document.addEventListener('DOMContentLoaded', () =>{
    const teddiesAPI = 'http://localhost:3000/api/teddies';
    const mainContent = document.getElementById('content');

// Récuperer les teddies    
    function getTeddies(){
        let requete = new XMLHttpRequest();
        requete.open('GET', teddiesAPI);
        requete.responseType = 'json';
        requete.send(null);
        requete.onload = function(){
            let reponse = requete.response;
            for(let i = 0; i < reponse.length; i++){
                let id = reponse[i]['_id'];
    
                // création des cartes responsives 
                let card = document.createElement('div');
                card.classList.add('card');
                card.classList.add('col-12');
                card.classList.add('col-md-5');
                card.classList.add('col-lg-3');
                card.classList.add('m-2');
                mainContent.appendChild(card);
    
                // on ajoute l'image avec img
                let image = document.createElement('img');
                image.setAttribute('src', reponse[i]['imageUrl']);
                card.appendChild(image);
    
                // le nom avec un h2
                let name = document.createElement('h2');
                name.textContent = reponse[i]['name'];
                card.appendChild(name);
    
                // la description avec un p
                let description = document.createElement('p');
                description.textContent = reponse[i]['description'];
                card.appendChild(description);
    
                // le prix en euro avec un span 
                let price = document.createElement('span');
                let euros = parseInt(reponse[i]['price']);
                euros = euros / 100;
                price.textContent = euros + ' \u20ac';
                card.appendChild(price);

                // user choisis un produit
                card.addEventListener('click', ()=>{
                    console.log(name.textContent);
                    window.open('product.html' + '?id=' + id, '_self');
                });

                
            }
        }
    }
    // on obtient le résultat de la fonction  
    getTeddies();
});