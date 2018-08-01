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

calendarGrid.addEventListener('click', (e) => {
  if (event.target.className === "calendar-grid-day cm") {
    let saveDay = event.target.childNodes[0].innerText;
    calendarDay.year = CalendarUI.year;
    calendarDay.displayCalendar(saveDay, CalendarUI.month);
    let firstDay = new Date(CalendarUI.year, CalendarUI.month, saveDay, 8).getTime();
    let lastDay = new Date(CalendarUI.year, CalendarUI.month, (Number(saveDay) +1), 22).getTime();
    storage.getMeeting(firstDay, lastDay);
    e.preventDefault();
  }

  // if (event.target.className === "event" ) {
  //   meeting.oneMeeting();
  // }
});

calendarDay.CalendarGrid.addEventListener('click', (e) => {
  if (event.target.className.split(" ")[0] === "hour-event" && event.target.innerText === "") {
    let hour = parseFloat(event.target.className.split(" ")[1].split("h")[1]);
    meeting.oneMeetingDay(hour);
  }
  e.preventDefault();
});


// Ability to search for a date.
// 

const addMeeting = document.querySelector('.add-event');
addMeeting.addEventListener('click', (e) => {
  AddMeetin.isset();
  e.preventDefault();
});