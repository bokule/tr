var noErrors;

function checkRegExp(regExp, field) {
    var check = regExp.test(field.value);
    if(check) {
        fieldCorrect(field);
        return true;
    } else {
        fieldIncorrect(field);
        return false;
    }
}

function checkDdl(ddl, noErrorMessage = false) {
    if(ddl.value != 0) {
        fieldCorrect(ddl, noErrorMessage);
        return true;
    } else {
        fieldIncorrect(ddl, noErrorMessage);
        return false;
    }
}

function fieldCorrect(field, noErrorMessage = false) {
    field.classList.add("borderBlue");
    field.classList.remove("borderRed");
    if(!noErrorMessage) field.nextElementSibling.style.display = "none";
}

function fieldIncorrect(field, noErrorMessage = false) {
    noErrors = false;
    field.classList.add("borderRed");
    field.classList.remove("borderBlue");
    if(!noErrorMessage) field.nextElementSibling.style.display = "block";
}

function submitForm() {
    noErrors = true;
    for(let f of checkFunctions) {
        f();
    }
    if(noErrors) {
        if(textFields) clearTextFields();
        if(ddls) resetDdls();
        openSuccessModal(successMessage);
    }
}

function clearTextFields() {
    for(let field of textFields) {
        field.value = "";
        field.classList.remove("borderBlue");
    }
}

function resetDdls() {
    for(let ddl of ddls) {
        ddl.selectedIndex = 0;
        ddl.classList.remove("borderBlue");
    }
}