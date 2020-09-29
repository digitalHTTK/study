/*
Даны два круга с общим центром и радиусами R1 и R2 (R1 > R2). Найти площади 
этих кругов S1 и S2, а также площадь S3 кольца, внешний радиус которого равен 
R1, а внутренний радиус равен R2
*/

let r1, r2, s1, s2, s3;
let Pi = 3.14;

r1 = prompt("Введите первый радиус");
r2 = prompt("Введите первый радиус");

s1 = Pi * (r1 ** 2);
s2 = Pi * (r2 ** 2);
s3 = s2 - s1;

alert("Площадь первого круга: " + s1);
alert("Площадь второго круга: " + s2);
alert("Площадь кольца: " + s3);