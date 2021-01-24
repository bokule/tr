// NAVBAR

const navbar = document.querySelector("#nav ul");

const navLinks = ["index.html", "travel.html", "contact.html", "#!"];
const pageNames = ["Home", "Travel", "Contact", "Author"];

for(let i = 0; i < navLinks.length; i++) {
    var liTag = document.createElement("li");
    liTag.classList.add("navLink");

    var aTag = document.createElement("a");
    aTag.setAttribute("href", navLinks[i]);
    var aTagText = document.createTextNode(pageNames[i]);
    aTag.appendChild(aTagText);

    if(pageNames[i] == "Author") {
        aTag.addEventListener("click", openAuthor);
    }

    liTag.appendChild(aTag);

    navbar.appendChild(liTag);
}

// SIDENAV

var sideNav = document.createElement("div");
sideNav.setAttribute("id", "sideNav");

var sideNavCover = document.createElement("div");
sideNavCover.setAttribute("class", "cover");

sideNav.appendChild(sideNavCover);

var sideNavContent = document.createElement("div");
sideNavContent.setAttribute("id", "sideNavContent");
var sideNavContentList = document.createElement("ul");

for(let i = 0; i < navLinks.length; i++) {
    var liTag = document.createElement("li");

    var aTag = document.createElement("a");
    aTag.setAttribute("href", navLinks[i]);
    aTag.setAttribute("onClick", "closeSideNav();");
    var aTagText = document.createTextNode(pageNames[i]);
    aTag.appendChild(aTagText);

    if(pageNames[i] == "Author") {
        aTag.addEventListener("click", openAuthor);
    }

    liTag.appendChild(aTag);

    sideNavContentList.appendChild(liTag);
}

sideNavContent.appendChild(sideNavContentList);

sideNav.appendChild(sideNavContent);

var bodyTag = document.getElementsByTagName("body")[0];
bodyTag.appendChild(sideNav);

var btnSideNav = document.querySelector("#btnSideNav");

btnSideNav.addEventListener("click", openSideNav);

function openSideNav() {
    sideNav.style.display = "block";
    var timeoutValue = 0;
    for(let i = -100; i <= 0; i++) {
        setTimeout(function() {
            sideNavContent.style.transform = `translateX(${i}%)`;
            sideNavCover.style.opacity = `${i+100}%`;
        }, timeoutValue+=1.5);
    }
}

sideNavCover.addEventListener("click", closeSideNav);

function closeSideNav() {
    var timeoutValue = 0;
    for(let i = 0; i >= -100; i--) {
        setTimeout(function() {
            sideNavContent.style.transform = `translateX(${i}%)`;
            sideNavCover.style.opacity = `${i+100}%`;
            if(i == -100) sideNav.style.display = "none";
        }, timeoutValue+=1.5);
    }
}

// AUTHOR

function openAuthor() {
    authorModal.style.display = "block";
    authorContainer.style.display = "block";
    var timeoutValue = 0;
    for(let i = -100; i <= 0; i++) {
        setTimeout(function() {
            authorCover.style.opacity = `${i+100}%`; 
        }, timeoutValue+=1.5);
    }
}

authorCover.addEventListener("click", closeAuthor);

function closeAuthor() {
    authorContainer.style.display = "none";
    var timeoutValue = 0;
    for(let i = 0; i >= -100; i--) {
        setTimeout(function() {
            authorCover.style.opacity = `${i+100}%`;
            if(i == -100) authorModal.style.display = "none";
        }, timeoutValue+=1.5);
    }
}

// SOCIAL

const social = document.querySelector("#social ul");

const socialLinks = ["https://www.facebook.com/bojan.maksimovic.908", "https://www.instagram.com/bojanm___/", "https://twitter.com/bojanm_", "documentation.pdf"];
const socialIcons = ["fab fa-facebook", "fab fa-instagram", "fab fa-twitter", "fas fa-file"];

for(let i = 0; i < socialLinks.length; i++) {
    social.innerHTML += `<li><a href="${socialLinks[i]}" target="_blank"><i class="${socialIcons[i]} font-medium"></i></a></li>`;
}