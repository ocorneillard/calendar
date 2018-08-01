export default class CalendarDay {
  constructor() {
    this.main = document.querySelector('main');
    this.h1 = document.querySelector('h1');
    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.CalendarGrid = document.createElement('div');
    this.CalendarGrid.className = 'calendar-grid-hours';
    // this.CalendarGrid = document.querySelector('.calendar-grid-hours');
    this.isset = false;
    this.year = new Date().getFullYear();
  }

  displayCalendar(day, month) { 
    this.day = Number(day);
    this.month = month;
    setTimeout(() => {
      this.main.innerHTML = '';
    }, 50);
    this.h1.style.animation = "100ms grid cubic-bezier(.25, .8, .25, 1)";
    setTimeout(() => {
      this.h1.innerText = CalendarDay.ordinal_suffix_of(Number(day)) + ' ' + this.months[month] + ' ' + this.year;
    }, 100);

    for (let i = 8; i <= 22; i = i + 0.5) {
    let replaceDot = String(i).replace(/\./g,'-');
    let hours = document.createElement('div');
    hours.className = "hours";
    let hour = document.createElement('div');
    hour.className = "hour";
    let hourEvent = document.createElement('div');
    hourEvent.className = `hour-event h${replaceDot}`;
    if (i % 1 === 0) {
      if (i < 12) {
        hour.innerText = `${i}am`;
      } else {
        hour.innerText = `${i}pm`;
      }
      hourEvent.style.borderTop = "1px solid rgba(189,189,189, 0.4)"
    }

    hours.appendChild(hour);
    hours.appendChild(hourEvent);
    this.CalendarGrid.appendChild(hours);
    document.querySelector('body').appendChild(this.CalendarGrid);
    this.isset = true;
    }
  }

  static ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
  }

  nextDay() {

    let save = new Date(this.year, this.month + 1, 0);
    save = save.getDate();
    if (this.day === save) {
      this.day = 1;

      if (this.month < 11) {
        this.month++;
      } else {
        this.year++;
        this.month = 0;
      }
    } else {
      this.day++;
    }
    this.CalendarGrid.innerHTML = '';
    this.displayCalendar(this.day, this.month);
  }

  prevDay() {
    if (this.day === 1) {

      if (this.month > 0) {
        this.month--;
      } else {
        this.year--;
        this.month = 11;
      }
      let save = new Date(this.year, this.month + 1, 0);
      this.day = save.getDate();
      console.log(this.day);
    } else {
      this.day--;
    }
    this.CalendarGrid.innerHTML = '';
    this.displayCalendar(this.day, this.month);
  }

  // eventUI(start, end) {
  //   let startHour = new Date(start).getHours();
  //   let endHour = new Date(end).getHours();

  // }
}
