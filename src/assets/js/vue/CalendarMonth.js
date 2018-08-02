export default class Calendar {

  constructor(month,year) {
    this.month = month=== undefined ? new Date().getMonth() : month;
    this.year = year=== undefined ? new Date().getFullYear() : year;
    this.calendarGrid = document.querySelector('.calendar-grid');
    this.calendarTitle = document.querySelector('h1');
    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.min = 0;
  }

  static getMonday(d) {

    d = new Date(d);
    var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
    return new Date(d.setDate(diff));
  }

  dayOfCalendar(month = this.month, year = this.year) {
    this.titleMonth();
    let firstDate= new Date(year, month, 0),
    lastDate= new Date(year, month+1, 0),
    firstMonday = Calendar.getMonday(firstDate).getDate();

    const firstDateOfMonth = firstDate.getDate();
    const endOfPrevMonth = lastDate.getDate();
    const endOfCurrentMonth = 7 - lastDate.getDay();

    let allDate = [firstDateOfMonth, endOfPrevMonth, endOfCurrentMonth];
    let checkFirstMonth = false;
    allDate.forEach((date) => {
        for (let i = checkFirstMonth === false ? firstMonday : 1; i <= date; i++) {
          this.displayCalendar(i, date !== allDate[1] || checkFirstMonth === false ? 'fadeMonth' : `cm${this.month}`);
          if (checkFirstMonth === true && i === new Date().getDate() && month === new Date().getMonth()) {
            document.querySelector(`.cm${this.month} .day${i}`).style.background = "#00E676";
          }
        }
        checkFirstMonth = true;
    });

    }
  
  displayCalendar(day, bm) {
    
    const createDay = document.createElement('div');
    createDay.className = `calendar-grid-day ${bm}`;
    const dayText = document.createElement('div');
    dayText.className = `daytext day${day}`;
    dayText.innerText = day;
    createDay.appendChild(dayText);
    this.calendarGrid.appendChild(createDay);
  }

  removeCalendar() {
      document.querySelector('.calendar-grid').innerHTML = "";
    }

  nextMonth() {
  
      if (this.month < 11) {
        this.month++;
      } else {
        this.year++;
        this.month = 0;
      }
      this.removeCalendar();
      this.dayOfCalendar(this.month, this.year);
    }

  prevMonth() {

    if (this.month > 0) {
      this.month--;
    } else {
      this.year--;
      this.month = 11;
    }
    this.removeCalendar();
    this.dayOfCalendar(this.month, this.year);
  }

  titleMonth() {
    
    const h1 = document.querySelector('h1');
    setTimeout(() => {
      h1.innerText = "";
      h1.innerText = this.months[(this.month)] + ' ' + this.year;
    }, 50);
  }
}