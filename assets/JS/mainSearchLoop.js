import { dishesdisplay } from "./dishe.js";

const searchinput = document.getElementById("main_search");
const recettes = document.getElementById("articles");

export function mainFilterLoop(recipes){
    searchinput.addEventListener('keyup', function(){
        // recupère la valeur du input
        const inputValue = searchinput.value;
        
        let filterArray = [];

        let suggestion = '';

        if(inputValue != "" && inputValue.length >= 3) {
            for(let item of recipes){
                if(
                    item.ingredients.find((ingredientArray) => ingredientArray.ingredient.toLowerCase().includes(inputValue.toLowerCase()) ) ||
                    item.appliance.toLowerCase().includes(inputValue.toLowerCase()) ||
                    item.ustensils.find((ustensils ) => ustensils.toLowerCase().includes(inputValue.toLowerCase()) ) ||
                    item.name.toLowerCase().includes(inputValue.toLowerCase())
                ){
                    filterArray.push(item);
                    recettes.style.display = "grid";
                    filterArray.forEach(resultItem => { suggestion +=`${dishesdisplay(resultItem)}`; } );
                    document.getElementById("articles").innerHTML = suggestion;
                }
            }
        } else {
            recettes.style.display = "grid";
            suggestion = `${recipes.map(dishesdisplay).join("")}`;
        }
        if(filterArray.length == 0){
            // affiche message erreur
            recettes.style.display = "block";
            suggestion = 
            `
            <p class="errorMessage">
                Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc...
            </p>
            `;
        }

        myIncludes(suggestion, 'coco');
        
    });
}