// console.log("test");

const recipes = [
    {
        "id": 1,
        "name" : "Limonade de Coco",
        "servings" : 1,
        "ingredients": [
            {
                "ingredient" : "Lait de coco",
                "quantity" : 400,
                "unit" : "ml"
            },
            {
                "ingredient" : "Jus de citron",
                "quantity" : 2
            },
            {
                "ingredient" : "Crème de coco",
                "quantity" : 2,
                "unit" : "cuillères à soupe"
            },
            {
                "ingredient" : "Sucre",
                "quantity" : 30,
                "unit" : "grammes"
            },
            {
                "ingredient": "Glaçons",
                "quantity" : 2
            }
        ],
        "time": 10,
        "description": "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée",
        "appliance": "Blender",
        "ustensils": ["cuillère à soupe", "verres", "presse citron" ],
        "image": 1
    }
];

function testFiltre(recipes) {
    // console.log("testFiltre");
    // console.log("testFiltre" + JSON.stringify(recipes));
    // let toto = recipes[0].name;
    // console.log("toto : " + toto);
    let momo = [
        { name: '000;' },
        { name: '001;' }
    ];
    // let inputValue = "coco";

    let result = recipes.filter(momo => 
        { 
            // console.log("001");
            //item.ingredients.find((ingredientArray) => ingredientArray.ingredient.toLowerCase().includes(inputValue.toLowerCase()) )
            // item.forEach(ingredient => console.log(ingredient));
            momo.forEach(item => {
                console.log('0000');
                console.log('0001:' + item);
                console.log('0001:' + JSON.stringify(item));
            });
            console.log("002");
        }
        // item.ingredients.find((ingredientArray) => ingredientArray.ingredient.toLowerCase().includes(inputValue.toLowerCase()) ) ||
        
    );

}
testFiltre();

//> node test