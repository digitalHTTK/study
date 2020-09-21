let N, K;

N = +prompt("Введите N");
K = 0;

while (3**K < N) {
    K++;
}

alert("Ответ: " + K);