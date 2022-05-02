import { order_unique_ingredients, order_unique_appliance, order_unique_ustensils } from "./data.js";
import { dishesdisplay } from "./dishe.js";
import { recipes } from "./recipes.js";

// #region ============ DOM & variable
// DOM pour afficher les TAG
const btnTags = document.querySelector('.search-tags');

const searchinputIngrediant = document.getElementById("ingredients");
const searchinputAppareil   = document.getElementById("appliances");
const searchinputUstensil   = document.getElementById("ustensils");
const listeIngrediant       = document.getElementById("list_blue");
const listeAppliance        = document.getElementById("list_green");
const listeUstensil         = document.getElementById("list_red");

// function displayTemplate(item) { return `<li data-css-color="blue">${item}</li>`; }

// Variables
let nameTagArray = [];
let aiguille = [];
let colorTagArray = [];
var bdd = recipes;
var bdd2 = recipes;

var colorTag;

var newTagArray = [];

class tagArray {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}

var applia = [];
var ustens = [];

// #endregion ============ DOM & variable

// #region ============ display btn tags
export function tagsdisplay(tagArray) {
    return`
    <button class="btn-tag btn-${tagArray.color}" data-css-tag="${tagArray.name}">
        <label>${tagArray.name}</label>
        <img src="./assets/images/cross.svg" class="cross" alt="bouton tag" />
    </button>
    `;
}
// #endregion ============ display btn tags

// #region ============ Open TAG
let allDrop = document.querySelectorAll('ul');
allDrop.forEach(li => { li.addEventListener('mousedown', targetli); });

function targetli(e){
    let nameTag = e.target.innerHTML;
    colorTag = e.target.dataset.cssColor;

    let suggestion = '';

    if(nameTag != "" && nameTag.length < 35) {
        newTagArray.push(new tagArray(nameTag, colorTag));
        aiguille.push(nameTag);
        
        for(let i = 0 ; i < aiguille.length ; i++){
            var resultFilter = bdd.filter(item => 
                item.ingredients.find((ingredientArray) => ingredientArray.ingredient.toLowerCase().includes(aiguille[i]) ) ||
                item.appliance.toLowerCase().includes(aiguille[i]) ||
                item.ustensils.find((ustensils) => ustensils.toLowerCase().includes(aiguille[i]) ) ||
                item.name.toLowerCase().includes(aiguille[i])
            );
            var total = resultFilter;
            bdd = total;
        }

        resultFilter.forEach(resultItem => suggestion +=`${dishesdisplay(resultItem)}`);


        // affichage des ingredients ========================================
        diplayIngredients(resultFilter);

        // affichage des appareils ==========================================
        diplayAppliance(resultFilter);
        
        // affichage des ustensiles =========================================
        diplayUstensils(resultFilter);

    }
    if(nameTag == ""){
        suggestion = `${recipes.map(dishesdisplay).join("")}`;
    }
    btnTags.innerHTML = `${newTagArray.map(tagsdisplay).join("")}`;

    document.getElementById("articles").innerHTML = suggestion;
};
// #endregion ============ Open TAG

// #region ============ Delete TAG
let allTag = document.querySelectorAll('.search-tags');
allTag.forEach(tag => {tag.addEventListener('mousedown', targetBtnTag);});

function targetBtnTag(e) {
    
    let targetTag = e.target.innerHTML;

    let suggestion = '';

    if(targetTag != "") {
        var elementPos = newTagArray.map(function(item) { return item.name; }).indexOf(targetTag);
        newTagArray.splice(elementPos , 1);
        btnTags.innerHTML = `${newTagArray.map(tagsdisplay).join("")}`;

        aiguille.splice(elementPos , 1);

        for(let i = 0 ; i < aiguille.length ; i++){
            var resultFilter2 = bdd2.filter(item => 
                item.ingredients.find((ingredientArray) => ingredientArray.ingredient.toLowerCase().includes(aiguille[i]) ) ||
                item.appliance.toLowerCase().includes(aiguille[i]) ||
                item.ustensils.find((ustensils ) => ustensils.toLowerCase().includes(aiguille[i]) ) ||
                item.name.toLowerCase().includes(aiguille[i])
            );
            var total2 = resultFilter2;
            bdd = total2;
        }

        bdd.forEach(resultItem => suggestion +=`${dishesdisplay(resultItem)}`); //modif bdd2 => bdd


        // affichage des ingredients ========================================
        diplayIngredients(bdd);

        // affichage des appareils ==========================================
        diplayAppliance(bdd);
        
        // affichage des ustensiles =========================================
        diplayUstensils(bdd);
        
    }
    if(aiguille.length === 0) {
        suggestion = `${recipes.map(dishesdisplay).join("")}`;
        bdd = recipes;

        // affichage des ingredients ========================================
        diplayIngredients(bdd);

        // affichage des appareils ==========================================
        diplayAppliance(bdd);
        
        // affichage des ustensiles =========================================
        diplayUstensils(bdd);

    }
    document.getElementById("articles").innerHTML = suggestion;
}
// }

// #endregion ============ Delete TAG

// #region ============ search input btn TAG Ingrediant
export function btnFilterB(recipes) {
    searchinputIngrediant.addEventListener('keyup', function(){
        let listBFilter = '';
        const inputValueIngrediant = searchinputIngrediant.value;
        let result = order_unique_ingredients.filter(item => item.toLowerCase().includes(inputValueIngrediant.toLowerCase()));
        if(inputValueIngrediant != "") {
            result.forEach(resultItem => listBFilter +=`${displayTemplate(resultItem)}`);
        } else {
            order_unique_ingredients.forEach(resultItem => listBFilter +=`${displayTemplate(resultItem)}`);
        }
        listeIngrediant.innerHTML = listBFilter;
    });
}
// #endregion ============ search input btn TAG Ingrediant

// #region ============ search input btn TAG Appareil
export function btnFilterG(recipes) {
    searchinputAppareil.addEventListener('keyup', function(){
        let listGFilter = '';
        const inputValueAppareil = searchinputAppareil.value;
        let result = order_unique_appliance.filter(item => item.toLowerCase().includes(inputValueAppareil.toLowerCase()));
        if(inputValueAppareil != "") {
            result.forEach(resultItem => listGFilter +=`${displayTemplate(resultItem)}`);
        } else {
            order_unique_appliance.forEach(resultItem => listGFilter +=`${displayTemplate(resultItem)}`);
        }
        listeAppliance.innerHTML = listGFilter;
    });
}
// #endregion ============ search input btn TAG Appareil

// #region ============ search input btn TAG Ustensil
export function btnFilterR(recipes) {
    searchinputUstensil.addEventListener('keyup', function(){
        let listRFilter = '';
        const inputValueUstensil = searchinputUstensil.value;
        let result = order_unique_ustensils.filter(item => item.toLowerCase().includes(inputValueUstensil.toLowerCase()));
        if(inputValueUstensil != "") {
            result.forEach(resultItem => listRFilter +=`${displayTemplate(resultItem)}`);
        } else {
            order_unique_ustensils.forEach(resultItem => listRFilter +=`${displayTemplate(resultItem)}`);
        }
        listeUstensil.innerHTML = listRFilter;
    });
}
// #endregion ============ search input btn TAG Ustensil

// #region ============ display element
// affichage des ingredients ========================================
function diplayIngredients(resultFilter) {
    let _ingredients = [];
    resultFilter.forEach((elt, i) => { _ingredients[i] = elt.ingredients; });

    let all_ingredients = _ingredients.flat();

    let ingred = [];

    for (let i = 0; i < all_ingredients.length; i++) {
        let all_ingredient = [];
        all_ingredient = all_ingredients[i].ingredient;
        ingred.push(all_ingredient.toLowerCase());
    }

    let all_ingred = ingred.flat();
    let unique_ingred = [...new Set(all_ingred)];
    let ingreds = unique_ingred.sort();

    let ingre = document.getElementById("list_blue");
    ingre.innerHTML = `${ingreds.map(ingredientsTemplate).join("")}`;
    function ingredientsTemplate(item) { return `<li data-css-color="blue">${item}</li>`; }
}

// affichage des appareils ==========================================
function diplayAppliance(resultFilter) {
    var applia = [];
    resultFilter.forEach(item => applia.push(item.appliance) );

    let unique_appliance = [...new Set(applia)];

    let appli = document.getElementById("list_green");
    appli.innerHTML = `${unique_appliance.map(applianceTemplate).join("")}`;
    function applianceTemplate(item) { return `<li data-css-color="green">${item.toLowerCase()}</li>`; }
}

// affichage des ustensiles ===========================================
function diplayUstensils(resultFilter) {
    var ustens = [];
    resultFilter.forEach(item => ustens.push(item.ustensils) );

    let unique_ustensils = [...new Set(ustens.flat())];

    let usten = document.getElementById("list_red");
    usten.innerHTML = `${unique_ustensils.map(ustensilsTemplate).join("")}`;
    function ustensilsTemplate(item) { return `<li data-css-color="red">${item}</li>`; }
}
// #endregion ============ display element


