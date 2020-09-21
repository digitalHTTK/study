/* 
Дан символ C и строка S. Удвоить каждое вхождение символа C в строку S.
*/

let S, C;
let mas = [];

S = prompt("Введите строку").split("");
C = prompt("Введите символ");

for (let i = 0; i < S.length; i++) {
    if (S[i] === C) {
        mas.push(S[i]);
    }
    mas.push(S[i]);
}

alert("Новая строка: " + mas.join(""));