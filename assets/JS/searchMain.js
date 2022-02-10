import { recipes } from "./recipes.js";
import * as main from './main.js';

// #region ============ SEARCH
const searchinput = document.getElementById("main_search");

searchinput.addEventListener('keyup', function(){
    // recupère la valeur du input
    const input = searchinput.value;
    // compare le input à personnes
    const result = recipes.filter(item => item.name.toLowerCase().includes(input.toLowerCase()));

    // Met chaque resultat dans un div
    suggestion = '';
    if(input != "") {
        result.forEach(resultItem => suggestion +=`${dishesdisplay(resultItem)}`);
    } else {
        suggestion = `${recipes.map(dishesdisplay).join("")}`;
    }
    // Affichage de chaque resultat
    document.getElementById("articles").innerHTML = suggestion;
});
// #endregion ============ SEARCH