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

  isset(start, recaptcha) {
    this.info.innerHTML = 
    `
    <div class="card">
      <div class="card__title">
        <div class="card__title-center">
          <form action="?" action="/submit" method="post" id="comment_form">
            <div class="test">
            <i class="fas fa-calendar-alt"></i>
            </div>
            <label for="date">
              <input type="date" id="date" value="${this.getFormattedDate(new Date(start))}">
            </label>
            <label for="name">
              <i class="fas fa-chalkboard-teacher"></i>
              <input type="text" name="" id="name" placeholder="Add a meeting name" class="day-text">
            </label>
            <label for="person">
                <i class="fas fa-users"></i>
              <input type="number" id="person" placeholder="How many persons ?" class="day-number">
            </label>
            <label for="email">
                <i class="far fa-envelope"></i>
                <input type="email" placeholder="john.smith@gmail.com" class="day-email">
            </label>
          </form>
        </div>
      </div>
  
      <div class="card__content">
        <div class="card__content-primary">
        </div>
        <div class="card__content-secondary">
          <div id="editor-container">
            <textarea placeholder="Add a description to your meeting..."></textarea>
          </div>
          <div class="hell"></div>
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
    // <input type="submit" class="card__footer-btn" value="SAVE"/>
    setTimeout(() => {
      recaptcha();
    }, 200)
  }

  reduce() {
    document.querySelector('.card').remove();
  }

  validate(start, end) {
    let name = document.querySelector('.day-text').value,
    number = document.querySelector('.day-number').value,
    email = document.querySelector('.day-email').value,
    desc = document.querySelector('textarea').value,
    timeInput = document.querySelectorAll('select');
    let value = [];
    timeInput.forEach( (select) => {
      value.push(select.value.replace('h', ''));
    });
    // console.log(number);

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    name = name.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");
    re = re.test(String(email).toLowerCase());
    name = name.trim();
    let submit = {
      start,
      end,
      name,
      "persons" : number,
      desc,
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

  getFormattedDate(date) {
    var year = date.getFullYear();
  
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return year + '-' + month + '-' + day;
  }

  recaptcha() {
    let create = document.createElement('div');
    grecaptcha.render(create, {
      sitekey : "6LffHmkUAAAAAI2sB779g4mSv6HpOEy1ZXH0M_XF"
    });
    let dot = document.querySelector('.hell');
    dot.appendChild(create);
  }
}