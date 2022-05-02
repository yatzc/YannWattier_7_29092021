import { recipes } from "./recipes.js";

export let _ingredients = [];
export let _appliance   = [];
export let _ustensils   = [];

export let recipesArray = recipes.forEach((elt, i) => {
    _ingredients[i] = elt.ingredients;
    _appliance[i]   = elt.appliance.toLowerCase();
    _ustensils[i]   = elt.ustensils;
});

// ================ INGREDIENTS =============================
let all_ingredients = _ingredients.flat();

let ingred = [];

for (let i = 0; i < all_ingredients.length; i++) {
    let all_ingredient = [];
    all_ingredient = all_ingredients[i].ingredient;
    ingred.push(all_ingredient.toLowerCase());
}

let all_ingred = ingred.flat();
let unique_ingred = [...new Set(all_ingred)];
export let order_unique_ingredients = unique_ingred.sort();

// ================ APPLIANCE =============================
let all_appliance = _appliance.flat();
let unique_appliance = [...new Set(all_appliance)];
export let order_unique_appliance = unique_appliance.sort();

// ================ USTENSILS =============================
let all_ustensils = _ustensils.flat();
let unique_ustensils = [...new Set(all_ustensils)];
export let order_unique_ustensils = unique_ustensils.sort();
// to lowercase sur chaque élément des array
for( let item in order_unique_ustensils ){
    order_unique_ustensils[item] = order_unique_ustensils[item].toLowerCase();
}


