import { dishesdisplay } from "./dishe.js";

const searchinput = document.getElementById("main_search");

export function mainFilterNative(recipes) {
    searchinput.addEventListener('keyup', function(){
        // recupère la valeur du input
        const inputValue = searchinput.value;
        // compare le input à personnes
        let result = recipes.filter(item => 
            item.ingredients.find((ingredientArray) => ingredientArray.ingredient.toLowerCase().includes(inputValue.toLowerCase()) ) ||
            item.appliance.toLowerCase().includes(inputValue.toLowerCase()) ||
            item.ustensils.find((ustensils ) => ustensils.toLowerCase().includes(inputValue.toLowerCase()) ) ||
            item.name.toLowerCase().includes(inputValue.toLowerCase())
        );
        // Met chaque resultat dans un div
        let suggestion = '';
        if(inputValue != "") {
            result.forEach(resultItem => suggestion +=`${dishesdisplay(resultItem)}`);
        } else {
            suggestion = `${recipes.map(dishesdisplay).join("")}`;
        }
        // Affichage de chaque resultat
        document.getElementById("articles").innerHTML = suggestion;
    });
}