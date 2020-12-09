function printLocations(locationGroup, srcArray, namesArray, textArray, pricesArray) {
    for(i in namesArray) {
        var locationContainer = document.createElement("div");
        locationContainer.setAttribute("id", srcArray[i]);
        locationContainer.setAttribute("class", "locationContainer");
    
        // Location Image
        var locationImageDiv = document.createElement("div");
        locationImageDiv.setAttribute("class", "locationImage");
        locationImageDiv.innerHTML = `<img src="assets/img/${srcArray[i]}.jpg" alt="Image of ${namesArray[i]}">`;
        locationContainer.appendChild(locationImageDiv);
    
        // Heading
        var heading = document.createElement("div");
        heading.setAttribute("class", "heading");
        heading.innerHTML = `<h4 class="uppercase font-medium">${namesArray[i]}</h4>`;
        locationContainer.appendChild(heading);
    
        // Location Text
        var locationText = document.createElement("div");
        locationText.setAttribute("class", "locationText");
        var locationTextPTag = document.createElement("p");
        locationTextPTag.classList.add("font-small");
        locationTextPTag.innerHTML = textArray[i];
        locationText.appendChild(locationTextPTag);
        var btnBook = document.createElement("button");
        btnBook.classList.add("btnBook", "uppercase", "font-xs");
        btnBook.textContent = "Book";
        btnBook.value = namesArray[i];
        locationText.appendChild(btnBook);
        var price = document.createElement("span");
        price.classList.add("price", "font-small", "bold");
        price.innerHTML = `${pricesArray[i]}€`;
        locationText.appendChild(price);
        locationContainer.appendChild(locationText);
    
        // Button Read More
        var btnReadMore = document.createElement("button");
        btnReadMore.classList.add("btnReadMore", "font-xs");
        btnReadMore.textContent = "Read more";
        locationContainer.appendChild(btnReadMore);
    
        locationGroup.appendChild(locationContainer);
    }
}

// Greece

var greeceLocationNames = ["Corfu", "Crete", "Mykonos", "Santorini", "Paros", "Rhodes"];
var greeceLocationSrc = ["corfu", "crete", "mykonos", "santorini", "paros", "rhodes"];
var greeceLocationText = ["As one of the largest and greenest of the Ionian Islands, Corfu is far more than it’s glistening cobalt-hued waters and tawny coastline. Continuing to welcome travellers each summer with its enticing rural landscapes, UNESCO World Heritage status and blankets of history, it makes a special escape away from touristic honeypots. Throw in scattered ruins, delicious delicacies and sleepy villages and you’re on the way to a well-rounded summer vacay.", "The island of Crete is the kind of place to make all your dreams of a holiday in Greece come true. Crystal-clear blue waters, postcard-worthy seafront towns, history in spades and jaw-dropping landscape, Greece’s largest island has everything you could wish for. Whether you want to trek the Samaria Gorge or wander the atmospheric winding alleyways of Chania, boat-trip to deserted beaches or learn the art of Cretan cooking there’s no Greek island that offers more variety.", "Looking for a destination with a party-hard culture, cashed-up A-listers and hip new everything, Mykonos ticks all three. It was one of the first of the Greek islands to be considered a holiday destination and has been popular since the 60s. There are over 25 beaches on Mykonos, all but a handful are well-organized with sunbeds, umbrellas, water sports, beach bars, restaurants and markets. The golden sand and shallow, clear water make them ideal for pretty much everyone.", "The supermodel of the Greek islands, Santorini. The volcanic nature of the island contributes greatly to its drama; the towns sit perched on top of steep cliffs and boasts white-washed houses peppered with blue church domes with bright pops of candy colours. Swoon.", "Paros sleeps in the shadow of the limelight and yet it continues to welcome a steady stream of summer travellers. The island shares the same qualities as many of the other Cyclades Islands – whitewashed villages, fishing harbours, a flurry of tavernas and golden beaches –  our favourite being Kolymbithres. The granite rock formations on the beach will transport you back to your fav sci-fi movie. Paros lacks the same glitzy appeal as Mykonos and Santorini, but in our eyes, it’s a star.", "The largest and most popular of the Dodecanese Islands, Rhodes stuns with its romantic medieval Old Town, glistening beach resorts and 300 days of sunshine. It’s most touristy by the town, but don’t worry you can still find secluded spots in and around the island. If anything, it’s worth taking a car and taking unconventional detours, passing beaches and pretty coastal villages on the way. Sun worshippers can exhale, the island has a vast collection of beaches, all unique in their own right. Among the best beaches are Tsambika, Ladiko and Kallithea. And in the southern coast, Prassonisi is ideal for kitesurfing, if you’re after that sort of thing."];
var greecePrices = [100, 120, 110, 100, 90, 110];
var locationGroupGreece = document.querySelector("#locationGreece");

printLocations(locationGroupGreece, greeceLocationSrc, greeceLocationNames, greeceLocationText, greecePrices);

// France

var franceLocationNames = ["Cote d’Azur", "Monaco", "Corsica"];
var franceLocationSrc = ["coteDAzur", "monaco", "corsica"];
var franceLocationText = ["Sweltering 30°C temperatures, humming Ferraris, glitzy resorts and sexy all-night parties on the beach, a summer in the French Riviera will make you say shell yeah. From Canne’s illustrious promenade, La Croisette and the yachts stacked upon stacks in St Tropez to Nice’s sunset beach walks, a summer in the south is wild.", "Good things come in small packages. And as the second smallest country in the world, Monaco makes a cracking summer destination. What they don’t tell you about Monaco is how colourful and captivating it is when you see it with your own two eyes. Of course, not forgetting the amazing history filled with barbarians, kings, supercars, movie stars and bags of money. Francois Grimaldi, you did well.", "Visit Corsica, France’s isle of beauty. This miniature continent lies 200 kilometres from the French Riviera and yet it feels very rugged, old-world and spectacular all at once. The Corsican way of life is simple and unplanned, tourists are left in peace to enjoy the dense forests, the time-forgotten villages, national parks and not forgetting the GR20 trail. If you’re ever short on fun, seek the Corsican holy trilogy, food, wine and music."];
var francePrices = [110, 130, 110];
var locationGroupFrance = document.querySelector("#locationFrance");

printLocations(locationGroupFrance, franceLocationSrc, franceLocationNames, franceLocationText, francePrices);

// Italy

var italyLocationNames = ["Sicily", "Amalfi Coast", "Capri", "Sardinia"];
var italyLocationSrc = ["sicily", "amalfiCoast", "capri", "sardinia"];
var italyLocationText = ["The gorgeous island of Sicily can only best be described as an incredible open-air museum of archaeological sites, with a smattering of medieval villages and lashings of good food. Mount Etna looms over a coast of twinkling bays, sandy beaches and offshore islets where the water is vodka-clear, while the island’s interior is packed with soaring mountains, lush vineyards and intriguing UNESCO World Heritage sites.", "The Amalfi Coast is one of Italy’s most piercing regions. In between the pastel coloured boutiques, plunging mountains and sun-kissed sunbathers – the coast has an irresistible appeal. Until the 1950’s, this coastline was largely undiscovered and relatively poor, with its economy almost solely reliant on fishing and the growing of lemon trees. And now? Well, it’s become a major summer destination attracting travellers from all around the world.", "Both a tourist destination for Italians and foreigners, Capri’s beauty and refined hedonism has charmed just about everyone. The island is a speckled fusion of grottoes, caves, Roman ruins, overgrown vegetable plots and rich wildlife. Once you’ve seen your fair share of sights, including the Blue Grotto, the Gardens of Augustus and the Port of Marina Grande to name a few, you can also decide to explore the other treasures on the other islands of the Bay of Naples. Day trips to Pompeii, Ischia (the green island), and the Amalfi Coast are totally recommended.", "Scenic hikes, coastal trails and some of the loveliest beaches off European shores, Sardinia is a sight for sore eyes. It may be the largest Italian island, but a visit will make you feel as though you have the whole island entirely to yourself. You’ll quickly realise that Sardinia isn’t just a pretty face, but that every nook and cranny has its own story to tell. You’ll find the traditionalists in Barbagia, the high-life in Costa Smeralda and ancient history in Nora."];
var italyPrices = [100, 115, 110, 100];
var locationGroupItaly = document.querySelector("#locationItaly");

printLocations(locationGroupItaly, italyLocationSrc, italyLocationNames, italyLocationText, italyPrices);

// Spain

var spainLocationNames = ["Mallorca", "Ibiza", "Costa Brava", "Marbella"];
var spainLocationSrc = ["mallorca", "ibiza", "costaBrava", "marbella"];
var spainLocationText = ["Home to Love Island, Mediterranean weather and a staggering 262 beaches, Mallorca is paradise for all things, sand and sea. While beach holidays have traditionally been Mallorca’s stock-in-trade, its capital Palma has been carving out a niche as an up-and-coming city destination. From its boujee shopping scene, cultural attractions, pedestrianised old town and buzzing harbour – tis the sea-sun to be in Mallorca.", "Whether you’re the sort to enjoy clubbing or not, the island’s reputation as a hedonistic haven is well-deserved – but spending the daylight hours sleeping off a hangover is a bit like visiting a Michelin-starred restaurant and only ordering tap water. Ibiza is roughly ten times the size of Manhattan and in that area, you’ll find a huge diversity of landscapes, activities and cultural curiosities to enjoy. You just need to know where to look!", "Often forgotten by British holidaymakers is the Costa Brava, which funnily enough happens to be one of the most beguiling of Spain’s main holiday coasts. Running north from Barcelona to the Spanish-French border, the Costa Brava is gloriously wild in parts and manicured in others. With a flurry of Blue Flag beaches, pink rocks, hidden caves, outdoor activities and some of the finest gastronomy in the whole of Spain – what’s there not to love?", "Known as the crown jewel of the Costa Del Sol, Marbella is the Spanish playground of the rich and famous. But long before it started alluring A-listers, it was home to Romans and Moors, so it makes plenty of sense to seek out nods to the past and present during your holiday."];
var spainPrices = [110, 100, 110, 115];
var locationGroupSpain = document.querySelector("#locationSpain");

printLocations(locationGroupSpain, spainLocationSrc, spainLocationNames, spainLocationText, spainPrices);

// Croatia

var croatiaLocationNames = ["Hvar", "Dubrovnik"];
var croatiaLocationSrc = ["hvar", "dubrovnik"];
var croatiaLocationText = ["The island of natural beauty also happens to be one of the sunniest spots in Croatia. Boasting 2724 hours of sunshine each year, it’s glaringly obvious to recognise Hvar as a summer destination. A firm favourite with posh yachties and young partygoers, there’s no rest for the wicked. But besides dancing till dawn, Hvar Town, the island’s capital is also known for its top-notch restaurants and overly priced swanky hotels.", "Dubrovnik, the city that’s sure to leave any seasoned traveller lost for words. Whether you’re keen to experience the urban culture, reenact your favourite scene from Game of Thrones, or see the Adriatic’s famous waters with your own two eyes, Dubrovnik is the place for it all. A summer of impassioned culture, outstanding beauty and unmistakable architecture, this city will you in awe."];
var croatiaPrices = [120, 115];
var locationGroupCroatia = document.querySelector("#locationCroatia");

printLocations(locationGroupCroatia, croatiaLocationSrc, croatiaLocationNames, croatiaLocationText, croatiaPrices);

// Turkey

var turkeyLocationNames = ["Bodrum", "Antalya"];
var turkeyLocationSrc = ["bodrum", "antalya"];
var turkeyLocationText = ["Stretching from Turkey’s southwest Coast into the Aegean Sea, the city of Bodrum features twin bays with mighty views of Bodrum Castle. Each summer Bodrum welcomes a million travellers and yet it never rests on its laurels. From flower-filled cafes, growing clubs and boutique hotels, even in the most hectic days, you’ll still find solace in the nooks and crannies of the town. And yet, if there comes a point during your stay where you want to explore further afield, the city is also a great gateway for nearby beach towns and resorts.", "A summer in Antalya is like opening a goodie bag – you don’t know what you’re getting. For one, it’s often referred to as the Turkish Riviera, with nature supplying pristine beaches and a verdant interior and the boom in tourism bringing the glamorous hotels and a yacht-filled marina. When you have a canvas like Antalya, it’s easy to recognise that good looks are second nature to the region. Boasting 400-miles of white-sand beaches and a classically beguiling coastline backed by olive groves and the pine-clad Taurus Mountains, it’s hard to resist a getaway to turkey."];
var turkeyPrices = [130, 120];
var locationGroupTurkey = document.querySelector("#locationTurkey");

printLocations(locationGroupTurkey, turkeyLocationSrc, turkeyLocationNames, turkeyLocationText, turkeyPrices);

// Booking form

var noErrors;

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

// Number of people

var ddlNumber = document.querySelector("#ddlNumber");
ddlNumber.addEventListener("change", checkNumber);
ddlNumber.addEventListener("blur", checkNumber);

var ddlNumberOptions = [2, 3, 4, 5, 6];
ddlNumber.innerHTML = '<option value="0">Choose</option>';
for(i in ddlNumberOptions) {
    ddlNumber.innerHTML += `<option value="${ddlNumberOptions[i]}">${ddlNumberOptions[i]}</option>`;
}

function checkNumber() {
    if(ddlNumber.value != 0) {
        ddlNumber.classList.add("borderBlue");
        ddlNumber.classList.remove("borderRed");
        ddlNumber.nextElementSibling.style.display = "none";
    } else {
        noErrors = false;
        ddlNumber.classList.add("borderRed");
        ddlNumber.classList.remove("borderBlue");
        ddlNumber.nextElementSibling.style.display = "block";
    }
}

// Date

// Year

var ddlYear = document.querySelector("#ddlYear");
ddlYear.addEventListener("change", checkYear);
ddlYear.addEventListener("blur", checkYear);

var ddlYearOptions = [2021, 2022, 2023];
ddlYear.innerHTML = '<option value="0">Year</option>';
for(i in ddlYearOptions) {
    ddlYear.innerHTML += `<option value="${ddlYearOptions[i]}">${ddlYearOptions[i]}</option>`;
}

function checkYear() {
    if(ddlYear.value != 0) {
        ddlYear.classList.add("borderBlue");
        ddlYear.classList.remove("borderRed");
        dateError.style.display = "none";
    } else {
        noErrors = false;
        ddlYear.classList.add("borderRed");
        ddlYear.classList.remove("borderBlue");
        dateError.style.display = "block";
    }
}

// Month

var ddlMonth = document.querySelector("#ddlMonth");
ddlMonth.addEventListener("change", checkMonth);
ddlMonth.addEventListener("blur", checkMonth);
ddlMonth.addEventListener("change", printDays);
ddlMonth.addEventListener("blur", printDays);

var ddlMonthOptions = ["May", "June", "July", "August", "September"];
ddlMonth.innerHTML = '<option value="0">Month</option>';
for(i in ddlMonthOptions) {
    ddlMonth.innerHTML += `<option value="${ddlMonthOptions[i]}">${ddlMonthOptions[i]}</option>`;
}

function checkMonth(dateCheck) {
    if(ddlMonth.value != 0) {
        ddlMonth.classList.add("borderBlue");
        ddlMonth.classList.remove("borderRed");
        dateError.style.display = "none";
    } else {
        noErrors = false;
        ddlMonth.classList.add("borderRed");
        ddlMonth.classList.remove("borderBlue");
        dateError.style.display = "block";
    }
}

// Day

var ddlDay = document.querySelector("#ddlDay");
ddlDay.addEventListener("change", checkDay);
ddlDay.addEventListener("blur", checkDay);

ddlDay.innerHTML = '<option value="0">Day</option>';

function printDays() {
    if(ddlMonth.value == 0) return;
    var numberOfDays;
    switch (ddlMonth.value) {
        case 'May':
        case 'July':
        case 'August':
            numberOfDays = 31;
            break;
        default:
            numberOfDays = 30;
    }
    ddlDay.innerHTML = '<option value="0">Day</option>';
    for(let i = 0; i < numberOfDays; i++) {
        ddlDay.innerHTML += `<option value="${i + 1}">${i + 1}</option>`;
    }
}

function checkDay() {
    if(ddlDay.value != 0) {
        ddlDay.classList.add("borderBlue");
        ddlDay.classList.remove("borderRed");
        dateError.style.display = "none";
    } else {
        noErrors = false;
        ddlDay.classList.add("borderRed");
        ddlDay.classList.remove("borderBlue");
        dateError.style.display = "block";
    }
}

function checkDate() {
    checkYear();
    checkMonth();
    checkDay();
}

// Destination

var ddlDestination = document.querySelector("#ddlDestination");
ddlDestination.addEventListener("change", checkDestination);
ddlDestination.addEventListener("blur", checkDestination);

ddlDestination.innerHTML = '<option value="0">Destination</option>';

for(i in greeceLocationNames) {
    ddlDestination.innerHTML += `<option value="${greeceLocationNames[i]}">${greeceLocationNames[i]}</option>`;
}
for(i in franceLocationNames) {
    ddlDestination.innerHTML += `<option value="${franceLocationNames[i]}">${franceLocationNames[i]}</option>`;
}
for(i in italyLocationNames) {
    ddlDestination.innerHTML += `<option value="${italyLocationNames[i]}">${italyLocationNames[i]}</option>`;
}
for(i in spainLocationNames) {
    ddlDestination.innerHTML += `<option value="${spainLocationNames[i]}">${spainLocationNames[i]}</option>`;
}
for(i in croatiaLocationNames) {
    ddlDestination.innerHTML += `<option value="${croatiaLocationNames[i]}">${croatiaLocationNames[i]}</option>`;
}
for(i in turkeyLocationNames) {
    ddlDestination.innerHTML += `<option value="${turkeyLocationNames[i]}">${turkeyLocationNames[i]}</option>`;
}

function checkDestination() {
    if(ddlDestination.value != 0) {
        ddlDestination.classList.add("borderBlue");
        ddlDestination.classList.remove("borderRed");
        ddlDestination.nextElementSibling.style.display = "none";
    } else {
        noErrors = false;
        ddlDestination.classList.add("borderRed");
        ddlDestination.classList.remove("borderBlue");
        ddlDestination.nextElementSibling.style.display = "block";
    }
}

// Submit booking

var btnSubmitBooking = document.querySelector("#btnSubmitForm");

btnSubmitBooking.addEventListener("click", function() {
    noErrors = true;

    checkEmail();
    checkNumber();
    checkDate();
    checkDestination();

    if(noErrors) {
        tbEmail.value = "";
        tbEmail.classList.remove("borderBlue");
        ddlNumber.selectedIndex = "0";
        ddlNumber.classList.remove("borderBlue");
        ddlYear.selectedIndex = "0";
        ddlYear.classList.remove("borderBlue");
        ddlMonth.selectedIndex = "0";
        ddlMonth.classList.remove("borderBlue");
        ddlDay.selectedIndex = "0";
        ddlDay.classList.remove("borderBlue");
        ddlDestination.selectedIndex = "0";
        ddlDestination.classList.remove("borderBlue");

        var successMessage = "Success! One of our agents will reach out to you in the next couple of days to finalize the booking.";
        openSuccessModal(successMessage);
    }
});

// jQuery

$(document).ready(function(){
    $('.locationText').hide();
    $('.btnReadMore').click(function() {
        $(this).prev().slideToggle('fast');
        if($(this).text() == 'Read more') {
            $(this).text('Read less');
        } else {
            $(this).text('Read more');
        }
    });
    $('.btnBook').click(function() {
        $('#ddlDestination').val($(this).val());
        document.location.href = "#bookingForm";
        checkDestination();
    });
});