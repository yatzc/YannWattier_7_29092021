import { recipes } from "./recipes.js";

export let _ingredients = [];
export let _appliance   = [];
export let _ustensils   = [];


export let recipesArray = recipes.forEach((elt, i) => {
    _ingredients[i] = elt.ingredients;
    _appliance[i]   = elt.appliance;
    _ustensils[i]   = elt.ustensils;
});




// ================ INGREDIENTS =============================
// concat
// let all_ingredients = _ingredients.flat();
// supprime les doublons du array
// export let unique_ingredients = [...new Set(all_ingredients)];



let all_ingredients = _ingredients.flat();

let ingred = [];

for (let i = 0; i < all_ingredients.length; i++) {
    let all_ingredient = [];
    all_ingredient = all_ingredients[i].ingredient;
    ingred.push(all_ingredient);
}

let all_ingred = ingred.flat();
let unique_ingred = [...new Set(all_ingred)];
export let order_unique_ingredients = unique_ingred.sort();
// console.log(order_unique_ingred)






// ================ APPLIANCE =============================
// concat
let all_appliance = _appliance.flat();
// supprime les doublons du array
let unique_appliance = [...new Set(all_appliance)];
// let cunique_appliance = unique_appliance.toLowerCase();
export let order_unique_appliance = unique_appliance.sort();



// ================ USTENSILS =============================
// concat
let all_ustensils = _ustensils.flat();
// supprime les doublons du array
let unique_ustensils = [...new Set(all_ustensils)];
export let order_unique_ustensils = unique_ustensils.sort();

