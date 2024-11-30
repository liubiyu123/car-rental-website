var ifLogin = false;
var onPayment = false;
var onHome = true;
var onLogin = false;


function Moveup() {
    let navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.classList.remove('active');
    }
}

function Dropdown(){
    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

function Login(){
    if(onLogin) {
        return 0;
    }
    let login = document.querySelector('.login-page');
    let home = document.querySelector('.home-page');
    login.classList.toggle('active');
    home.classList.toggle('active');
    onPayment = false;
    onHome = false;
    onLogin = true;
}

function Logout(){
    if(onPayment) {
        return 0;
    }
    ifLogin = false;
    onLogin = false;
    let header = document.querySelector('.header-btn');
    let payment = document.querySelector('.payment-btn');
    header.classList.remove('active');
    payment.classList.remove('active');
}

function AftLogin(){
    ifLogin = true;
    let header = document.querySelector('.header-btn');
    let payment = document.querySelector('.payment-btn');
    let login = document.querySelector('.login-page');
    let home = document.querySelector('.home-page');
    header.classList.toggle('active');
    payment.classList.toggle('active');
    login.classList.remove('active');
    home.classList.remove('active');
}

function Payment() {
    if(ifLogin == false) {
        let login = document.querySelector('.login-page');
        let home = document.querySelector('.home-page');
        login.classList.toggle('active');
        home.classList.toggle('active');
        onPayment = false;
        onHome = false;
        onLogin = true;
    }
    else {
        window.location.href = "/Rent.html";
    }
}

function invoice() {
    let payment = document.querySelector('.payment-container');
    let invoice = document.querySelector('.invoice-container');
    payment.classList.toggle('active');
    invoice.classList.toggle('active');
}

function Book() {
    alert("Successful book");
    window.location.href = "/A1.html";
}

function Invoice() {
    window.location.href = "/Payment.html";
}

function employee() {
    var uname = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if(uname == "liu biyu" && pass == "123") {
        window.location.href = "/employee.html";
    }
    else {
        alert("wrong password");
    }
}