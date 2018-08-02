import Storage from "../model/Storage";

let storage = new Storage;

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

  validate(start, end) {
    let name = document.querySelector('.day-text').value,
    number = document.querySelector('.day-number').value,
    email = document.querySelector('.day-email').value;

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    name = name.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");
    number = Number.isInteger(number);
    re = re.test(String(email).toLowerCase());
    name = name.trim();
    let submit = {
      start,
      end,
      "persons" : number,
      name,
      email
    };

    return submit
  }
}