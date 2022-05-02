import { dishesdisplay } from "./dishe.js";

const searchinput = document.getElementById("main_search");
const recettes = document.getElementById("articles");

export function mainFilterNative(recipes) {
    searchinput.addEventListener('keyup', function(){
        // recupère la valeur du input
        const inputValue = searchinput.value;
        // compare le input aux éléments
        let result = recipes.filter(item => 
            item.ingredients.find((ingredientArray) => ingredientArray.ingredient.toLowerCase().includes(inputValue.toLowerCase()) ) ||
            item.appliance.toLowerCase().includes(inputValue.toLowerCase()) ||
            item.ustensils.find((ustensils ) => ustensils.toLowerCase().includes(inputValue.toLowerCase()) ) ||
            item.name.toLowerCase().includes(inputValue.toLowerCase())
        );
        // Met chaque resultat dans un div
        let suggestion = '';
        if(inputValue != "" && inputValue.length >= 3) {
            recettes.style.display = "grid";
            result.forEach(resultItem => suggestion +=`${dishesdisplay(resultItem)}`);
        } else{
            recettes.style.display = "grid";
            suggestion = `${recipes.map(dishesdisplay).join("")}`;
        }
        if(result.length == 0){
            // affiche message erreur
            recettes.style.display = "block";
            suggestion = 
            `
            <p class="errorMessage">
                Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc...
            </p>
            `;
        }
        // Affichage de chaque resulta
        recettes.innerHTML = suggestion;
    });
}