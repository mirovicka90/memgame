var images = ['images/jedan.png', 'images/dva.png', 'images/tri.jpg', 'images/cetiri.gif', 'images/pet.jpg', 'images/sest.png', 'images/sest.png', 'images/pet.jpg', 'images/cetiri.gif', 'images/tri.jpg', 'images/dva.png', 'images/jedan.png'];

var previousIndex = null;
var currentIndex = null;
var Level1Model = function () {


}




var Level1View = function (model, element) {
    this.level1Model = model;
    this.element = element;



};

Level1View.prototype.render = function () {

    var image = document.getElementsByClassName('image');
    var clickOnDiv = function () {

        var attribute = this.getAttribute('data-card');
        console.log(attribute);
    };

    for (var i = 0; i < image.length; i++) {
        image[i].addEventListener('click', clickOnDiv);
    };

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

    console.log(shuffle(images));

};





$(document).ready(function () {

    $(".img").hide();

    for (i = 0; i < images.length; i++) {
        var divId = '#div_' + (i + 1);
        var imgId = '#img_' + (i + 1);
        $(divId).click(function () {
            //console.log(this);
            //console.log(this.getAttribute("id").replace('div_', ''));
            $(this.children[0]).show(2000);
            $(this.children[0]).hide(2000);
            currentIndex = parseInt(this.getAttribute("id").replace('div_', '')) - 1;
            if (previousIndex != null && images[previousIndex] === images[currentIndex]) {
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
            }

            previousIndex = currentIndex;
        });
    };

});


Level1Controller = function (model, view) {
    this.level1Model = model;
    this.level1View = view;

};
Level1Controller.prototype.init = function () {

    this.level1View.render();

};

Level1Controller.prototype.showImage = function (e) {
    console.log(e);



}





var level1Model = new Level1Model();
var level1View = new Level1View();
var level1Controller = new Level1Controller(level1Model, level1View);

level1Controller.init();





