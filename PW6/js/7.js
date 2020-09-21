/* 
Дано целое число N и набор из N целых чисел. Найти номер первого 
экстремального (т. е. минимального или максимального) элемента из данного набора.
*/

let N, max, min, number;
let mas = [];

N = +prompt("Введите N");

for (let i = 0; i < N; i++) mas[i] = +prompt("Введите " + (i + 1) + " число массива");

min = Math.min(...mas);
max = Math.max(...mas);

if (mas.indexOf(min) > mas.indexOf(max)) alert("Первое экстремальное число: " + mas.indexOf(max)); 
else alert("Первое экстремальное число: " + (mas.indexOf(min) + 1)); 