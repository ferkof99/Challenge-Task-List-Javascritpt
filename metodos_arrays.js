
//Metodos arrays

let dataCollection = ['Cero', 'Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Tres', `Daemon`];
let otherDataCollection = new Array();

console.log(dataCollection);
console.log(otherDataCollection);

//Recorrer el arreglo
dataCollection.forEach(element => {
    console.log(element);
});

//devolver una nueva lista
console.log(dataCollection.filter(element => element === 'Tres'));

//Map Javascript:
console.log(dataCollection.map(element => element + 'Dato'));

//detro de este array hay un elemento, por lo tanto devuelve un boleano
console.log(dataCollection.some(element => element === `Uno`));

//si todos los elementos satisfacen una condicion

console.log(dataCollection.every(element => element === `Dos`));

//busca el indice dentro de un array
console.log(dataCollection.findIndex(element => element === `Daemon`));

console.log(dataCollection[7]);

dataCollection.push(`Alicent`);
console.log(dataCollection);

console.log(dataCollection.length);

//Elimina un elemento dentro de un array
dataCollection.splice(dataCollection.findIndex(element => element === `Dos`), 1);
console.log(dataCollection);
