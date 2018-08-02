import Calendar from './vue/CalendarMonth';
import CalendarDay from './vue/CalendarDay';
import Storage from './model/Storage';
import Meeting from './vue/Meeting';
import AddMeeting from './vue/AddMeeting';
const CalendarUI = new Calendar;
let calendarDay = new CalendarDay;
let storage = new Storage;
let meeting = new Meeting;
let createMeeting = new AddMeeting;


const calendar = document.querySelector('.calendar-days');
const calendarGrid = document.querySelector('.calendar-grid');
const prevMonth = document.querySelector('.previous--month');
const nextMonth = document.querySelector('.next--month');
const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
const back = document.querySelector('.month-back');

days.forEach( (day) => {
  let calendarDay = document.createElement('div');
  calendarDay.className = "calendar-day";
  calendarDay.innerText = day;
  calendar.appendChild(calendarDay);
});
CalendarUI.dayOfCalendar();
let firstDay = new Date(CalendarUI.year, CalendarUI.month, 0).getTime();
let lastDay = new Date(CalendarUI.year, CalendarUI.month+1, 0).getTime();
storage.getMeeting(firstDay, lastDay);


prevMonth.addEventListener('click', (e) => {

  if( calendarDay.isset === true ) {
    calendarDay.prevDay();
  } else {
    CalendarUI.prevMonth();
    let firstDay = new Date(CalendarUI.year, CalendarUI.month, 0).getTime();
    let lastDay = new Date(CalendarUI.year, CalendarUI.month+1, 0).getTime();
    storage.getMeeting(firstDay, lastDay);
  }
  e.preventDefault();
});

nextMonth.addEventListener('click', (e) => {

  if( calendarDay.isset === true ) {
    calendarDay.nextDay();
  } else {
    CalendarUI.nextMonth();
    let firstDay = new Date(CalendarUI.year, CalendarUI.month, 0).getTime();
    let lastDay = new Date(CalendarUI.year, CalendarUI.month+1, 0).getTime();
    storage.getMeeting(firstDay, lastDay);
  }
  e.preventDefault();
});

calendarGrid.addEventListener('click', (event) => {
  if (event.target.className === `calendar-grid-day cm${CalendarUI.month}`) {
    CalendarUI.saveDay = event.target.childNodes[0].innerText;
    calendarDay.year = CalendarUI.year;
    calendarDay.displayCalendar(CalendarUI.saveDay, CalendarUI.month);
    let firstDay = new Date(CalendarUI.year, CalendarUI.month, CalendarUI.saveDay, 8).getTime();
    let lastDay = new Date(CalendarUI.year, CalendarUI.month, (Number(CalendarUI.saveDay) +1), 22).getTime();
    storage.getMeeting(firstDay, lastDay);
    back.style.visibility = "visible";
    back.addEventListener('click', (e) => {
      // let cal = document.createElement('div');
      // cal.className = 'calendar-days';
      // let calG = document.createElement('div');
      // calG.className = 'calendar-grid';
      // let main = document.querySelector('main');
      // main.appendChild(cal);
      // main.appendChild(calG);
      // CalendarUI.dayOfCalendar();
      // let firstDay = new Date(CalendarUI.year, CalendarUI.month, 0).getTime();
      // let lastDay = new Date(CalendarUI.year, CalendarUI.month+1, 0).getTime();
      // console.log(back);
      // storage.getMeeting(firstDay, lastDay);
      back.style.visibility = "hidden";
    });
    event.preventDefault();
  }

  // if (event.target.className === "event" ) {
  //   meeting.oneMeeting();
  // }
});

calendarDay.CalendarGrid.addEventListener('dblclick', (event) => {
  if (event.target.className.split(" ")[0] === "hour-event" && event.target.style.borderLeftWidth === "") {
    let background = ['rgba(0,176,255, 0', "rgba(0,230,118, 0", "rgba(255,202,40,0"];
    let rand = Math.floor((Math.random() * 3));
    let color = background[rand];
    event.target.style.background = "rgba(0,176,255,0.3)";
    let hour = event.target.className.split(" ")[1].split("h")[1];
    CalendarUI.hour = hour.split('-')[0];
    console.log(CalendarUI.hour);
    if (hour.split("-")[1] === "5") {
      hour = parseFloat(hour) + ":30";
      CalendarUI.min = 30;
    } else {
      CalendarUI.min = 0;
    }
    if (storage.startHour !== undefined) {
      storage.endHour = new Date(CalendarUI.year, CalendarUI.month, CalendarUI.saveDay, CalendarUI.hour, CalendarUI.min);
      console.log(storage.endHour);
      let res = {
        start : new Date(storage.startHour).getTime(),
        end : new Date(storage.endHour).getTime(),
        name : "New meeting"
      };
      console.log(color);
      meeting.displayMeetingHours(res, color);
      meeting.oneMeetingDay(res);

    } else {
      storage.startHour = new Date(CalendarUI.year, CalendarUI.month, CalendarUI.saveDay, CalendarUI.hour, CalendarUI.min);
    }
  }
  event.preventDefault();
});


// Ability to search for a date.
// 

const addMeeting = document.querySelector('.add-event');
addMeeting.addEventListener('click', (e) => {
  if (createMeeting.verifyNavbar === false) {
    createMeeting.isset();
  } else {
    createMeeting.reduce();
  }
  e.preventDefault();
});

const info = document.querySelector('.info');
info.addEventListener('click', (e) => {

  if (e.target.className === 'day-submit') {
    // get value from UI, send it to API, sanitize it, then fetch data back
    storage.addMeeting(createMeeting.validate(storage.startHour.getTime(), storage.endHour.getTime()));
  }
});
