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
    if(nameTag != "" && nameTag != tagArray.includes(nameTag)) {
        tagArray.push(nameTag);
        // console.log(tagArray);
        // console.log(colorTag);

    }
    // afficher les element du tagArray
    // btnTags.innerHTML = tagdisplay(tagArray.join("  "));
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