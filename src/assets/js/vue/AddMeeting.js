export default class AddMeeting {
  constructor() {
    this.navbar = document.querySelector('.navbar');
    this.header = document.querySelector('.month');
    this.btn = document.querySelector('.add-event');
    this.login = document.querySelector('.login');
    this.log = document.querySelector('.login-login');
    this.sign = document.querySelector('.login-signup');
    this.form = document.querySelector('form');
    this.add = document.querySelector('.add-event');
    this.verifyNavbar = false;
  }

  isset() {
    this.navbar.style.height = "10rem";
    this.add.style.transform = "rotate(45deg)";
    this.verifyNavbar = true;
  }

  reduce() {
    this.navbar.style.height = "4.5rem";
    this.add.style.transform = "rotate(0deg)";
    this.verifyNavbar = false;
  }
}