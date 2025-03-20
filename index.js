// Write your solution here!
let cats = [];
cats.length = 0;
cats.push('Milo','Otis','Garfield' );


// Array Functions
function destructivelyAppendCat(name) {
    return cats.push("Ralph");
}


function destructivelyPrependCat(name){
    return cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat() {
    let newCat = [...cats, 'Broom'];
    return newCat;
}
console.log(appendCat());

function prependCat() {
    let newCats = ['Arnold', ...cats];
    return newCats;
}
console.log(prependCat());

function removeLastCat(){
    let newCatsNoLastCat = cats.slice(0, -1);
    return newCatsNoLastCat;
}
console.log(removeLastCat());

function removeFirstCat() {
    let newCatsNoFirstCat = cats.slice(1);
    return newCatsNoFirstCat;
}
console.log(removeFirstCat());