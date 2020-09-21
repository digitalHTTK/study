/* 
Описать функцию IsSquare(K) логического типа, возвращающую True, если целый параметр K (> 0) является 
квадратом некоторого целого числа, и False в противном случае. С ее помощью найти количество квадратов 
в наборе из 10 целых положительных чисел.
*/

function isInteger(num) {
    return (num ^ 0) === num;
}
  
function isSquare(K) {
    return isInteger(K ** 0.5);
}

let squareCounter = 0;
for (let i = 0; i < 10; i++) {
    let numberInput;
    numberInput = +prompt("Введите число");
    if (isSquare(numberInput)) squareCounter++;
}

alert ("Ответ: " + squareCounter);