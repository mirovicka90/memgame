var img = ['images/prva.png', 'images/druga.jpg', 'images/treca.jpg',
    'images/cetvrta.png', 'images/peta.jpg', 'images/sesta.jpg', 'images/sedma.jpg', 'images/osma.jpg',
    'images/deveta.jpg', 'images/deseta.jpg', 'images/jedanaesta.jpg', 'images/dvanaesta.jpg',
    'images/dvanaesta.jpg', 'images/jedanaesta.jpg', 'images/deseta.jpg', 'images/deveta.jpg', 'images/osma.jpg',
    'images/sedma.jpg', 'images/sesta.jpg', 'images/peta.jpg',
    'images/cetvrta.png', 'images/treca.jpg', 'images/druga.jpg', 'images/prva.png'];

var previousIndex = null;
var currentIndex = null;

var count = null;
var counter = null;


function init() {

    scores = [0, 0];

    m = [0, 0];

    activePlayer = 0;

    gamePlaying = false;

    document.getElementById("score-0").textContent = '0';

    document.getElementById("score-1").textContent = '0';

    document.getElementById("name-0").textContent = 'Player1';

    document.getElementById("name-1").textContent = 'Player2';


    shuffle(img);
}


init();



var clickOnDiv = function () {
    if (gamePlaying == false) {
        gamePlaying = true;
        startTimer();
    }

    $(this.children[0]).show(1000);
    $(this.children[0]).hide(2000);

    currentIndex = parseInt(this.getAttribute("id").replace('d_', '')) - 1;

    if (previousIndex != null && previousIndex !== currentIndex && img[previousIndex] === img[currentIndex]) {

        console.log("BINGO");


        var bingoImgId_1 = '#image_' + (previousIndex + 1);
        var bingoImgId_2 = '#image_' + (currentIndex + 1);
        $(bingoImgId_1).stop(true, true);
        $(bingoImgId_2).stop(true, true);
        setTimeout(() => {

            $(bingoImgId_1).show();
            $(bingoImgId_2).show();
        }, 200);

        var bingoDivId_1 = '#d_' + (previousIndex + 1);
        var bingoDivId_2 = '#d_' + (currentIndex + 1);

        $(bingoDivId_1).unbind('click');
        $(bingoDivId_2).unbind('click');

        scores[activePlayer]++;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];


    }

    previousIndex = currentIndex;


}

function addDivListeners() {
    var image = document.getElementsByClassName('image');
    for (var i = 0; i < image.length; i++) {
        image[i].addEventListener('click', clickOnDiv);
    };
}


function removeDivListeners() {
    var image = document.getElementsByClassName('image');
    for (var i = 0; i < image.length; i++) {
        $(image[i]).unbind('click');
    };
}


function shuffle(img) {
    var ctr = img.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = img[ctr];
        img[ctr] = img[index];
        img[index] = temp;
    }
    for (i = 0; i < img.length; i++) {
        var imgId = 'image_' + (i + 1);
        document.getElementById(imgId).src = img[i];
    }
    return img;

}

function addMovesListeners() {
    $(".image").click(function (e) {
        e.preventDefault();
        m[activePlayer]++;
        $(".moves-").html(m[activePlayer]);

        document.getElementById('m-' + activePlayer).textContent = m[activePlayer];

    });
}

$(document).ready(function () {
    addDivListeners();
    addMovesListeners();
    $(".img").hide();
})


$(document).ready(function () {
    $('#resetBtn').click(function () {
        location.reload();


    })
});


$(document).ready(function () {

    $('#easy').click(function () {
        alert("Welcome to the easy level!")
        window.location.href = 'level1.html';
    })
    $('#hard').click(function () {
        alert("Welcome to hard level!")
        window.location.href = 'level3.html';
    })

});


// startujemo tajmer
function startTimer() {
    count = 40;
    counter = setInterval(timer, 1000);

}

function timer() {

    count = count - 1;

    document.getElementById("counter").innerHTML = count + " secs";


    if (count <= 0) {
        clearInterval(counter);
        // prebacaj na drugog igraca
        if (activePlayer === 0) {
            activePlayer = 1;


            startGameForSecondPlayer();

        }


        if (activePlayer === 1) {

            alert("Game over!");


            return;


        }

    };

}

function startGameForSecondPlayer() {
    previousIndex = null;
    currentIndex = null;

    count = null;
    counter = null;

    scores = [0, 0];
    m = [0, 0];
    gamePlaying = false;
    removeDivListeners();

    $(".img").hide();

    shuffle(img);

    for (i = 0; i < img.length; i++) {
        var imgId = 'image_' + (i + 1);
        document.getElementById(imgId).src = img[i];
    }

    addDivListeners();
    addMovesListeners();


}


document.querySelector('.btn').addEventListener('click', function () {
    if (scores[activePlayer] === 6) {
        alert("All images are match! Go to intermediate level!")
        clearInterval(counter);
    }
    else if (document.getElementById('score-0').textContent > document.getElementById('score-1').textContent) {
        alert("Player1 is win!")
        clearInterval(counter);
    } else if (document.getElementById('score-1').textContent > document.getElementById('score-0').textContent) {
        alert("Player2 is win!")
        clearInterval(counter);
    } else {
        alert("No winner!")
        clearInterval(counter);
    }

})

















