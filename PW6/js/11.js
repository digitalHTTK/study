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
}

let test = new TimeClass();
test.initDate(new Date());

console.log(test);