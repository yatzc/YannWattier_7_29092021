import { order_unique_ingredients, order_unique_appliance, order_unique_ustensils } from "./data.js";
import { dishesdisplay } from "./dishe.js";

// DOM pour afficher les TAG
const btnTags = document.querySelector('.search-tags');

// Variables
let tagArray = [];
var colorTag;


// #region ============ display btn tags
export function tagsdisplay(tagname) {
    return`
    <button class="btn-tag btn-${colorTag}" data-css-tag="${tagname}">
        <label>${tagname}</label>
        <img src="./assets/images/cross.svg" class="cross" alt="bouton tag" />
    </button>
    `;
}
// #endregion ============ display btn tags


// #region ============ CLICK & OPEN TAG
let allDrop = document.querySelectorAll('ul');
allDrop.forEach(li => {li.addEventListener('mousedown', targetli);});

function targetli(e){
    let nameTag = e.target.innerHTML;
    colorTag = e.target.dataset.cssColor;

    let isDouble = true;
    // tagArray.includes(nameTag)

    // mettre elem dans tagArray
    if(nameTag != "") {
        tagArray.push(nameTag);
        // console.log(tagArray);
        // console.log(colorTag);

    }
    // afficher les element du tagArray
    btnTags.innerHTML = `${tagArray.map(tagsdisplay).join("")}`;
    
};
// #endregion ============ CLICK & OPEN TAG


// #region ============ Delete TAG
function deleteTAG() {
    // Sur tous les btn tag
    let allTag = document.querySelectorAll('.search-tags');
    allTag.forEach(tag => {tag.addEventListener('mousedown', targetBtnTag);});

    function targetBtnTag(e) {
        
        let indexTag = e.target.innerHTML;

        if(indexTag != "") {
            let deleteTag = tagArray.indexOf(indexTag);

            tagArray.splice(deleteTag , 1);

            btnTags.innerHTML = `${tagArray.map(tagsdisplay).join("")}`;
        }
    }
}
deleteTAG();
// #endregion ============ Delete TAG



// #region ============ search btn TAG

const searchinputIngre = document.getElementById("ingredients");

export function btnFilterB(recipes) {
    searchinputIngre.addEventListener('keyup', function(){
        // recupère la valeur du input
        const inputValueIngre = searchinputIngre.value;
        // console.log(inputValueIngre);
        // compare le input à personnes
        let result = recipes.filter(item => 
            item.ingredients.find((ingredientArray) => ingredientArray.ingredient.toLowerCase().includes(inputValueIngre.toLowerCase()) )
        );
        console.log(result);
        // Met chaque resultat dans un div
        let suggestion = '';
        let listeDisplay = [];
        if(inputValueIngre != "") {
            result.forEach(resultItem => suggestion +=`${dishesdisplay(resultItem)}`);
            result.forEach(resultItem => listeDisplay +=`${ingredientsTemplate(resultItem)}`);
            // document.getElementById("list_blue").innerHTML = `${suggestion.map(ingredientsTemplate).join("")}`;
        } else {
            // suggestion = `${recipes.map(dishesdisplay).join("")}`;
        }
        // Affichage de chaque resultat
        // document.getElementById("articles").innerHTML = suggestion;
    
        function ingredientsTemplate(item) { return `<li data-css-color="blue">${item}</li>`; }
        
        // document.getElementById("list_blue").innerHTML = listeDisplay;
        document.getElementById("articles").innerHTML = suggestion;
        // result.forEach(resultItem => suggestion +=`${ingredientsTemplate(resultItem)}`);
        // `${suggestion.map(ingredientsTemplate).join("")}`
    });
}
// #endregion ============ search btn TAG

// #region ============ search btn TAG

const searchinputAppareil = document.getElementById("appliances");
let listeAppliance = document.getElementById("list_green");

export function btnFilterG(recipes) {
    searchinputAppareil.addEventListener('keyup', function(){
        const inputValueAppareil = searchinputAppareil.value;
        let result = recipes.filter(item => 
            item.appliance.toLowerCase().includes(inputValueAppareil.toLowerCase())
        );
        // let suggestion = '';
        let listGFilter = '';
        if(inputValueAppareil != "") {
            result.forEach(resultItem => listGFilter +=`${applianceTemplate(resultItem)}`);
        } else {
            // listGFilter = `${order_unique_appliance.map(applianceTemplate).join("")}`;
            
            appli.innerHTML = `${order_unique_appliance.map(applianceTemplate).join("")}`;
            function applianceTemplate(item) { return `<li data-css-color="green">${item}</li>`; }
        }
        function applianceTemplate(item) { return `<li data-css-color="blue">${item.appliance}</li>`; }
        listeAppliance.innerHTML = listGFilter;
        // document.getElementById("articles").innerHTML = suggestion;
    });
}
// #endregion ============ search btn TAG

// #region ============ search btn TAG
const searchinputUsten = document.getElementById("ustensils");

export function btnFilterR(recipes) {
    searchinputUsten.addEventListener('keyup', function(){
        const inputValueUstensil = searchinputUsten.value;
        let result = recipes.filter(item => 
            item.appliance.toLowerCase().includes(inputValueUstensil.toLowerCase())
        );
        // let suggestion = '';
        let listeRDisplay = '';
        if(inputValueUstensil != "") {
            result.forEach(resultItem => listeRDisplay +=`${ustensilTemplate(resultItem)}`);
        } else {
            // listeRDisplay = `${recipes.map(dishesdisplay).join("")}`;
        }
        function ustensilTemplate(item) { return `<li data-css-color="blue">${item.ustensils}</li>`; }
        document.getElementById("list_green").innerHTML = listeRDisplay;
        // document.getElementById("articles").innerHTML = suggestion;
    });
}
// #endregion ============ search btn TAG