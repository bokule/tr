var successModal = document.createElement("div");
successModal.setAttribute("id", "successModal");

var successCover = document.createElement("div");
successCover.setAttribute("class", "cover");

var successContainer = document.createElement("div");
successContainer.setAttribute("id", "successContainer");

var successMessageSpan = document.createElement("span");
successContainer.appendChild(successMessageSpan);

var btnClose = document.createElement("button");
btnClose.classList.add("font-medium", "btnClose");
btnClose.innerHTML = "X";
btnClose.addEventListener("click", closeSuccessModal);
successContainer.appendChild(btnClose);

successModal.appendChild(successCover);
successModal.appendChild(successContainer);

bodyTag.appendChild(successModal);

var closeModalTimeout;

function openSuccessModal(message) {
    successMessageSpan.innerHTML = message;
    successModal.style.display = "block";
    successContainer.style.display = "block";
    var timeoutValue = 0;
    for(let i = -100; i <= 0; i++) {
        setTimeout(function() {
            successCover.style.opacity = `${i+100}%`; 
        }, timeoutValue+=1.5);
    }
    closeModalTimeout = setTimeout(closeSuccessModal, 5000);
}

successCover.addEventListener("click", closeSuccessModal);

function closeSuccessModal() {
    successContainer.style.display = "none";
    var timeoutValue = 0;
    for(let i = 0; i >= -100; i--) {
        setTimeout(function() {
            successCover.style.opacity = `${i+100}%`;
            if(i == -100) successModal.style.display = "none";
        }, timeoutValue+=1.5);
    }
    clearTimeout(closeModalTimeout);
}