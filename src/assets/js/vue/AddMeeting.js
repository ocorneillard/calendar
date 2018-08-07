// import Storage from "../model/Storage";

// let storage = new Storage;

export default class AddMeeting {
  constructor() {
    this.navbar = document.querySelector('.navbar');
    this.header = document.querySelector('.month');
    this.btn = document.querySelector('.add-event');
    this.login = document.querySelector('.login');
    this.log = document.querySelector('.login-login');
    this.sign = document.querySelector('.login-signup');
    this.add = document.querySelector('.add-event');
    this.verifyNavbar = false;
  }

  isset() {
    this.navbar.style.height = "10rem";
    this.add.style.transform = "rotate(45deg)";
    this.verifyNavbar = true;
  }

  reduce() {
    this.form = document.querySelector('.card');
    this.navbar.style.height = "4.5rem";
    this.add.style.transform = "rotate(0deg)";
    this.verifyNavbar = false;
    this.form.remove();
  }

  validate(start, end) {
    let name = document.querySelector('.day-text').value,
    // number = document.querySelector('.day-number').value,
    email = document.querySelector('.day-email').value,
    desc = document.querySelector('textarea').value,
    timeInput = document.querySelectorAll('select');
    let value = [];
    timeInput.forEach( (select) => {
      value.push(select.value.replace('h', ''));
    });
    console.log(new Date(start));
    console.log(value);
    // console.log(number);

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    name = name.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");
    // number = Number.isInteger(number);
    re = re.test(String(email).toLowerCase());
    name = name.trim();
    let submit = {
      start,
      end,
      name,
      email
    };

    return submit;
  }

  verifyUI(firstClick, lastClick) {
    firstClick = firstClick.split(' ')[1].replace('h', '').replace('-', '.');
    lastClick = lastClick.split(' ')[1].replace('h', '').replace('-', '.');
    for (let i = Number(firstClick); i <= Number(lastClick); i = i + 0.5) {
      let replaceDot = String(i).replace(/\./g,'-');
      let select = document.querySelector(`.h${replaceDot}`);
      if (select.style.borderLeftWidth === "2rem") {
        return false;
      }
    }
  }
}