// import {toggleDropDown, toggleIndex} from './btn.js';
import * as Btn from './btn.js';
// import * as Dishe from './dishes.js';
import { unique_ingredients, order_unique_appliance, order_unique_ustensils } from "./data.js";
import { recipes } from "./recipes.js";

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

function dishesdisplay(dishe) {
    return`
    <article>
        <div class="container-dishes">
            <div class="container-dishes-img"><img src="/assets/images/${dishe.image}.jpg" alt="/images/${dishe.image}.jpg"></div>
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









const searchinput = document.getElementById("main_search");

searchinput.addEventListener('keyup', function(){
    // recupère la valeur du input
    const input = searchinput.value;
    // compare le input à personnes
    const result = recipes.filter(item => item.name.toLowerCase().includes(input.toLowerCase()));
    // Met chaque resultat dans un div
    let suggestion = '';
    if(input != "") {
        result.forEach(resultItem => suggestion +=`
            <li class="suggestion">${resultItem.name}</li>
        `);
        
    }
    // Affichage de chaque resultat
    document.getElementById('suggestions').innerHTML = suggestion;
    
});

