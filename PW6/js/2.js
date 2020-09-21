/*
Даны три числа. Найти среднее из них (т. е. число, расположенное между наименьшим и наибольшим).
*/

let num1, num2, num3, middle, min, max;

num1 = prompt("Введите первое число");
num2 = prompt("Введите второе число");
num3 = prompt("Введите третье число");

min = Math.min(num1, num2, num3);
max = Math.max(num1, num2, num3);

if (num1 != max && num1 != min) middle = num1;
else if  (num2 != max && num2 != min) middle = num2;
else middle = num3;

alert("Среднее число последовательности: " + middle);