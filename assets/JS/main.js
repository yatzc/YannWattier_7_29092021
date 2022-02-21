import * as Btn from './btn.js';
import { order_unique_ingredients, order_unique_appliance, order_unique_ustensils } from "./data.js";
import { recipes } from "./recipes.js";
import { mainFilterNative } from "./mainSearchNative.js";
// import { mainFilterLoop } from "./mainSearchLoop.js";

// import { btnFilterB, btnFilterG, btnFilterR, tagsdisplay } from "./tagSearch.js";


// #region ============ affichage contenu des trois boutons
// affichage des ingredient
let ingre = document.getElementById("list_blue");
ingre.innerHTML = `${order_unique_ingredients.map(ingredientsTemplate).join("")}`;
function ingredientsTemplate(item) { return `<li data-css-color="blue">${item}</li>`; }


// affichage des appareils
let appli = document.getElementById("list_green");
appli.innerHTML = `${order_unique_appliance.map(applianceTemplate).join("")}`;
function applianceTemplate(item) { return `<li data-css-color="green">${item}</li>`; }


// affichage des ustensiles
let usten = document.getElementById("list_red");
usten.innerHTML = `${order_unique_ustensils.map(ustensilsTemplate).join("")}`;
function ustensilsTemplate(item) { return `<li data-css-color="red">${item}</li>`; }
// #endregion ============ affichage contenu des trois boutons


mainFilterNative(recipes);
// mainFilterLoop(recipes);

// btnFilterB(recipes);
// btnFilterG(recipes);
// btnFilterR(recipes);