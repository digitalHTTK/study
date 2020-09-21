let N, sum = 0;

N = +prompt("Введите N");

for (let i = 1; i <= N; i++) {
    sum += 1/i;
}

alert("Сумма: " + sum);