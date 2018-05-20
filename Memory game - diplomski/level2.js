var img = ['images/prva.png', 'images/druga.jpg', 'images/treca.jpg', 'images/cetvrta.png', 'images/peta.jpg', 'images/sesta.jpg', 'images/sedma.jpg', 'images/osma.jpg', 'images/deveta.jpg', 'images/deseta.jpg', 'images/jedanaesta.jpg', 'images/dvanaesta.jpg', 'images/dvanaesta.jpg', 'images/jedanaesta.jpg', 'images/deseta.jpg', 'images/deveta.jpg', 'images/osma.jpg', 'images/sedma.jpg', 'images/sesta.jpg', 'images/peta.jpg', 'images/cetvrta.png', 'images/treca.jpg', 'images/druga.jpg', 'images/prva.png'];

var preIndex = null;
var currIndex = null;
var Level2Model = function () {


}




var Level2View = function (model, element) {
    this.level2Model = model;
    this.element = element;


};

Level2View.prototype.render = function () {

    var image = document.getElementsByClassName('image');
    var clickOnDiv = function () {

        var attribute = this.getAttribute('data-card');
        console.log(attribute);
    };

    for (var i = 0; i < img.length; i++) {
        image[i].addEventListener('click', clickOnDiv);
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

            var imageId = 'image_' + (i + 1);
            document.getElementById(imageId).src = img[i];
        }
        return img;
    }

    console.log(shuffle(img));



};

$(document).ready(function () {

    $(".img").hide();

    for (i = 0; i < img.length; i++) {
        var divId = '#d_' + (i + 1);
        var imgId = '#image_' + (i + 1);


        $(divId).click(function () {
            //console.log(this);
            //console.log(this.getAttribute("id").replace('d_', ''));
            $(this.children[0]).show(2000);
            $(this.children[0]).hide(2000);

            currIndex = parseInt(this.getAttribute("id").replace('d_', '')) - 1;

            if (preIndex != null && img[preIndex] === img[currIndex]) {
                console.log("BINGO");
                var bingoImgId_1 = '#image_' + (preIndex + 1);
                var bingoImgId_2 = '#image_' + (currIndex + 1);
                $(bingoImgId_1).stop(true, true);
                $(bingoImgId_2).stop(true, true);
                setTimeout(() => {
                    $(bingoImgId_1).show();
                    $(bingoImgId_2).show();
                }, 200);
                var bingoDivId_1 = '#d_' + (preIndex + 1);
                var bingoDivId_2 = '#d_' + (currIndex + 1);
                $(bingoDivId_1).unbind('click');
                $(bingoDivId_2).unbind('click');
            }

            preIndex = currIndex;
        });
    };

});
$(document).ready(function () {
    $('#level1').click(function () {
        window.location.href = 'level1.html';
    })
});
$(document).ready(function () {
    $('#resetBtn').click(function () {
        location.reload();


    })
});




Level2Controller = function (model, view) {
    this.level1Model = model;
    this.level1View = view;

};
Level2Controller.prototype.init = function () {

    this.level1View.render();

}











var level2Model = new Level2Model();
var level2View = new Level2View();
var level2Controller = new Level2Controller(level2Model, level2View);

level2Controller.init();




