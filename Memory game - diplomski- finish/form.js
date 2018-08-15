
document.querySelector('#buttonStart').addEventListener('click', function () {

    if (document.getElementById('easy').checked && (document.getElementById('timer').value == 25 ||
        document.getElementById('timer').value == 40 || document.getElementById('timer').value == 60)) {

        var namePlayer1 = document.getElementById('namePlayer1').value;

        var namePlayer2 = document.getElementById('namePlayer2').value;

        var timerSelect = document.getElementById('timer');

        var timer = timerSelect.options[timerSelect.selectedIndex].value

        window.location.href = 'level1.html?player1=' + namePlayer1 + '&player2=' + namePlayer2 + '&timer=' + timer;
    }

    else if (document.getElementById('intermediate').checked && (document.getElementById('timer').value == 25 ||
        document.getElementById('timer').value == 40 || document.getElementById('timer').value == 60)) {

        var namePlayer1 = document.getElementById('namePlayer1').value;

        var namePlayer2 = document.getElementById('namePlayer2').value;

        var timerSelect = document.getElementById('timer');

        var timer = timerSelect.options[timerSelect.selectedIndex].value


        window.location.href = 'level2.html?player1=' + namePlayer1 + '&player2=' + namePlayer2 + '&timer=' + timer;
    }

    else if (document.getElementById('hard').checked && (document.getElementById('timer').value == 25 ||
        document.getElementById('timer').value == 40 || document.getElementById('timer').value == 60)) {



        var namePlayer1 = document.getElementById('namePlayer1').value;

        var namePlayer2 = document.getElementById('namePlayer2').value;

        var timerSelect = document.getElementById('timer');

        var timer = timerSelect.options[timerSelect.selectedIndex].value

        window.location.href = 'level3.html?player1=' + namePlayer1 + '&player2=' + namePlayer2 + '&timer=' + timer;

    } else {
        alert('Please fill this settings!')
    }

})

document.querySelector('#buttonReset').addEventListener('click', function () {

    location.reload('index.html');


})

