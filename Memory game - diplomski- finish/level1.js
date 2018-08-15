
// kreiram niz sa slikama koje dinamicki dodajem iz html

var images = ['images/jedan.png', 'images/dva.png', 'images/tri.jpg',
    'images/cetiri.gif', 'images/pet.jpg', 'images/sest.png', 'images/sest.png', 'images/pet.jpg',
    'images/cetiri.gif', 'images/tri.jpg', 'images/dva.png', 'images/jedan.png'];

// setovanje varijabli na null vrednost

var previousIndex = null;

var currentIndex = null;


var count = null;

var counter = null;

var player1Name = null;

var player2Name = null;


// inicijalizacija igrice

function init() {

    scores = [0, 0];

    m = [0, 0];

    activePlayer = 0;

    gamePlaying = false;

    player1Name = getQueryStringValue('player1');

    player2Name = getQueryStringValue('player2');

    count = getQueryStringValue('timer');



    document.getElementById("score-0").textContent = '0';

    document.getElementById("score-1").textContent = '0';

    document.getElementById("name-0").textContent = player1Name;

    document.getElementById("name-1").textContent = player2Name;

    document.getElementById('counter').textContent = count + 'secs';

    shuffle(images);
}


init();



var clickOnDiv = function () {

    if (gamePlaying == false) {

        gamePlaying = true;

        startTimer();
    }

    $(this.children[0]).show(1000);

    $(this.children[0]).hide(4000);

    currentIndex = parseInt(this.getAttribute("id").replace('div_', '')) - 1;


    if (previousIndex != null && previousIndex !== currentIndex && images[previousIndex] === images[currentIndex]) {

        console.log("BINGO");


        var bingoImgId_1 = '#img_' + (previousIndex + 1);

        var bingoImgId_2 = '#img_' + (currentIndex + 1);

        $(bingoImgId_1).stop(true, true);

        $(bingoImgId_2).stop(true, true);

        setTimeout(() => {

            $(bingoImgId_1).show();

            $(bingoImgId_2).show();

        }, 200);

        var bingoDivId_1 = '#div_' + (previousIndex + 1);

        var bingoDivId_2 = '#div_' + (currentIndex + 1);

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


function shuffle(images) {

    var ctr = images.length, temp, index;

    while (ctr > 0) {

        index = Math.floor(Math.random() * ctr);

        ctr--;

        temp = images[ctr];

        images[ctr] = images[index];

        images[index] = temp;
    }

    for (i = 0; i < images.length; i++) {

        var imgId = 'img_' + (i + 1);

        document.getElementById(imgId).src = images[i];
    }

    return images;

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


    $('#resetBtn').click(function () {

        location.reload();

    })

    $('#settings').click(function () {

        alert("Welcome to page settings!")

        window.location.href = 'index.html';
    })

})


// startujemo tajmer



function startTimer() {

    count = (getQueryStringValue('timer'));

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

            alert(" Game over!");
            //whoIsWinner();

            return;


        }

    };

}

// resetujemo igricu za drugog igraca

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

    shuffle(images);

    for (i = 0; i < images.length; i++) {

        var imgId = 'img_' + (i + 1);

        document.getElementById(imgId).src = images[i];
    }

    addDivListeners();

    addMovesListeners();


}

// kreiram funkciju onclick na dugme new game za proglasenje pobednika



// ako su sve slike pogodjene igrac treba da predje na sledeci novo

document.querySelector('.btn').addEventListener('click', function () {

    if (document.getElementById('score-0').textContent == 6 || document.getElementById('score-1').textContent == 6) {

        alert(" All images are match! Go to next level!")

        clearInterval(counter);
    }
    // ako je skor prvog igraca veci od skora drugog igraca, ispisi u alertu ime prvog igraca kao pobednika

    else if (document.getElementById('score-0').textContent > document.getElementById('score-1').textContent && count <= 0

        && document.getElementById('m-1').textContent !== '0') {

        alert(player1Name + " is win! Go to the next level!")

        clearInterval(counter);
    }
    // ako je skor drugog igraca veci od skora prvog igraca, ispisi u alertu ime drugog igraca kao pobednika

    else if (document.getElementById('score-1').textContent > document.getElementById('score-0').textContent && count <= 0) {

        alert(player2Name + " is win! Go to the next level!")

        clearInterval(counter);
    }

    // u svakoj sledecoj situaciji pobednik ne postoji, ispisi u alertu poruku

    else {

        alert("No winner!")

        clearInterval(counter);
    }

})


















































































































