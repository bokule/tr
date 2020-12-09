// Name errors

var nameErrorsArray = ["A name cannot have less than 3 characters", "Has to be at least 2 words", "Each word has to be capitalized"];

for(i in nameErrorsArray) {
    var nameErrorList = document.querySelector("#nameErrorList");

    var liTag = document.createElement("li");
    var liText = document.createTextNode(`- ${nameErrorsArray[i]}`);
    liTag.appendChild(liText);

    nameErrorList.appendChild(liTag);
}

// RegExp

var noErrors;

// Name RegExp

var nameRegExp = /^[A-ZŠĐČĆŽ][a-zšđčćž]{2,}(\s[A-ZŠĐČĆŽ][a-zšđčćž]{2,})+$/;

var tbName = document.querySelector("#tbName");
tbName.addEventListener("blur", checkName);

function checkName() {
    var check = nameRegExp.test(tbName.value);
    if(check) {
        tbName.classList.add("borderBlue");
        tbName.classList.remove("borderRed");
        tbName.nextElementSibling.style.display = "none";
    } else {
        noErrors = false;
        tbName.classList.add("borderRed");
        tbName.classList.remove("borderBlue");
        tbName.nextElementSibling.style.display = "block";
    }
}

// Email RegExp

var emailRegExp = /^[\w-_\.]+@([\w-_]{2,}\.)+[a-z]{2,}$/i;

var tbEmail = document.querySelector("#tbEmail");
tbEmail.addEventListener("blur", checkEmail);

function checkEmail() {
    var check = emailRegExp.test(tbEmail.value);
    if(check) {
        tbEmail.classList.add("borderBlue");
        tbEmail.classList.remove("borderRed");
        tbEmail.nextElementSibling.style.display = "none";
    } else {
        noErrors = false;
        tbEmail.classList.add("borderRed");
        tbEmail.classList.remove("borderBlue");
        tbEmail.nextElementSibling.style.display = "block";
    }
}

// Message RegExp

var tbMessage = document.querySelector("#tbMessage");
tbMessage.addEventListener("blur", checkMessage);

function checkMessage() {
    var numberOfSpaces = tbMessage.value.replace(/[^\s]/mg, "").length;
    
    if(tbMessage.value.length - numberOfSpaces < 20) {
        noErrors = false;
        tbMessage.classList.add("borderRed");
        tbMessage.classList.remove("borderBlue");
        tbMessage.nextElementSibling.style.display = "block";
    } else {
        tbMessage.classList.add("borderBlue");
        tbMessage.classList.remove("borderRed");
        tbMessage.nextElementSibling.style.display = "none";
    }
}

// Submit button

var btnSubmitMessage = document.querySelector("#btnSubmitForm");

btnSubmitMessage.addEventListener("click", function() {
    noErrors = true;

    checkName();
    checkEmail();
    checkMessage();

    if(noErrors) {
        tbName.value = "";
        tbName.classList.remove("borderBlue");
        tbEmail.value = "";
        tbEmail.classList.remove("borderBlue");
        tbMessage.value = "";
        tbMessage.classList.remove("borderBlue");

        var successMessage = "Your message was sent successfully!";
        openSuccessModal(successMessage);
    }
});