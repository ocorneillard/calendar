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
    this.body = document.querySelector('body');
    this.verifyNavbar = false;
    this.info = document.querySelector('.info');
  }

  isset() {
    this.info.innerHTML = 
    `
    <div class="card">
      <div class="card__title">
        <div class="card__title-center">
          <form action="#">
            <div class="test">
  
            </div>
            <label for="month">
                <i class="fas fa-calendar-alt"></i>
              <select name="hours" id="hours">
                <option>14h</option>
                <option>14h30</option>
              </select>
              <input type="month" id="month">
            </label>
            <label for="name">
              <i class="fas fa-chalkboard-teacher"></i>
              <input type="text" name="" id="name" placeholder="Add a meeting name">
            </label>
            <label for="person">
                <i class="fas fa-users"></i>
              <input type="number" id="person" placeholder="How many persons ?">
            </label>
            <label for="email">
                <i class="far fa-envelope"></i>
                <input type="email" placeholder="john.smith@gmail.com">
            </label>
          </form>
        </div>
      </div>
  
      <div class="card__content">
        <div class="card__content-primary">
        </div>
        <div class="card__content-secondary">
          <div id="editor-container"></div>
        </div>
      </div>
      <div class="card__footer">
          <div class="card__footer-btn">
            SAVE
          </div>
          <div class="card__footer-cancel">
            CANCEL
          </div>
      </div>
    </div>`;

  }

  reduce() {
    document.querySelector('.card').remove();
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