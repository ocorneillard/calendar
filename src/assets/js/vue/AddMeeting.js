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
  }

  isset() {
    this.navbar.style.height = "30%";
    this.add.style.transform = "rotate(45deg)";
  }
}