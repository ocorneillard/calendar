import Calendar from './vue/CalendarMonth';
import CalendarDay from './vue/CalendarDay';
import Storage from './model/Storage';
import Meeting from './vue/Meeting';
import AddMeeting from './vue/AddMeeting';

// Init class 
/**
 * CalendarUI => main calendar
 * CalendarDay => weekly
 * Storage => fetch data from API
 * CreateMeeting & Meeting => Display data and add them
 */
const CalendarUI = new Calendar;
let calendarDay = new CalendarDay;
let storage = new Storage;
let meeting = new Meeting;
let createMeeting = new AddMeeting;
let check = 1;
let firstClick;

// display day for the main calendar + CalendarGrid => main calendar
const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
const calendar = document.querySelector('.calendar-days');
const calendarGrid = document.querySelector('.calendar-grid');
days.forEach( (day) => {
  let calendarDay = document.createElement('div');
  calendarDay.className = "calendar-day";
  calendarDay.innerText = day;
  calendar.appendChild(calendarDay);
});

// create and fetch event for the main calendar
CalendarUI.dayOfCalendar();
let firstDay = new Date(CalendarUI.year, CalendarUI.month, 0).getTime();
let lastDay = new Date(CalendarUI.year, CalendarUI.month+1, 0).getTime();
storage.getMeeting(firstDay, lastDay);


// header 
// info => card to submit data, and to read content of meeting
const prevMonth = document.querySelector('.previous--month');
const nextMonth = document.querySelector('.next--month');
const back = document.querySelector('.month-back');
const info = document.querySelector('.info');

prevMonth.addEventListener('click', (e) => {
  // calendarDay.isset => is it monthly or weekly ? true if weekly, false if monthly.
  if( calendarDay.isset === true ) {
    calendarDay.prevDay();
    let firstDay = new Date(CalendarUI.year, calendarDay.month, calendarDay.day, 8).getTime();
    let lastDay = new Date(CalendarUI.year, calendarDay.month, calendarDay.day, 22).getTime();
    storage.getMeeting(firstDay, lastDay);
  } else {
    CalendarUI.prevMonth();
    let firstDay = new Date(CalendarUI.year, CalendarUI.month, 0, 8).getTime();
    let lastDay = new Date(CalendarUI.year, CalendarUI.month+1, 0, 23).getTime();
    storage.getMeeting(firstDay, lastDay);
  }
  e.preventDefault();
});

nextMonth.addEventListener('click', (e) => {

  if( calendarDay.isset === true ) {
    calendarDay.nextDay();
    let firstDay = new Date(CalendarUI.year, calendarDay.month, calendarDay.day, 8).getTime();
    let lastDay = new Date(CalendarUI.year, calendarDay.month, calendarDay.day, 22).getTime();
    storage.getMeeting(firstDay, lastDay);
  } else {
    CalendarUI.nextMonth();
    let firstDay = new Date(CalendarUI.year, CalendarUI.month, 1, 8).getTime();
    let lastDay = new Date(CalendarUI.year, CalendarUI.month+1, 0, 23).getTime();
    storage.getMeeting(firstDay, lastDay);
  }
  e.preventDefault();
});


// display weekly calendar 
calendarGrid.addEventListener('click', (event) => {
  if (event.target.className === `calendar-grid-day cm${CalendarUI.month}`) {
    displayDay(event.target.childNodes[0].innerText);
  }
  if (event.target.className === 'event' || event.target.className === 'event_more' ) {
    displayDay(event.target.parentNode.childNodes[0].innerText)
  }

  if (event.target.className === 'time') {
    displayDay(event.target.parentNode.parentNode.childNodes[0].innerText);
  }
  event.preventDefault();
});

// UI selector for hours => from - to, then call storage to create the event
calendarDay.CalendarGrid.addEventListener('click', (event) => {
  // Check the hours, translate it for the API
  if (event.target.className.split(" ")[0] === "hour-event" && event.target.style.borderLeftWidth === "") {
    let background = ['rgba(0,176,255, 0', "rgba(0,230,118, 0", "rgba(255,202,40,0"];
    let rand = Math.floor((Math.random() * 3));
    let color = background[rand];
    event.target.style.background = "rgba(0,176,255,0.3)";
    let hour = event.target.className.split(" ")[1].split("h")[1];
    CalendarUI.hour = hour.split('-')[0];
    if (hour.split("-")[1] === "5") {
      hour = parseFloat(hour) + ":30";
      CalendarUI.min = 30;
    } else {
      CalendarUI.min = 0;
    }
    
    if (storage.startHour !== undefined && check === 2) {
      let lastClick = event.target;
      if (createMeeting.verifyUI(firstClick.className, lastClick.className) === false) {
        console.log('already taken !');
        check = 1;
        firstClick.style.background = "white";
        lastClick.style.background = "white";
      } else {
        storage.endHour = new Date(CalendarUI.year, CalendarUI.month, CalendarUI.saveDay, CalendarUI.hour, CalendarUI.min);
        let res = {
          start : new Date(storage.startHour).getTime(),
          end : new Date(storage.endHour).getTime(),
          name : "New meeting"
        };
        smoothScrollTo((firstClick.offsetTop - 80), 350);
        meeting.displayMeetingHours(res, color);
        res.end = res.end + 1800000;
        meeting.oneMeetingDay(res);
        check = 1;
        // createMeeting.isset();
      }
    } else {
      let spanFrom = document.createElement('span');
      spanFrom.style.float = "left";
      firstClick = event.target;
      event.target.appendChild(spanFrom);
      storage.startHour = new Date(CalendarUI.year, CalendarUI.month, CalendarUI.saveDay, CalendarUI.hour, CalendarUI.min);
      check++;
    }
  }
  event.preventDefault();
});




info.addEventListener('click', (e) => {

  if (e.target.className === 'day-submit') {
    // get value from UI, send it to API, sanitize it, then fetch data back
    storage.addMeeting(createMeeting.validate(storage.startHour.getTime(), storage.endHour.getTime()));
  }
});

/**
 * Working on it :
 * 1) possibility to add event directly from main calendar
 * 2) Possibility to make a research for a date
 * 3) Propose an other date if already taken
 */
const addMeeting = document.querySelector('.add-event');
addMeeting.addEventListener('click', (e) => {
  if (createMeeting.verifyNavbar === false) {
    // createMeeting.isset();
    meeting.oneMeetingDay({"start": 0, "end" : 0});
  } else {
    createMeeting.reduce();
  }
  e.preventDefault();
});
/**
 * Sometimes, data doesn't fetch directly => error 500, even if the code of API seems correct => Mainly due to webpack I think
 * When on week calendar, if you change month, it brings you back on an incorrect month.
 */

function clearSelection() {
  if(document.selection && document.selection.empty) {
      document.selection.empty();
  } else if(window.getSelection) {
      var sel = window.getSelection();
      sel.removeAllRanges();
  }
}

function displayDay(saveDay) {

  CalendarUI.saveDay = saveDay;
  calendarDay.year = CalendarUI.year;
  calendarDay.displayCalendar(CalendarUI.saveDay, CalendarUI.month);
  let firstDay = new Date(CalendarUI.year, CalendarUI.month, CalendarUI.saveDay, 8).getTime();
  let lastDay = new Date(CalendarUI.year, CalendarUI.month, CalendarUI.saveDay, 22).getTime();
  storage.getMeeting(firstDay, lastDay);
  back.style.visibility = "visible";
  back.addEventListener('click', (e) => {

    // Reset, take the property in CalendarMonth
    let main = document.querySelector('main');
    let calendarMonth = document.createElement('div');
    calendarMonth.className = "calendar-grid";
    calendarDay.CalendarGrid.innerHTML = "";
    main.appendChild(calendar);
    main.appendChild(CalendarUI.calendarGrid);
    CalendarUI.titleMonth();
    calendarDay.isset = false;
    calendarDay.CalendarGrid.remove();
    if (createMeeting.verifyNavbar === true) {
      createMeeting.reduce();
    }

    back.style.visibility = "hidden";
  });
}


function smoothScrollTo(endY, duration = 400) {
  const startY = window.pageYOffset,
  distanceY = endY - startY,
  startTime = new Date().getTime();

  const easeInOut = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) {
      return distance / 2 * time * time * time * time + from;
    } else {
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    }
  }

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime,
    newY = easeInOut(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    scrollTo(0, newY);
  }, 1000/60);
}

let wdm = document.getElementById('wdm');
let day = false,
week = false,
month = true;
wdm.addEventListener('change', (e) => {
  if (wdm.value === "day" && day === false) {
    displayDay(new Date().getDate());
    day = true;
    week = false;
    month = false;
  } else if (wdm.value === "week") {
    console.log('working on it');

  } else if (wdm.value === "month" && month === false) {

    let main = document.querySelector('main');
    let calendarMonth = document.createElement('div');
    calendarMonth.className = "calendar-grid";
    calendarDay.CalendarGrid.innerHTML = "";
    main.appendChild(calendar);
    main.appendChild(CalendarUI.calendarGrid);
    CalendarUI.titleMonth();
    calendarDay.isset = false;
    calendarDay.CalendarGrid.remove();
    if (createMeeting.verifyNavbar === true) {
      createMeeting.reduce();
    }
    day = false;
    week = false;
    month = true;

  }
});

