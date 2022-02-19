import { recipes } from "./recipes.js";

// display des ingrédients
export function ingredientsDisplay(ingredients) {
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
export function dishesdisplay(dishe) {
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