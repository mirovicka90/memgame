var cards = ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png', 'images/6.png', 'images/7.png',
    'images/8.png', 'images/9.png', 'images/10.png', 'images/11.png', 'images/12.png', 'images/13.png', 'images/14.png', 'images/15.png',
    'images/16.png', 'images/16.png', 'images/15.png', 'images/14.png', 'images/13.png', 'images/12.png', 'images/11.png', 'images/10.png',
    'images/9.png', 'images/8.png', 'images/7.png', 'images/6.png', 'images/5.png',
    'images/4.png', 'images/3.png', 'images/2.png', 'images/1.png'];

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


    shuffle(cards);
}


init();



var clickOnDiv = function () {
    if (gamePlaying == false) {
        gamePlaying = true;
        startTimer();
    }

    $(this.children[0]).show(1000);
    $(this.children[0]).hide(2000);

    currentIndex = parseInt(this.getAttribute("id").replace('n_', '')) - 1;

    if (previousIndex != null && previousIndex !== currentIndex && cards[previousIndex] === cards[currentIndex]) {

        console.log("BINGO");


        var bingoImgId_1 = '#i_' + (previousIndex + 1);
        var bingoImgId_2 = '#i_' + (currentIndex + 1);
        $(bingoImgId_1).stop(true, true);
        $(bingoImgId_2).stop(true, true);
        setTimeout(() => {

            $(bingoImgId_1).show();
            $(bingoImgId_2).show();
        }, 200);

        var bingoDivId_1 = '#n_' + (previousIndex + 1);
        var bingoDivId_2 = '#n_' + (currentIndex + 1);

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


function shuffle(cards) {
    var ctr = cards.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = cards[ctr];
        cards[ctr] = cards[index];
        cards[index] = temp;
    }
    for (i = 0; i < cards.length; i++) {
        var imgId = 'i_' + (i + 1);
        document.getElementById(imgId).src = cards[i];
    }
    return cards;

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
    $('#intermediate').click(function () {
        alert("Welcome to intermediate level!")
        window.location.href = 'level2.html';
    })

});


// startujemo tajmer
function startTimer() {
    count = 60;
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

    shuffle(cards);

    for (i = 0; i < cards.length; i++) {
        var imgId = 'i_' + (i + 1);
        document.getElementById(imgId).src = cards[i];
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



























