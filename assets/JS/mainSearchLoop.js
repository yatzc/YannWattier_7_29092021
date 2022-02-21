import { dishesdisplay } from "./dishe.js";

const searchinput = document.getElementById("main_search");

export function mainFilterLoop(recipes){
    searchinput.addEventListener('keyup', function(){
        // recupère la valeur du input
        const inputValue = searchinput.value;
        
        let filterArray = [];

        let suggestion = '';

        if(inputValue != "") {
            // let suggestion = '';
            for(let item of recipes){
                if(
                    item.ingredients.find((ingredientArray) => ingredientArray.ingredient.toLowerCase().includes(inputValue.toLowerCase()) ) ||
                    item.appliance.toLowerCase().includes(inputValue.toLowerCase()) ||
                    item.ustensils.find((ustensils ) => ustensils.toLowerCase().includes(inputValue.toLowerCase()) ) ||
                    item.name.toLowerCase().includes(inputValue.toLowerCase())
                ){
                    filterArray.push(item);
                    // let suggestion = '';
                    filterArray.forEach(resultItem => suggestion +=`${dishesdisplay(resultItem)}`);
                    document.getElementById("articles").innerHTML = suggestion;
                }
            }
        } else {
            suggestion = `${recipes.map(dishesdisplay).join("")}`;
        }
        
    });
}