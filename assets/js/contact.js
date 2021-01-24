// Name errors

var nameErrorsArray = ["A name cannot have less than 3 characters", "Has to be at least 2 words", "Each word has to be capitalized"];

for(i in nameErrorsArray) {
    var nameErrorList = document.querySelector("#nameErrorList");

    var liTag = document.createElement("li");
    var liText = document.createTextNode(`- ${nameErrorsArray[i]}`);
    liTag.appendChild(liText);

    nameErrorList.appendChild(liTag);
}

// FORM VALIDATION

// Name RegExp

var nameRegExp = /^[A-ZŠĐČĆŽ][a-zšđčćž]{2,}(\s[A-ZŠĐČĆŽ][a-zšđčćž]{2,})+$/;

var tbName = document.querySelector("#tbName");
tbName.addEventListener("blur", checkName);

function checkName() {
    checkRegExp(nameRegExp, tbName);
}

// Email RegExp

var emailRegExp = /^[\w-_\.]+@([\w-_]{2,}\.)+[a-z]{2,}$/i;

var tbEmail = document.querySelector("#tbEmail");
tbEmail.addEventListener("blur", checkEmail);

function checkEmail() {
    checkRegExp(emailRegExp, tbEmail);
}

// Message RegExp

var tbMessage = document.querySelector("#tbMessage");
tbMessage.addEventListener("blur", checkMessage);

function checkMessage() {
    var numberOfSpaces = tbMessage.value.replace(/[^\s]/mg, "").length;
    if(tbMessage.value.length - numberOfSpaces < 20) {
        fieldIncorrect(tbMessage);
    } else {
        fieldCorrect(tbMessage);
    }
}

// Submit button

var btnSubmitMessage = document.querySelector("#btnSubmitForm");

let checkFunctions = [checkName, checkEmail, checkMessage];
let textFields = [tbName, tbEmail, tbMessage];
let ddls = false;
let successMessage = 'Your message was sent successfully!';

btnSubmitMessage.addEventListener("click", submitForm);