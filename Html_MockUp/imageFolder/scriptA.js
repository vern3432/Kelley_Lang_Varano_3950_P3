//make image object

function image(caption, title, url) {
    this.caption = caption;
    this.title = title;
    this.url = url;
}

//make image array and load images
//test data for now, ZYX etc is for sorting testing
const imageArray = [
    //Note: Images & Text will not align UNLESS they are at least two lines of text.
    new image("Dragons: The term 'dragon' originates from the early 13th century, though they appear as early as 310 BC with a malicious Ancient Egyptian serpent known as Apophis. It would evolve many times before reaching the modern Western depiction shown above."
        , "./imageFolder/dragon.jpg", "\n Source: https://en.wikipedia.org/wiki/Dragon#/media/File:Friedrich-Johann-Justin-Bertuch_Mythical-Creature-Dragon_1806.jpg"),
    new image("Gorgons: Originating in Greek mythology from the 12th century BC, the gorgons are demons that turn to stone those that behold them directly. Their tale is sometimes of one tragedy, brought about as a punishment by the gods for their (supposedly) wicked behavior."
        , "./imageFolder/gorgon.jpg", "\n Source: https://en.wikipedia.org/wiki/Medusa#/media/File:Medusa.jpg"),
    new image("Basilisks: A biblical monster, the basilisk's poison is potent and its fire breathing ability worthy of the awe it commands. It is often merged or conflated with the cockatrice, another monster of myth."
        , "./imageFolder/basilisk.jpeg", "\n Source: https://en.wikipedia.org/wiki/Basilisk#/media/File:Marcus_Gheeraerts_I_-_Fable_of_the_basilisk_and_weasel.jpeg"),
    new image("Gryphons: Divine beasts originating as far back as the Mesopotamians, they are typically a servant of a god or holy figure and a symbol of royalty and valor that has survived for thousands of years."
        , "./imageFolder/gyphon.jpg", "\n Source: https://en.wikipedia.org/wiki/Griffin#/media/File:Minneteppich_KGM.jpg"),
    new image("Manticores: Man-eating beasts with human heads, the manticore name translates literally into 'man-eater' in its native language, dating back to the Persian empire. The inspiration for these creatures is still unknown to this day as the original books are now lost."
        , "./imageFolder/manticore.png", "\n Source: https://upload.wikimedia.org/wikipedia/commons/b/bc/Jonston1650-quadruped-TabLIII-manticore.png"),
    new image("Yetis: Massive apes originating in Tibetan folklore. the yetis are featured first in Buddhist lore as sentient animals that serve as disciples of monks and guard their temples from evil spirits and other nefarious intruders."
        , "./imageFolder/yeti.jpg", "\n Source: https://en.wikipedia.org/wiki/Yeti#/media/File:Yeti_coloris%C3%A9.jpg"),
    new image("Thunderbirds: A frequently featured and utilized creature in American Indigenous peoples' stories and art, the Thunderbird serves as a symbol of strength and power, as well as an origin of thunder and lightning."
        , "./imageFolder/thunderbird.jpg", "\n Source: https://en.wikipedia.org/wiki/Thunderbird_(mythology)#/media/File:Haida_double_thunderbird_1880.jpg"),
    new image("Minotaur: The son of King Minos of Crete, the Minotaur was the result of divine punishment by Poseidon, creating a child that would grow up to be half-man and half-bull, devouring humans until it was tossed into a dizzying maze to slay any unfortunate prisoner."
        , "./imageFolder/minotaur.jpg", "\n Source: https://en.wikipedia.org/wiki/Minotaur#/media/File:Tondo_Minotaur_London_E4_MAN.jpg"),
    new image("Leviathan: A massive sea serpent originating within several Jewish texts. It is seen as a being of chaos, one that consumes the souls of the damned and is destined to be slain at the end of time."
        , "./imageFolder/leviathan.png", "\n Source: https://en.wikipedia.org/wiki/Leviathan#/media/File:Destruction_of_Leviathan.png"),
    new image("Phoenix: A flaming bird able to reincarnate itself after death, the phoenix finds a place in many historical societies but consistently remains a symbol of the divine will of the Sun and are frequently seen in all sorts of texts."
        , "./imageFolder/phoenix.jpg", "\n Source: https://en.wikipedia.org/wiki/Phoenix_(mythology)#/media/File:Phoenix-Fabelwesen.jpg"),
];



//https://stackoverflow.com/questions/2466356/sorting-objects-by-property-values
// a list of sorting functions
var sorters = {
    byURL: function (a, b) {
        return ((a.url < b.url) ? -1 : ((a.url > b.url) ? 1 : 0));
    },
    byTitle: function (a, b) {
        return ((a.title < b.title) ? -1 : ((a.title > b.title) ? 1 : 0));
    }
};


//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


//sorting function for alphabetical by source or title, or random
function sortBy(byAttribute) {
    if (byAttribute == "byURL") {
        imageArray.sort(sorters.byURL);
    }

    else if (byAttribute == "byTitle") {
        imageArray.sort(sorters.byTitle);
    }

    else if (byAttribute == "random") {
        shuffleArray(imageArray);
    }

    else {
        console.log("sortBy method error")
        return null;
    }

}


//https://www.w3schools.com/HTML/html5_draganddrop.asp
function allowDrop(ev) {
    ev.preventDefault();
}

function dragEnd(ev) {
    ev.target.closest("figure").remove();
}

document.addEventListener('dragstart', function (ev) {
    ev.target.ondragend = dragEnd;
});

function drag(ev) {
    var figure = ev.target.closest("figure");
    ev.dataTransfer.setData("figure", figure.outerHTML);
}

function drop(ev) {
    ev.preventDefault();  
    var data = ev.dataTransfer.getData("figure");

    var draggedFigure = document.createElement("figure");
    draggedFigure.innerHTML = data;

    var draggedOverFigure = ev.target.closest("figure");
    var aHolder = draggedOverFigure.parentNode;

    aHolder.insertBefore(draggedFigure, draggedOverFigure);
}






/* method that is called upon a button click
extra credit for visual transition/manual click and drag might go here

sort by the attribute, use DOM features to make img and hold imgs
that come from the imageArray holding the custom image objects
*/
function updateImages(byAttribute) {
    sortBy(byAttribute)
    const theImages = document.getElementById("allImages");
    theImages.innerHTML = "";

    for (const x of imageArray) {
        //Create holder for img and text
        const mainHolder = document.createElement("figure");
        //create img DOM
        const anImage = document.createElement("img");
        anImage.src = x.title;

        //create text DOM using caption and url
        const someText = document.createElement("figcaption");
        someText.innerText = x.caption + x.url;

        //add both to the holder so they display together
        mainHolder.appendChild(anImage);
        mainHolder.appendChild(someText);

        mainHolder.draggable = true;
        mainHolder.ondragstart = drag;

        //add each holder to the main object which gets sorted/shuffled
        theImages.appendChild(mainHolder);
    }
}

//call it randomly first so always random on refresh
updateImages("random");



