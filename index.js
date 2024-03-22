let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
}
function  destructivelyRemoveLastCat(){
    cats.pop(["Milo", "Otis"])
}
function destructivelyRemoveFirstCat(){
    cats.shift(["Otis", "Garfield"])
}
function appendCat(){
    const cats= ["Milo", "Otis", "Garfield",];
    const newcats=[...cats,"Broom"];
    return newcats
}
function  prependCat(){
    const cats= ["Milo", "Otis", "Garfield",];
    const newcats=["Arnold",...cats,]
    return newcats
}
function removeLastCat(){
    const cats= ["Milo", "Otis", "Garfield",];
    const eliminate=cats.slice(cats,cats.length-1)
    return eliminate
}
function  removeFirstCat(){
    const cats=  ["Milo", "Otis", "Garfield",];
    const eliminate=cats.slice(1)
    return eliminate
}
