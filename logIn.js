var User = function (username, password) {
    this.username = username;
    this.password = password;
};

var LoginModel = function () {
    this.user = new User("marija", "123");
};

var LoginView = function (model, element) {
    this.loginModel = model;
    this.element = element;
    this.handleLogin = null;
};

LoginView.prototype.render = function () {
    this.element.innerHTML = '<div id="div-form"><form action=""><div class="margin-bottom-10"><label for="username" style="display:inline-block;width:100px">Username:</label><input type="text" id="username"></div><class="margin-bottom-10"><label for="password" style="display:inline-block;width:100px">Password:</label><input type="password" id="password"></div<div><button type="button" id="login">Login</button></div></form></div>';
    document.getElementById('login').addEventListener('click', this.handleLogin);
}
LoginView.prototype.readInputs = function () {
    var u = document.getElementById('username').value;
    var p = document.getElementById('password').value;
    return {
        username: u,
        password: p
    }

}

LoginView.prototype.showErrorMessage = function (msg) {
    var node = document.createElement("p");                 // Create a <li> node
    var textnode = document.createTextNode(msg);         // Create a text node
    node.appendChild(textnode);
    this.element.appendChild(node);

}

var LoginController = function (model, view) {
    this.loginView = view;
    this.loginModel = model;
};

LoginController.prototype.init = function () {
    //bind- forsiranje kao da je ovu funkciju pozvao Controller, a ne dugme
    this.loginView.handleLogin = this.handleLogin.bind(this);
    this.loginView.render();
}

LoginController.prototype.handleLogin = function (e) {
    //console.log(e);
    var returnObj = this.loginView.readInputs();
    var username = returnObj.username;
    var password = returnObj.password;
    if (this.loginModel.user.username === username && this.loginModel.user.password === password) {
        var level1Model = new Level1Model();
        var level1View = new Level1View(level1Model, document.getElementById('main-div'));
        var level1Controller = new Level1Controller(level1Model, level1View);
        level1Controller.init();
    } else {
        this.loginView.showErrorMessage('Login failed!');
    }
}

var loginModel = new LoginModel();
var loginView = new LoginView(loginModel, document.getElementById('main-div'));
var loginController = new LoginController(loginModel, loginView);

loginController.init();

var Level1Model = function () {

};

var Level1View = function (model, element) {
    this.level1Model = model;
    this.element = element;

};
Level1View.prototype.render = function () {
    this.element.innerHTML = '<p>Replace with Level1 html</p>';

};
var Level1Controller = function (model, view) {
    this.level1Model = model;
    this.level1View = view;

};

Level1Controller.prototype.init = function () {
    this.level1View.render();
}
