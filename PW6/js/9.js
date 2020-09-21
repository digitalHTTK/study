/* 
Дан массив размера N. Обнулить элементы массива, расположенные между его минимальным и 
максимальным элементами (не включая минимальный и максимальный элементы).
*/

let min, max, N;
let mas = [];
let startNumber, numberOfElements;

N = prompt("Введите N");
for (let i = 0; i < N; i++) mas.push(Math.random() * 100);

console.log("Исходный массив: " + mas);

min = Math.min(...mas);
max = Math.max(...mas);

if (mas.indexOf(max) > mas.indexOf(min)) {
    startNumber = mas.indexOf(min) + 1;
    numberOfElements = mas.indexOf(max) - startNumber;
    console.log(mas.indexOf(min));
    console.log(mas.indexOf(max));
    console.log(startNumber);
console.log(numberOfElements);
}
else {
    startNumber = mas.indexOf(max) + 1;
    numberOfElements = mas.indexOf(min) - startNumber;
    console.log(mas.indexOf(min));
    console.log(mas.indexOf(max));
    console.log(startNumber);
console.log(numberOfElements);
}


mas.splice(startNumber, numberOfElements, new Array(numberOfElements).fill(0));

console.log("Новый массив: " + mas);