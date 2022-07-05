function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 !== 0;
}

 const meuArray = [1, 23, 42, 55, 68, 30, 8, 7];

 console.log(filtraPares(meuArray));