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

var authorModal = document.createElement("div");
authorModal.setAttribute("id", "authorModal");

var authorCover = document.createElement("div");
authorCover.setAttribute("class", "cover");

var authorContainer = document.createElement("div");
authorContainer.setAttribute("id", "authorContainer");

authorContainer.innerHTML += `<h2 class="uppercase font-large">Author</h2><div class="headingUnderline"><span class="blackUnderline"></span><span class="blueUnderline"></span><span class="blackUnderline"></span></div><div id="authorContent"><div id="authorPhoto"><img src="assets/img/bojan.jpg" alt="Author's photo"><h3 class="font-medium">Bojan Maksimović 92/19</h3><span class="font-small">Web Developer</span></div><div id="authorText"><p class="font-small">My name is Bojan and I am an aspiring front-end web developer. My approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.</p><p id="secondParagraph" class="font-small">The way I look at it, a front-end developer's role is to combine design and business logic to achieve a user-facing product. To do this successfully, a wide skill set is necessary to produce a quality user experience that leads to meeting business goals, and I guarantee I've got exactly what's needed.</p></div></div><a href="https://bokule.github.io/portfolio/" id="portfolioLink" class="uppercase font-small" target="_blank">Portfolio</a><button class="btnClose font-medium" onClick="closeAuthor();">X</button>`;

authorModal.appendChild(authorCover);
authorModal.appendChild(authorContainer);

bodyTag.appendChild(authorModal);

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