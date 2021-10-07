const data = [
    {
        number: '01',
        titlle: 'Wormhole',
        videoSrc: 'assets/videos/whormhole.mp4',
        videoPoster: 'assets/images/whormhole-shot.png',
        desc: 'Wormholes were first theorized in 1916, though that wasn\'t what they were called at the time. While reviewing another physicist\'s solution to the equations in Albert Einstein\'s theory of general relativity, Austrian physicist Ludwig Flamm realized another solution was possible.'
    },
    {
        number: '02',
        titlle: 'Eye of God',
        videoSrc: 'assets/videos/helix.mp4',
        videoPoster: 'assets/images/helix-shot.png',
        desc: 'The Helix Nebula, also known as NGC 7293, is a planetary nebula (PN) located in the constellation Aquarius. Discovered by Karl Ludwig Harding probably before 1824, this object is one of the closest to the Earth of all the bright planetary nebulae'
    },
    {
        number: '03',
        titlle: 'Blackhole',
        videoSrc: 'assets/videos/blackhole.mp4',
        videoPoster: 'assets/images/blackhole-shot.png',
        desc: 'A black hole is a region of spacetime where gravity is so strong that nothing—no particles or even electromagnetic radiation such as light—can escape from it. The theory of general relativity predicts that a sufficiently compact mass can deform spacetime to form a black hole.'
    },
]

// Find active index
function setActiveData() {
    var child = document.getElementsByClassName("card-active");
    var index = Array.prototype.indexOf.call(child[0].parentNode.children, child[0]);

    var infoTemplate = document.getElementById("template");
    var infoNode = `
     <div class="number">${data[index].number}</div>
     <h1 class="title"><span>The</span> ${data[index].titlle}</h1>
     <p class="text">${data[index].desc}</p>`;

    infoTemplate.innerHTML = infoNode;

    var videoTemplate = document.getElementById("video");
    var videoNode = `
    <video class="video" src="${data[index].videoSrc}" poster="${data[index].videoPoster}" loop muted autoplay></video>
    `

    videoTemplate.innerHTML = videoNode;
}

setActiveData();


// Add active class to the current card
var cardsContainer = document.getElementById("cards");
var cards = cardsContainer.getElementsByClassName("card");
for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("card-active");
        current[0].className = current[0].className.replace(" card-active", "");
        this.className += " card-active";
        setActiveData();
        window.scrollTo(0, 0);
    });
}

// Audio play
function autoplay() {
    var r = confirm("Would You Like To AutoPlay Music?");
    if (r == true) {
        audioElement = document.getElementById("audio");
        audioElement.play();

        audioElement.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    }
}

autoplay();