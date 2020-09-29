class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }  

let form = document.querySelector(".personal-info");
let formDataContainer = document.querySelector(".form-data-container");
let fieldNames = [];
form.onsubmit = (e) => {
    e.preventDefault();
    let formFields = new FormData(form);
    let fields = [];
    for (let field of formFields.entries()) {
        fields.push(field);
    }
    fieldNames = [];

    fields.forEach(field => {
        let dataToSet = [];
        try {
            validator(field);
            dataToSet = field;
        } catch (e) {
            alert(e)
            dataToSet = [
                field[0],
                "Ошибка"
            ];
        } finally {
            fieldNames.push(dataToSet[0]);
            localStorage.setItem(...dataToSet);
        }
    });

    let button = document.querySelector(".info");
    button.addEventListener("click", () => setFormData());
    formDataContainer.innerHTML = "";
    formDataContainer.appendChild(button);
    return false;
};



function hasLetters(str) {
    for (let char of str) {
        if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) return true;
    }
    return false;
}

function hasNumbers(str) {
    let numberCount = 0;
    let numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (let char of str) if (numArray.includes(char)) numberCount++;
    return numberCount > 0;
}

function setFormData() {
    fieldNames.forEach(field => {
        let p = document.createElement("p");
        p.textContent = `${field}: ${localStorage.getItem(field)}`;
        formDataContainer.appendChild(p);
    });
}

function validator(field) {
    switch (field[0]) {
        case "account-number":
        case "series":
        case "number":
        case "current-amount":
            validateNumber(field[1]);
            break;
        case "issue-place":
            validateString(field[1]);
            break;
        case "phone-number":
            validatePhone(field[1]);
            break;
        case "category":
            break;
        default:
            throw new ValidationError("Ошибка при вводе данных");
    }
}

function validateString(name) {
    if (name === "") throw new ValidationError("Пустая строка")
    else if (hasNumbers(name)) throw new ValidationError("Цифры в строке запрещены")
}

function validateNumber(number) {
    if (number === "") throw new ValidationError("Пустая строка")
    else if (hasLetters(number)) throw new ValidationError("Буквы в строке запрещены")
}

function validatePhone(phone) {
    if (hasLetters(phone)) throw new ValidationError("Номер телефона не должен содержать буквы");
}