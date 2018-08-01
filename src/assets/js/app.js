import Calendar from './vue/CalendarMonth';
import CalendarDay from './vue/CalendarDay';
import Storage from './model/Storage';
import Meeting from './vue/Meeting';
import AddMeeting from './vue/AddMeeting';

const CalendarUI = new Calendar;
let calendarDay = new CalendarDay;
let storage = new Storage;
let meeting = new Meeting;
let AddMeetin = new AddMeeting;


const calendar = document.querySelector('.calendar-days');
const calendarGrid = document.querySelector('.calendar-grid');
const prevMonth = document.querySelector('.previous--month');
const nextMonth = document.querySelector('.next--month');
const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

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
    let saveDay = event.target.childNodes[0].innerText;
    calendarDay.year = CalendarUI.year;
    calendarDay.displayCalendar(saveDay, CalendarUI.month);
    let firstDay = new Date(CalendarUI.year, CalendarUI.month, saveDay, 8).getTime();
    let lastDay = new Date(CalendarUI.year, CalendarUI.month, (Number(saveDay) +1), 22).getTime();
    storage.getMeeting(firstDay, lastDay);
    event.preventDefault();
  }

  // if (event.target.className === "event" ) {
  //   meeting.oneMeeting();
  // }
});

calendarDay.CalendarGrid.addEventListener('click', (event) => {
  if (event.target.className.split(" ")[0] === "hour-event" && event.target.innerText === "") {
    let hour = event.target.className.split(" ")[1].split("h")[1];
    if (hour.split("-")[1] === "5") {
      hour = parseFloat(hour) + ":30";
    }
    meeting.oneMeetingDay(hour);
  }
  event.preventDefault();
});


// Ability to search for a date.
// 

const addMeeting = document.querySelector('.add-event');
addMeeting.addEventListener('click', (e) => {
  AddMeetin.isset();
  e.preventDefault();
});

const info = document.querySelector('.info');
info.addEventListener('click', (e) => {

  if (e.target.className === 'day-submit') {
    let name = document.querySelector('.day-text').value,
        number = document.querySelector('.day-number').value,
        email = document.querySelector('.day-email').value,
        start = 14000000000,
        end = 1500000000000,
        submit = {
          start,
          end,
          name,
          email
        };
        console.log(submit);

    // get value from UI, send it to API, sanitize it, then fetch data back
    storage.addMeeting(submit);
  }
});