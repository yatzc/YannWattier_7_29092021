// import {toggleDropDown, toggleIndex} from './btn.js';
import * as Btn from './btn.js';
// import * as Dishe from './dishes.js';
import { unique_ingredients, order_unique_appliance, order_unique_ustensils } from "./data.js";
import { recipes } from "./recipes.js";
import * as seach from "./searchMain.js";

// #region ============ affichage contenu des trois boutons
// affichage des ingredient
let ingre = document.getElementById("list_blue");
ingre.innerHTML = `${unique_ingredients.map(ingredientsTemplate).join("")}`;
function ingredientsTemplate(item) { return `<li>${item.ingredient}</li>`; }


// affichage des appareils
let appli = document.getElementById("list_green");
appli.innerHTML = `${order_unique_appliance.map(applianceTemplate).join("")}`;
function applianceTemplate(item) { return `<li>${item}</li>`; }


// affichage des ustensiles
let usten = document.getElementById("list_red");
usten.innerHTML = `${order_unique_ustensils.map(ustensilsTemplate).join("")}`;
function ustensilsTemplate(item) { return `<li>${item}</li>`; }
// #endregion ============ affichage contenu des trois boutons

// #region ============ affichage des plats

// display des ingrédients
function ingredientsDisplay(ingredients) {
    return `
    <ul role="menu" class="tag-list">
        ${ingredients.map(ingredients => `
            ${ingredients.ingredient}: 
            ${ingredients.quantity ? ingredients.quantity : ""} 
            ${ingredients.unit == "grammes" ? ingredients.unit = "g" : ""}
            ${ingredients.unit == "cuillères à soupe" ? ingredients.unit = "cuillères" : ""}
            ${ingredients.unit == "cuillères à café" ? ingredients.unit = "càc" : ""}
            ${ingredients.unit == "ml" ? ingredients.unit : ""}
        `).join("<br>")}
    </ul>
    `;
}

// display des articles
function dishesdisplay(dishe) {
    return`
    <article>
        <div class="container-dishes">
            <div class="container-dishes-img"><img src="./assets/images/${dishe.image}.jpg" alt="/images/${dishe.image}.jpg"></div>
            <div class="dishes-name">${dishe.name}</div>
            <div class="dishes-time"><img src="./assets/images/watch.svg" alt="watch time" />${dishe.time} min</div>
            <div class="dishes-ingredients">${dishe.ingredients ? ingredientsDisplay(dishe.ingredients) : ""}</div>
            <div class="dishes-recipe"><p>${dishe.description}</p></div>
        </div>
    </article>
    `;
}

document.getElementById("articles").innerHTML = `${recipes.map(dishesdisplay).join("")}`;
// #endregion ============ affichage des plats

// #region ============ SEARCH MAIN
const searchinput = document.getElementById("main_search");

searchinput.addEventListener('keyup', function(){
    // recupère la valeur du input
    const inputValue = searchinput.value;
    // compare le input à personnes
    const result = recipes.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase()));

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

// #endregion ============ SEARCH MAIN









