/*
Создать класс Ите для работы со временем в формате «час:минута:секунда». Класс должен включать в себя не менее 
четырех функций инициализации: числами, строкой (например, «23:59:59»), секундами и временем. Обязательными операциями 
являются: вычисление разницы между двумя моментами времени в секундах, сложение времени и заданного количества секунд, 
вычитание из времени заданного количества секунд, сравнение моментов времени, перевод в секунды, 
перевод в минуты (с округлением до целой минуты).
*/

let time = new Object();

function Time() {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;

    this.initString = (str) => {
        if(typeof(str) === "string"){
            let args = str.split(":");
            this.hours = +args[0];
            this.minutes = +args[1];
            this.seconds = +args[2];
        }
    }

    this.initSecond = (num) => {
        if(typeof(num) === "number"){
            this.hours = Math.trunc(num / 3600);
            this.minutes = Math.trunc((num - (this.hours * 3600)) / 60);
            this.seconds = num - (this.hours * 3600) - (this.minutes * 60);
        }
    }

    this.initArray = (...args) => {
        this.hours = +args[0];
        this.minutes = +args[1];
        this.seconds = +args[2];
    }

    this.initDate = (date) => {
        this.initArray(date.getHours(), date.getMinutes(), date.getSeconds());
    }

    this.toSeconds = () => {
        return (this.minutes * 60) + (this.hours * 3600) + this.seconds;
    }

    this.toMinutes = () => {
        return (this.hours * 60) + this.minutes;
    }

    this.timeComparator = (obj) => {
        if (obj.hours == this.hours && obj.minutes == this.minutes && obj.seconds == this.seconds) return true;
        else return false;
    }

    this.timeDiff = (obj) => {
        console.log(obj);
        return Math.abs(this.toSeconds() - obj.toSeconds());
    }

    this.addSeconds = (inputSecond) => {
        this.initSecond(this.toSeconds() + inputSecond);
    }

    this.subSeconds = (inputSecond) => {
        this.initSecond(this.toSeconds() - inputSecond);
    }
}

class TimeClass {
    constructor() {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;  
    }

    initString(str) {
        if(typeof(str) === "string"){
            let args = str.split(":");
            this.hours = +args[0];
            this.minutes = +args[1];
            this.seconds = +args[2];
        }
    }

    initSecond(num) {
        if(typeof(num) === "number"){
            this.hours = Math.trunc(num / 3600);
            this.minutes = Math.trunc((num - (this.hours * 3600)) / 60);
            this.seconds = num - (this.hours * 3600) - (this.minutes * 60);
        }
    }

    initArray(...args) {
        this.hours = +args[0];
        this.minutes = +args[1];
        this.seconds = +args[2];
    }

    initDate(date) {
        this.initArray(date.getHours(), date.getMinutes(), date.getSeconds());
    }

    toSeconds = () => {
        return (this.minutes * 60) + (this.hours * 3600) + this.seconds;
    }

    toMinutes = () => {
        return (this.hours * 60) + this.minutes;
    }

    timeComparator = (obj) => {
        if (obj.hours == this.hours && obj.minutes == this.minutes && obj.seconds == this.seconds) return true;
        else return false;
    }

    timeDiff = (obj) => {
        return Math.abs(this.toSeconds() - obj.toSeconds());
    }

    addSeconds = (inputSecond) => {
        this.initSecond(this.toSeconds() + inputSecond);
    }

    subSeconds = (inputSecond) => {
        this.initSecond(this.toSeconds() - inputSecond);
    }
}

let test = new Time();
test.initDate(new Date());
let diff = new Time();
diff.initArray(11, 40, 00);

test.addSeconds(3600);
console.log(test);

test.subSeconds(3600);
console.log(test);

console.log(test.timeDiff(diff));

if (!test.timeComparator(diff)) console.log("Сейчас не 11.40");
else console.log("Сейчас 11.40");