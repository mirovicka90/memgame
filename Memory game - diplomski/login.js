//kreiram user-a
var User = function (username, password) {
    this.username = username;
    this.password = password;
};
// loginmodel-on radi sa podacima
var LoginModel = function () {
    this.user = new User("MarijaMir", "123");
};
//prikazuje username i password
var LoginView = function (model, element) {
    this.loginModel = model;
    this.element = element;
    this.handleLogin = null;
};
//dohvatamo elemente iz HTML 
LoginView.prototype.render = function () {
    this.element.innerHTML = '<div id="div-form"><form action=""><div class="margin-bottom-10"><label for="username" style="display:inline-block;width:100px">Username:</label><input type="text" id="username"></div><class="margin-bottom-10"><label for="password" style="display:inline-block;width:100px">Password:</label><input type="password" id="password"></div<div><button type="button" id="login" class="btn">Login</button><button id="resetBtn" type="reset" value="reset">Reset</button></div></form></div>';
    //na dugme kacimo click event
    document.getElementById('login').addEventListener('click', this.handleLogin);
    document.getElementById('resetBtn').addEventListener('click', this.resetForm);
};

//citamo elemente iz HTML
LoginView.prototype.readInputs = function () {
    var u = document.getElementById('username').value;
    var p = document.getElementById('password').value;
    return {
        username: u,
        password: p
    }

}


//povezujemo controller sa modelom i view-om
var LoginController = function (model, view) {
    this.loginView = view;
    this.loginModel = model;
};
//inicijalizujemo LoginController
LoginController.prototype.init = function () {
    //bind- forsiranje kao da je ovu funkciju pozvao Controller, a ne dugme
    this.loginView.handleLogin = this.handleLogin.bind(this);
    this.loginView.resetForm = this.resetForm;

    this.loginView.render();




};
//dodajemo u LoginController funkciju handleLogin, i ona se sad poziva iz LoginContrller-a


LoginController.prototype.handleLogin = function (e) {
    //console.log(e);
    var returnObj = this.loginView.readInputs();
    var username = returnObj.username;
    var password = returnObj.password;

    //dakle vrsimo proveru za username i password, ukoliko je jednak onom iz modela, prelazimo na level1

    if (this.loginModel.user.username === username && this.loginModel.user.password === password) {
        window.location.href = 'level1.html';

    } else {
        alert('Login filed!')
    };


};

//reset dugme
LoginController.prototype.resetForm = function (e) {
    //console.log("klik");
    function resetForm(form) {
        $(':input', form).each(function () {
            var type = this.type;
            var tag = this.tagName.toLowerCase();
            if (loginView.username != username && loginView.password != password);
            this.value = "";

        });
    };
    resetForm();

};

var loginModel = new LoginModel();
var loginView = new LoginView(loginModel, document.getElementById('main-div'));
var loginController = new LoginController(loginModel, loginView);


loginController.init();

