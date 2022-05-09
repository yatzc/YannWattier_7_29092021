const meule = [5, 1, 12, 8, 130, 44, 1];
let resultArray = [];
// =======================================================
function myFind(array, e) {
    for(let i = 0; i < array.length ; i++) {
        if(array[i] == e) {
            console.log("OK", array[i]);
            resultArray.push(array[i])
            console.log("Resultat : ", resultArray);
        } else {
            console.log("not OK", array[i]);
        }
    }
}
myFind(meule, 1);

console.log("resultArray : ", resultArray);
console.log("resultArray Index : ", meule.indexOf(1));
// =======================================================



//> node test4