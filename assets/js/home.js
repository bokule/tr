// HEADER

var scrollPos = window.scrollY;

const header = document.querySelector("#header");

const logo = document.querySelector("#logo a img");

window.addEventListener("scroll", function() { 
    scrollpos = window.scrollY;

    if (scrollpos >= header.offsetHeight) {
        header.classList.add("whiteHeader");
        logo.setAttribute("src", "assets/img/logoBlack.png");
    }
    else {
        header.classList.remove("whiteHeader");
        logo.setAttribute("src", "assets/img/logoWhite.png");
    }
});

// IMAGE SLIDER

var sliderImages = ['url("../img/homeSliderBg1.jpg")', 'url("../img/homeSliderBg2.jpg")', 'url("../img/homeSliderBg3.jpg")'];

$(document).ready(function() {
    for(i in sliderImages) {
        $("#homeSlider").prepend($("<div></div>").attr("id", `slide${i}`).addClass("slide").css("background-image", `url("assets/img/homeSliderBg${sliderImages.length - i - 1}.jpg"`));
    }

    $(".slide:not(:first)").hide();
    var slideDuration = 4500;
    var currentSlide = 1;
    var prevSlide;
    setTimeout(changeSlide, slideDuration)
    function changeSlide() {
        if(prevSlide != undefined) $(`.slide:nth-child(${prevSlide})`).hide();
        prevSlide = currentSlide;
        currentSlide++;
        if(currentSlide > $(".slide").length) currentSlide = 1;
        $(`.slide:nth-child(${currentSlide})`).css("z-index", "0");
        $(`.slide:nth-child(${prevSlide})`).css("z-index", "-1");
        $(`.slide:nth-child(${currentSlide})`).fadeIn("slow");
        setTimeout(changeSlide, slideDuration)
    }
});

// MOST VISITED PLACES

const mostVisited = document.querySelector("#mostVisitedItems");

const mostVisitedNames = ["Corfu", "Cote d’Azur", "Sicily", "Mallorca", "Hvar", "Bodrum"];
const mostVisitedImages = ["corfu", "coteDAzur","sicily","mallorca","hvar","bodrum"];

for(let i = 0; i < mostVisitedNames.length; i++) {
    mostVisited.innerHTML += `<div class="mostVisitedItem"><img src="assets/img/${mostVisitedImages[i]}.jpg" alt="${mostVisitedNames[i]}"/><div class="coverText"><h3 class="font-large">${mostVisitedNames[i]}</h3><a href="travel.html#${mostVisitedImages[i]}" class="font-small">Read more</a></div></div>`;
}

$(document).ready(function() {
    $('.coverText').hide();
    $('.mostVisitedItem').hover(function() {
        $(this).children('.coverText').stop(true, true).slideToggle('fast');
    });
});