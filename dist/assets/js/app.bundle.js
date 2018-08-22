/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Meeting = function () {
  function Meeting() {
    _classCallCheck(this, Meeting);
  }

  _createClass(Meeting, [{
    key: 'displayMeeting',
    value: function displayMeeting(res) {
      var dayText = document.querySelector('.cm' + new Date(res.start).getMonth() + ' .day' + new Date(res.start).getDate());
      var start = new Date(res.start).getHours();
      var end = new Date(res.end).getHours();
      var minutesStart = new Date(res.start).getMinutes();
      var minutesEnd = new Date(res.end).getMinutes();
      if (dayText.parentElement.childElementCount < 3) {
        var event = document.createElement('div');
        var timeOfEvent = document.createElement('span');

        if (minutesEnd === 30) {
          minutesEnd = 0;
          end++;
        } else {
          minutesEnd = 30;
        }
        var timeText = document.createTextNode(start + (minutesStart === 0 ? "h" : 'h' + minutesStart) + '  - ' + (end + (minutesEnd === 0 ? "h" : 'h' + minutesEnd)));
        timeOfEvent.appendChild(timeText);
        timeOfEvent.className = 'time';
        event.className = "event";
        var meeting = document.createTextNode('Meeting');
        event.appendChild(timeOfEvent);
        event.appendChild(meeting);
        dayText.parentElement.appendChild(event);
      } else if (dayText.parentElement.childElementCount === 3) {
        var _event = document.createElement('div');
        var _timeOfEvent = document.createElement('span');
        _timeOfEvent.className = 'time';
        _event.className = "event_more";
        var _meeting = document.createTextNode('...');
        _event.appendChild(_timeOfEvent);
        _event.appendChild(_meeting);
        dayText.parentElement.appendChild(_event);
      }
    }
  }, {
    key: 'removeMeeting',
    value: function removeMeeting() {
      var events = document.querySelectorAll('.event');
      var eventMore = document.querySelectorAll('.event_more');
      eventMore.forEach(function (event) {
        return event.remove();
      });
      events.forEach(function (event) {
        return event.remove();
      });
    }
  }, {
    key: 'displayMeetingHours',
    value: function displayMeetingHours(res, color) {
      var selectUI = void 0;
      var start = new Date(res.start).getHours();
      var end = new Date(res.end).getHours();
      var minutesStart = new Date(res.start).getMinutes();
      var minutesEnd = new Date(res.end).getMinutes();
      var starti = minutesStart === 30 ? start + 0.5 : start;
      var endi = minutesEnd === 30 ? end + 0.5 : end;
      var firstTime = 1;
      for (var i = starti; i <= endi; i = i + 0.5) {
        var replaceDot = String(i).replace(/\./g, '-');
        if (i % 2 === 0) {
          selectUI = '.h' + i;
        }
        selectUI = '.h' + replaceDot;
        selectUI = document.querySelector(selectUI + ('.d' + new Date(res.start).getDate()));
        selectUI.style.background = color + ".3)";
        selectUI.style.border = "none";
        selectUI.style.borderLeft = "2rem solid " + color + ".6)";
        if (firstTime === 1) {
          selectUI.innerText = 'Meeting ' + (res.numberOfperson === undefined || res.numberOfperson == 0 ? "" : " -  " + res.numberOfperson + " persons - " + res.room + " room");
          firstTime++;
        } else if (firstTime === 2) {
          if (minutesEnd === 30) {
            minutesEnd = 0;
            end++;
          } else {
            minutesEnd = 30;
          }
          selectUI.innerText = start + (minutesStart === 0 ? "h" : 'h' + minutesStart) + '  - ' + (end + (minutesEnd === 0 ? "h" : 'h' + minutesEnd));
          firstTime++;
        }
      }
    }
  }, {
    key: 'month',
    value: function month(send, select) {
      if (select.parentNode.childNodes.length <= 3) {
        var event = document.createElement('div');
        var timeOfEvent = document.createElement('span');
        var timeText = document.createTextNode(new Date(send.start).getHours() + 'h');
        timeOfEvent.appendChild(timeText);
        timeOfEvent.className = 'time';
        event.className = "event";
        var meeting = document.createTextNode(send.name);
        event.appendChild(timeOfEvent);
        event.appendChild(meeting);
        select.parentNode.appendChild(event);
      }
    }
  }, {
    key: 'oneMeeting',
    value: function oneMeeting() {
      var info = document.querySelector(".info");
      if (info.childNodes.length !== 0) {
        info.innerHTML = '';
      }
      var txt = "Meeting with..";
      var card = Meeting.createDiv(undefined, "card");
      var cardContent = Meeting.createDiv(undefined, "card__content");
      var cardPrimary = Meeting.createDiv(txt, "card__content-primary");
      cardContent.appendChild(cardPrimary);
      card.appendChild(cardContent);
      info.appendChild(card);
    }
  }, {
    key: 'createInputHours',
    value: function createInputHours(h, min) {
      var bool = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      function populateHours(b) {
        for (var i = 8; i <= 22; i = i + 0.5) {
          if (i % 1 === 0) {
            var option = document.createElement('option');
            option.textContent = i + "h";
            hourSelect.appendChild(option);
          } else {
            var option = document.createElement('option');
            option.textContent = Math.floor(i) + "h" + "30";
            hourSelect.appendChild(option);
          }
        }
      }

      var time = document.createElement('span');
      if (bool === true) {
        time.innerText = ' to ';
      }
      var hourSelect = document.createElement('select');
      hourSelect.className = "time__input-hours";
      time.className = "time__input";

      populateHours(bool);
      time.appendChild(hourSelect);
      hourSelect.value = min === 30 ? h + "h" + min : h + "h";
      return time;
    }
  }], [{
    key: 'createDiv',
    value: function createDiv() {
      var txtContent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var css = arguments[1];

      var appendRight = document.createElement('div');
      appendRight.className = css;
      appendRight.innerText = txtContent;
      return appendRight;
    }
  }]);

  return Meeting;
}();

exports.default = Meeting;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(3);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CalendarMonth = __webpack_require__(4);

var _CalendarMonth2 = _interopRequireDefault(_CalendarMonth);

var _CalendarDay = __webpack_require__(5);

var _CalendarDay2 = _interopRequireDefault(_CalendarDay);

var _Storage = __webpack_require__(6);

var _Storage2 = _interopRequireDefault(_Storage);

var _Meeting = __webpack_require__(0);

var _Meeting2 = _interopRequireDefault(_Meeting);

var _AddMeeting = __webpack_require__(7);

var _AddMeeting2 = _interopRequireDefault(_AddMeeting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Init class 
/**
 * CalendarUI => main calendar
 * CalendarDay => weekly
 * Storage => fetch data from API
 * CreateMeeting & Meeting => Display data and add them
 */
var CalendarUI = new _CalendarMonth2.default();
var calendarDay = new _CalendarDay2.default();
var storage = new _Storage2.default();
var meeting = new _Meeting2.default();
var createMeeting = new _AddMeeting2.default();
var check = 1;
var firstClick = void 0;
var quill = void 0;
var day = false,
    week = false,
    month = true;

// display day for the main calendar + CalendarGrid => main calendar
var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
var calendar = document.querySelector('.calendar-days');
var calendarGrid = document.querySelector('.calendar-grid');
days.forEach(function (day) {
  var calendarDay = document.createElement('div');
  calendarDay.className = "calendar-day";
  calendarDay.innerText = day;
  calendar.appendChild(calendarDay);
});

CalendarUI.dayOfCalendar();
var firstDay = new Date(CalendarUI.year, CalendarUI.month, 0).getTime();
var lastDay = new Date(CalendarUI.year, CalendarUI.month + 1, 0).getTime();
storage.getMeeting(firstDay, lastDay);

var prevMonth = document.querySelector('.previous--month');
var nextMonth = document.querySelector('.next--month');
var back = document.querySelector('.month-back');

prevMonth.addEventListener('click', function (e) {
  // calendarDay.isset => is it monthly or weekly ? true if weekly, false if monthly.
  if (calendarDay.isset === true) {
    calendarDay.prevDay();
    var _firstDay = new Date(CalendarUI.year, calendarDay.month, calendarDay.day, 8).getTime();
    var _lastDay = new Date(CalendarUI.year, calendarDay.month, calendarDay.day, 22).getTime();
    storage.getMeeting(_firstDay, _lastDay);
  } else {
    CalendarUI.prevMonth();
    var _firstDay2 = new Date(CalendarUI.year, CalendarUI.month, 0, 8).getTime();
    var _lastDay2 = new Date(CalendarUI.year, CalendarUI.month + 1, 0, 23).getTime();
    storage.getMeeting(_firstDay2, _lastDay2);
  }
  e.preventDefault();
});

nextMonth.addEventListener('click', function (e) {

  if (calendarDay.isset === true) {
    calendarDay.nextDay();
    var _firstDay3 = new Date(CalendarUI.year, calendarDay.month, calendarDay.day, 8).getTime();
    var _lastDay3 = new Date(CalendarUI.year, calendarDay.month, calendarDay.day, 22).getTime();
    storage.getMeeting(_firstDay3, _lastDay3);
  } else {
    CalendarUI.nextMonth();
    var _firstDay4 = new Date(CalendarUI.year, CalendarUI.month, 1, 8).getTime();
    var _lastDay4 = new Date(CalendarUI.year, CalendarUI.month + 1, 0, 23).getTime();
    storage.getMeeting(_firstDay4, _lastDay4);
  }
  e.preventDefault();
});

// display weekly calendar 
calendarGrid.addEventListener('click', function (event) {
  if (event.target.className === 'calendar-grid-day cm' + CalendarUI.month) {
    displayDay(event.target.childNodes[0].innerText);
  }
  if (event.target.className === 'event' || event.target.className === 'event_more') {
    displayDay(event.target.parentNode.childNodes[0].innerText);
  }

  if (event.target.className === 'time') {
    displayDay(event.target.parentNode.parentNode.childNodes[0].innerText);
  }
  event.preventDefault();
});

// UI selector for hours => from - to, then call storage to create the event
calendarDay.CalendarGrid.addEventListener('click', function (event) {
  // Check the hours, translate it for the API
  if (event.target.className.split(" ")[0] === "hour-event" && event.target.style.borderLeftWidth === "") {
    var background = ['rgba(0,176,255, 0', "rgba(0,230,118, 0", "rgba(255,202,40,0"];
    var rand = Math.floor(Math.random() * 3);
    var color = background[rand];
    event.target.style.background = "rgba(0,176,255,0.3)";
    var hour = event.target.className.split(" ")[1].split("h")[1];
    CalendarUI.hour = hour.split('-')[0];
    if (hour.split("-")[1] === "5") {
      hour = parseFloat(hour) + ":30";
      CalendarUI.min = 30;
    } else {
      CalendarUI.min = 0;
    }

    if (storage.startHour !== undefined && check === 2) {
      var lastClick = event.target;
      if (createMeeting.verifyUI(firstClick.className, lastClick.className) === false) {
        check = 1;
        firstClick.style.background = "white";
        lastClick.style.background = "white";
      } else {
        storage.endHour = new Date(CalendarUI.year, CalendarUI.month, CalendarUI.saveDay, CalendarUI.hour, CalendarUI.min);
        var res = {
          start: new Date(storage.startHour).getTime(),
          end: new Date(storage.endHour).getTime(),
          name: "New meeting"
        };
        smoothScrollTo(firstClick.offsetTop - 80, 350);
        meeting.displayMeetingHours(res, color);
        res.end = res.end + 1800000;
        // meeting.oneMeetingDay(res);
        createMeeting.isset(res.start, createMeeting.recaptcha);
        issetInfo();
        quill = new Quill('.quill', {
          theme: 'snow',
          placeholder: 'Add a description to your meeting'
        });
        var addInputHours = document.querySelector('.test');
        addInputHours.appendChild(meeting.createInputHours(new Date(res.start).getHours(), new Date(res.start).getMinutes()));
        addInputHours.appendChild(meeting.createInputHours(new Date(res.end).getHours(), new Date(res.end).getMinutes(), true));
        check = 1;
      }
    } else {
      var spanFrom = document.createElement('span');
      spanFrom.style.float = "left";
      firstClick = event.target;
      event.target.appendChild(spanFrom);
      storage.startHour = new Date(CalendarUI.year, CalendarUI.month, CalendarUI.saveDay, CalendarUI.hour, CalendarUI.min);
      check++;
    }
  }
  event.preventDefault();
});

/**
 * Working on it :
 * 1) possibility to add event directly from main calendar
 * 2) Possibility to make a research for a date
 * 3) Propose an other date if already taken
 */
var addMeeting = document.querySelector('.add-event');
addMeeting.addEventListener('click', function (e) {
  if (createMeeting.verifyNavbar === false) {
    createMeeting.isset(createMeeting.getFormattedDate(new Date()), createMeeting.recaptcha);
    quill = new Quill('.quill', {
      theme: 'snow',
      placeholder: 'Add a description to your meeting'
    });
    issetInfo();
    var addInputHours = document.querySelector('.test');
    addInputHours.appendChild(meeting.createInputHours(new Date().getHours(), new Date().getMinutes()));
    addInputHours.appendChild(meeting.createInputHours(new Date().getHours() + 1, new Date().getMinutes(), true));
    // meeting.oneMeetingDay({"start": 0, "end" : 0});
  } else {
    createMeeting.reduce();
  }
  e.preventDefault();
});

back.addEventListener('click', function (e) {
  // Reset, take the property in CalendarMonth
  var main = document.querySelector('main');
  var calendarMonth = document.createElement('div');
  calendarMonth.className = "calendar-grid";
  calendarDay.CalendarGrid.innerHTML = "";
  main.appendChild(calendar);
  main.appendChild(CalendarUI.calendarGrid);
  CalendarUI.titleMonth();
  calendarDay.isset = false;
  calendarDay.CalendarGrid.remove();
  if (createMeeting.verifyNavbar === true) {
    createMeeting.reduce();
    createMeeting.verifyNavbar = false;
  }
  var firstDay = new Date(CalendarUI.year, CalendarUI.month, 0).getTime();
  var lastDay = new Date(CalendarUI.year, CalendarUI.month + 1, 0).getTime();
  storage.getMeeting(firstDay, lastDay);
  meeting.removeMeeting();
  back.style.visibility = "hidden";
  day = false;
  week = false;
  month = true;
});

function displayDay(saveDay) {

  CalendarUI.saveDay = saveDay;
  calendarDay.year = CalendarUI.year;
  calendarDay.displayCalendar(CalendarUI.saveDay, CalendarUI.month);
  var firstDay = new Date(CalendarUI.year, CalendarUI.month, CalendarUI.saveDay, 8).getTime();
  var lastDay = new Date(CalendarUI.year, CalendarUI.month, CalendarUI.saveDay, 22).getTime();
  storage.getMeeting(firstDay, lastDay);
  back.style.visibility = "visible";
}

function smoothScrollTo(endY) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 400;

  var startY = window.pageYOffset,
      distanceY = endY - startY,
      startTime = new Date().getTime();

  var easeInOut = function easeInOut(time, from, distance, duration) {
    if ((time /= duration / 2) < 1) {
      return distance / 2 * time * time * time * time + from;
    } else {
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    }
  };

  var timer = setInterval(function () {
    var time = new Date().getTime() - startTime,
        newY = easeInOut(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    scrollTo(0, newY);
  }, 1000 / 60);
}

function issetInfo() {
  document.querySelector('.card').addEventListener('click', function (e) {
    if (e.target.className === 'card__footer-cancel') {
      setTimeout(function () {
        createMeeting.reduce();
        if (calendarDay.isset === true) {
          calendarDay.CalendarGrid.innerHTML = "";
          displayDay(CalendarUI.saveDay);
        }
      }, 50);
    }

    if (e.target.className === 'card__footer-btn') {
      var tes = quill.getContents();
      var res = { "g-recaptcha-response": grecaptcha.getResponse() };
      storage.post("submit", res).then(function (response) {
        response = JSON.parse(response);
        if (response.responseCode === 0) {
          storage.addMeeting(createMeeting.validate(storage.startHour.getTime(), storage.endHour.getTime(), tes));
          createMeeting.reduce();
        } else {
          console.log('Captcha incorrect !');
        }
      });
      // storage.addMeeting(createMeeting.validate(tes));
      // createMeeting.reduce();
      if (calendarDay.isset === true) {
        calendarDay.CalendarGrid.innerHTML = "";
        displayDay(CalendarUI.saveDay);
      }
    }
  });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calendar = function () {
  function Calendar(month, year) {
    _classCallCheck(this, Calendar);

    this.month = month === undefined ? new Date().getMonth() : month;
    this.year = year === undefined ? new Date().getFullYear() : year;
    this.calendarGrid = document.querySelector('.calendar-grid');
    this.calendarTitle = document.querySelector('h1');
    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.min = 0;
    this.main = document.querySelector('main');
  }

  _createClass(Calendar, [{
    key: 'dayOfCalendar',
    value: function dayOfCalendar() {
      var _this = this;

      var month = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.month;
      var year = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.year;

      this.titleMonth();
      var firstDate = new Date(year, month, 0),
          lastDate = new Date(year, month + 1, 0),
          firstMonday = Calendar.getMonday(firstDate).getDate();
      var firstDateOfMonth = firstDate.getDate();
      var endOfPrevMonth = lastDate.getDate();
      var endOfCurrentMonth = 7 - lastDate.getDay();

      var allDate = [firstDateOfMonth, endOfPrevMonth, endOfCurrentMonth];
      var checkFirstMonth = false;
      allDate.forEach(function (date) {
        for (var i = checkFirstMonth === false ? firstMonday : 1; i <= date; i++) {
          _this.displayCalendar(i, date !== allDate[1] || checkFirstMonth === false ? 'fadeMonth' : 'cm' + _this.month);
          if (checkFirstMonth === true && i === new Date().getDate() && month === new Date().getMonth()) {
            document.querySelector('.cm' + _this.month + ' .day' + i).style.background = "#424242";
            document.querySelector('.cm' + _this.month + ' .day' + i).style.color = 'white';
            document.querySelector('.cm' + _this.month + ' .day' + i).parentElement.style.background = 'rgba(189,189,189,0.1)';
          }
        }
        checkFirstMonth = true;
      });
    }
  }, {
    key: 'displayCalendar',
    value: function displayCalendar(day, bm) {

      var createDay = document.createElement('div');
      createDay.className = 'calendar-grid-day ' + bm;
      var dayText = document.createElement('div');
      dayText.className = 'daytext day' + day;
      dayText.innerText = day;
      createDay.appendChild(dayText);

      this.calendarGrid.appendChild(createDay);
    }
  }, {
    key: 'removeCalendar',
    value: function removeCalendar() {
      document.querySelector('.calendar-grid').innerHTML = "";
    }
  }, {
    key: 'nextMonth',
    value: function nextMonth() {

      if (this.month < 11) {
        this.month++;
      } else {
        this.year++;
        this.month = 0;
      }
      this.removeCalendar();
      this.dayOfCalendar(this.month, this.year);
    }
  }, {
    key: 'prevMonth',
    value: function prevMonth() {

      if (this.month > 0) {
        this.month--;
      } else {
        this.year--;
        this.month = 11;
      }
      this.removeCalendar();
      this.dayOfCalendar(this.month, this.year);
    }
  }, {
    key: 'titleMonth',
    value: function titleMonth() {
      var _this2 = this;

      var h1 = document.querySelector('h1');
      setTimeout(function () {
        h1.innerText = "";
        h1.innerText = _this2.months[_this2.month] + ' ' + _this2.year;
      }, 50);
    }
  }], [{
    key: 'getMonday',
    value: function getMonday(d) {

      d = new Date(d);
      var day = d.getDay(),
          diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
      return new Date(d.setDate(diff));
    }
  }]);

  return Calendar;
}();

exports.default = Calendar;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CalendarDay = function () {
  function CalendarDay() {
    _classCallCheck(this, CalendarDay);

    this.main = document.querySelector('main');
    this.h1 = document.querySelector('h1');
    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.CalendarGrid = document.createElement('div');
    this.CalendarGrid.className = 'calendar-grid-hours';
    this.isset = false;
    this.year = new Date().getFullYear();
  }

  _createClass(CalendarDay, [{
    key: 'displayCalendar',
    value: function displayCalendar(day, month) {
      var _this = this;

      this.day = Number(day);
      this.month = month;
      setTimeout(function () {
        _this.main.innerHTML = '';
      }, 50);
      this.h1.style.animation = "100ms grid cubic-bezier(.25, .8, .25, 1)";
      setTimeout(function () {
        _this.h1.innerText = CalendarDay.ordinal_suffix_of(Number(day)) + ' ' + _this.months[month] + ' ' + _this.year;
      }, 100);

      for (var i = 8; i <= 22; i = i + 0.5) {
        var replaceDot = String(i).replace(/\./g, '-');
        var hours = document.createElement('div');
        hours.className = "hours";
        var hour = document.createElement('div');
        hour.className = "hour";
        var hourEvent = document.createElement('div');
        hourEvent.className = 'hour-event h' + replaceDot + ' d' + this.day;
        if (i % 1 === 0) {
          if (i < 12) {
            hour.innerText = i + 'am';
          } else {
            hour.innerText = i + 'pm';
          }
          hourEvent.style.borderTop = "1px solid rgba(189,189,189, 0.4)";
        }

        hours.appendChild(hour);
        hours.appendChild(hourEvent);
        this.CalendarGrid.appendChild(hours);
        document.querySelector('body').appendChild(this.CalendarGrid);
        this.isset = true;
      }
    }
  }, {
    key: 'nextDay',
    value: function nextDay() {

      var save = new Date(this.year, this.month + 1, 0);
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
  }, {
    key: 'prevDay',
    value: function prevDay() {
      if (this.day === 1) {

        if (this.month > 0) {
          this.month--;
        } else {
          this.year--;
          this.month = 11;
        }
        var save = new Date(this.year, this.month + 1, 0);
        this.day = save.getDate();
      } else {
        this.day--;
      }
      this.CalendarGrid.innerHTML = '';
      this.displayCalendar(this.day, this.month);
    }
  }], [{
    key: 'ordinal_suffix_of',
    value: function ordinal_suffix_of(i) {
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
  }]);

  return CalendarDay;
}();

exports.default = CalendarDay;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Meeting = __webpack_require__(0);

var _Meeting2 = _interopRequireDefault(_Meeting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var m = new _Meeting2.default();

var Storage = function () {
  function Storage() {
    _classCallCheck(this, Storage);
  }

  _createClass(Storage, [{
    key: 'get',
    value: function get(url) {
      return new Promise(function (resolve, reject) {
        fetch(url).then(function (res) {
          return res.json();
        }).then(function (data) {
          return resolve(data);
        }).catch(function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: 'post',
    value: function post(url, data) {
      return new Promise(function (resolve, reject) {
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          return resolve(data);
        }).catch(function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: 'put',
    value: function put(url, data) {
      return new Promise(function (resolve, reject) {
        fetch(url, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          return resolve(data);
        }).catch(function (err) {
          return reject(err);
        });
      });
    }

    // Delete

  }, {
    key: 'delete',
    value: function _delete(url, data) {
      return new Promise(function (resolve, reject) {
        fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json'
          }
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          return resolve('Deleted');
        }).catch(function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: 'getMeeting',
    value: function getMeeting(from, to) {
      // https://smartticoffice-functionapp.azurewebsites.net/api/getmeeting prod
      // https://crud-meetings.azurewebsites.net/api/getAll dev
      this.get('https://smartticoffice-functionapp.azurewebsites.net/api/getmeeting?start=' + from + '&end=' + to).then(function (response) {
        if (to - from < 136800000) {
          response.res.forEach(function (res) {
            var bg = ['rgba(0,176,255, 0', "rgba(0,230,118, 0", "rgba(255,202,40,0"];
            var color = bg[Math.floor(Math.random() * 3)];
            m.displayMeetingHours(res, color);
          });
        } else {
          response.res.forEach(function (res) {
            m.displayMeeting(res);
          });
        }
      }).catch(function (err) {
        return err;
      });
    }
  }, {
    key: 'addMeeting',
    value: function addMeeting(data) {

      this.http.post('https://crud-meetings.azurewebsites.net/api/add?code=JNI0lLs1H53Ug1PeEI33V50P8AVER5cTzaurqm0qI98d0Iulm0sSjw==', data).then(function (data) {
        return data;
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'updateMeeting',
    value: function updateMeeting(time, data) {

      this.http.put('https://crud-meetings.azurewebsites.net/api/add?code=JNI0lLs1H53Ug1PeEI33V50P8AVER5cTzaurqm0qI98d0Iulm0sSjw==', data).then(function (data) {
        return console.log(data);
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'deleteMeeting',
    value: function deleteMeeting(id) {
      this.http.delete('https://crud-meetings.azurewebsites.net/api/add?code=JNI0lLs1H53Ug1PeEI33V50P8AVER5cTzaurqm0qI98d0Iulm0sSjw==').then(function (data) {
        return console.log(data);
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }]);

  return Storage;
}();

exports.default = Storage;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import Storage from "../model/Storage";

// let storage = new Storage;

var AddMeeting = function () {
  function AddMeeting() {
    _classCallCheck(this, AddMeeting);

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

  _createClass(AddMeeting, [{
    key: 'isset',
    value: function isset(start, recaptcha) {
      this.body.style.background = "rgba(0,0,0,0.4)";
      this.info.innerHTML = '\n    <div class="card">\n      <div class="card__title">\n        <div class="card__title-center">\n          <form action="#" id="comment_form">\n            <div class="test">\n            <label for="date">\n            <input type="date" id="date" class="card__title-date" value="' + this.getFormattedDate(new Date(start)) + '">\n            </label>\n            </div>\n            <label for="name">\n              <i class="fas fa-chalkboard-teacher"></i>\n              <input type="text" name="" id="name" placeholder="Add a meeting name" class="day-text">\n            </label>\n            <label for="person">\n                <i class="fas fa-users"></i>\n              <input type="number" id="person" placeholder="How many persons ?" class="day-number">\n            </label>\n            <label for="email">\n                <i class="far fa-envelope"></i>\n                <input type="email" placeholder="john.smith@gmail.com" class="day-email">\n            </label>\n          </form>\n        </div>\n      </div>\n  \n      <div class="card__content">\n        <div class="card__content-primary">\n        </div>\n        <div class="card__content-secondary">\n          <div id="editor-container">\n            <div class="quill"></div>\n          </div>\n          <div class="hell"></div>\n        </div>\n      </div>\n      <div class="card__footer">\n          <div class="card__footer-btn">\n            SAVE\n          </div>\n          <div class="card__footer-cancel">\n            CANCEL\n          </div>\n      </div>\n    </div>';
      // <input type="submit" class="card__footer-btn" value="SAVE"/>
      //             <textarea placeholder="Add a description to your meeting..."></textarea>
      setTimeout(function () {
        recaptcha();
      }, 200);
    }
  }, {
    key: 'reduce',
    value: function reduce() {
      document.querySelector('.card').remove();
      this.body.style.background = "";
    }
  }, {
    key: 'validate',
    value: function validate(tes) {
      var name = document.querySelector('.day-text').value,
          number = document.querySelector('.day-number').value,
          email = document.querySelector('.day-email').value,
          timeInputs = document.querySelectorAll('select'),
          time = document.querySelector('#date');
      var value = time.value.split('-');
      var start = new Date(value[0], value[1] - 1, value[2], getHours(timeInputs[0], 1), getHours(timeInputs[0], 0)).getTime();
      var end = new Date(value[0], value[1] - 1, value[2], getHours(timeInputs[1], 1), getHours(timeInputs[1], 0)).getTime();
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      name = name.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
      re = re.test(String(email).toLowerCase());

      name = name.trim();
      var submit = {
        start: start,
        end: end,
        name: name,
        "persons": number,
        "desc": tes,
        email: email
      };

      function getHours(timeInput, checkHour) {
        if (checkHour === 1) {
          var hour = timeInput.value.split('h')[0];
          return hour;
        } else {
          var min = timeInput.value.split('h')[1];
          return min;
        }
      }

      return submit;
    }
  }, {
    key: 'verifyUI',
    value: function verifyUI(firstClick, lastClick) {
      firstClick = firstClick.split(' ')[1].replace('h', '').replace('-', '.');
      lastClick = lastClick.split(' ')[1].replace('h', '').replace('-', '.');
      for (var i = Number(firstClick); i <= Number(lastClick); i = i + 0.5) {
        var replaceDot = String(i).replace(/\./g, '-');
        var select = document.querySelector('.h' + replaceDot);
        if (select.style.borderLeftWidth === "2rem") {
          return false;
        }
      }
    }
  }, {
    key: 'getFormattedDate',
    value: function getFormattedDate(date) {
      var year = date.getFullYear();

      var month = (1 + date.getMonth()).toString();
      month = month.length > 1 ? month : '0' + month;

      var day = date.getDate().toString();
      day = day.length > 1 ? day : '0' + day;

      return year + '-' + month + '-' + day;
    }
  }, {
    key: 'recaptcha',
    value: function recaptcha() {
      var create = document.createElement('div');
      grecaptcha.render(create, {
        sitekey: "6LffHmkUAAAAAI2sB779g4mSv6HpOEy1ZXH0M_XF"
      });
      var dot = document.querySelector('.hell');
      dot.appendChild(create);
    }
  }]);

  return AddMeeting;
}();

exports.default = AddMeeting;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjM5MjYzYTVhMDVkYjBkNzg2ZjIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Z1ZS9NZWV0aW5nLmpzIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Fzcy9hcHAuc2FzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy92dWUvQ2FsZW5kYXJNb250aC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdnVlL0NhbGVuZGFyRGF5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2RlbC9TdG9yYWdlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy92dWUvQWRkTWVldGluZy5qcyJdLCJuYW1lcyI6WyJNZWV0aW5nIiwicmVzIiwiZGF5VGV4dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkRhdGUiLCJzdGFydCIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZW5kIiwibWludXRlc1N0YXJ0IiwiZ2V0TWludXRlcyIsIm1pbnV0ZXNFbmQiLCJwYXJlbnRFbGVtZW50IiwiY2hpbGRFbGVtZW50Q291bnQiLCJldmVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0aW1lT2ZFdmVudCIsInRpbWVUZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsImNsYXNzTmFtZSIsIm1lZXRpbmciLCJldmVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZXZlbnRNb3JlIiwiZm9yRWFjaCIsInJlbW92ZSIsImNvbG9yIiwic2VsZWN0VUkiLCJzdGFydGkiLCJlbmRpIiwiZmlyc3RUaW1lIiwiaSIsInJlcGxhY2VEb3QiLCJTdHJpbmciLCJyZXBsYWNlIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiYm9yZGVyTGVmdCIsImlubmVyVGV4dCIsIm51bWJlck9mcGVyc29uIiwidW5kZWZpbmVkIiwicm9vbSIsInNlbmQiLCJzZWxlY3QiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsImxlbmd0aCIsIm5hbWUiLCJpbmZvIiwiaW5uZXJIVE1MIiwidHh0IiwiY2FyZCIsImNyZWF0ZURpdiIsImNhcmRDb250ZW50IiwiY2FyZFByaW1hcnkiLCJoIiwibWluIiwiYm9vbCIsInBvcHVsYXRlSG91cnMiLCJiIiwib3B0aW9uIiwidGV4dENvbnRlbnQiLCJob3VyU2VsZWN0IiwiTWF0aCIsImZsb29yIiwidGltZSIsInZhbHVlIiwidHh0Q29udGVudCIsImNzcyIsImFwcGVuZFJpZ2h0IiwiQ2FsZW5kYXJVSSIsIkNhbGVuZGFyIiwiY2FsZW5kYXJEYXkiLCJDYWxlbmRhckRheSIsInN0b3JhZ2UiLCJTdG9yYWdlIiwiY3JlYXRlTWVldGluZyIsIkFkZE1lZXRpbmciLCJjaGVjayIsImZpcnN0Q2xpY2siLCJxdWlsbCIsImRheSIsIndlZWsiLCJtb250aCIsImRheXMiLCJjYWxlbmRhciIsImNhbGVuZGFyR3JpZCIsImRheU9mQ2FsZW5kYXIiLCJmaXJzdERheSIsInllYXIiLCJnZXRUaW1lIiwibGFzdERheSIsImdldE1lZXRpbmciLCJwcmV2TW9udGgiLCJuZXh0TW9udGgiLCJiYWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJpc3NldCIsInByZXZEYXkiLCJwcmV2ZW50RGVmYXVsdCIsIm5leHREYXkiLCJ0YXJnZXQiLCJkaXNwbGF5RGF5IiwiQ2FsZW5kYXJHcmlkIiwic3BsaXQiLCJib3JkZXJMZWZ0V2lkdGgiLCJyYW5kIiwicmFuZG9tIiwiaG91ciIsInBhcnNlRmxvYXQiLCJzdGFydEhvdXIiLCJsYXN0Q2xpY2siLCJ2ZXJpZnlVSSIsImVuZEhvdXIiLCJzYXZlRGF5Iiwic21vb3RoU2Nyb2xsVG8iLCJvZmZzZXRUb3AiLCJkaXNwbGF5TWVldGluZ0hvdXJzIiwicmVjYXB0Y2hhIiwiaXNzZXRJbmZvIiwiUXVpbGwiLCJ0aGVtZSIsInBsYWNlaG9sZGVyIiwiYWRkSW5wdXRIb3VycyIsImNyZWF0ZUlucHV0SG91cnMiLCJzcGFuRnJvbSIsImZsb2F0IiwiYWRkTWVldGluZyIsInZlcmlmeU5hdmJhciIsImdldEZvcm1hdHRlZERhdGUiLCJyZWR1Y2UiLCJtYWluIiwiY2FsZW5kYXJNb250aCIsInRpdGxlTW9udGgiLCJyZW1vdmVNZWV0aW5nIiwidmlzaWJpbGl0eSIsImRpc3BsYXlDYWxlbmRhciIsImVuZFkiLCJkdXJhdGlvbiIsInN0YXJ0WSIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiZGlzdGFuY2VZIiwic3RhcnRUaW1lIiwiZWFzZUluT3V0IiwiZnJvbSIsImRpc3RhbmNlIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsIm5ld1kiLCJjbGVhckludGVydmFsIiwic2Nyb2xsVG8iLCJzZXRUaW1lb3V0IiwidGVzIiwiZ2V0Q29udGVudHMiLCJncmVjYXB0Y2hhIiwiZ2V0UmVzcG9uc2UiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VDb2RlIiwidmFsaWRhdGUiLCJjb25zb2xlIiwibG9nIiwiZ2V0RnVsbFllYXIiLCJjYWxlbmRhclRpdGxlIiwibW9udGhzIiwiZmlyc3REYXRlIiwibGFzdERhdGUiLCJmaXJzdE1vbmRheSIsImdldE1vbmRheSIsImZpcnN0RGF0ZU9mTW9udGgiLCJlbmRPZlByZXZNb250aCIsImVuZE9mQ3VycmVudE1vbnRoIiwiZ2V0RGF5IiwiYWxsRGF0ZSIsImNoZWNrRmlyc3RNb250aCIsImRhdGUiLCJibSIsImNyZWF0ZURheSIsInJlbW92ZUNhbGVuZGFyIiwiaDEiLCJkIiwiZGlmZiIsInNldERhdGUiLCJOdW1iZXIiLCJhbmltYXRpb24iLCJvcmRpbmFsX3N1ZmZpeF9vZiIsImhvdXJzIiwiaG91ckV2ZW50IiwiYm9yZGVyVG9wIiwic2F2ZSIsImoiLCJrIiwibSIsInVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZmV0Y2giLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJzdHJpbmdpZnkiLCJ0byIsImdldCIsImJnIiwiZGlzcGxheU1lZXRpbmciLCJodHRwIiwicHV0IiwiaWQiLCJkZWxldGUiLCJuYXZiYXIiLCJoZWFkZXIiLCJidG4iLCJsb2dpbiIsInNpZ24iLCJhZGQiLCJudW1iZXIiLCJlbWFpbCIsInRpbWVJbnB1dHMiLCJyZSIsInRlc3QiLCJ0b0xvd2VyQ2FzZSIsInRyaW0iLCJzdWJtaXQiLCJ0aW1lSW5wdXQiLCJjaGVja0hvdXIiLCJ0b1N0cmluZyIsImNyZWF0ZSIsInJlbmRlciIsInNpdGVrZXkiLCJkb3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDN0RxQkEsTzs7Ozs7OzttQ0FFSkMsRyxFQUFLO0FBQ2xCLFVBQU1DLFVBQVVDLFNBQVNDLGFBQVQsU0FBNkIsSUFBSUMsSUFBSixDQUFTSixJQUFJSyxLQUFiLEVBQW9CQyxRQUFwQixFQUE3QixhQUFtRSxJQUFJRixJQUFKLENBQVNKLElBQUlLLEtBQWIsRUFBb0JFLE9BQXBCLEVBQW5FLENBQWhCO0FBQ0EsVUFBSUYsUUFBUSxJQUFJRCxJQUFKLENBQVNKLElBQUlLLEtBQWIsRUFBb0JHLFFBQXBCLEVBQVo7QUFDQSxVQUFJQyxNQUFNLElBQUlMLElBQUosQ0FBU0osSUFBSVMsR0FBYixFQUFrQkQs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QXJDLEVBQTZDO0FBQzNDLGlCQUFPLEtBQVA7QUFDRDtBQUNGO0FBQ0Y7OztxQ0FFZ0IwRSxJLEVBQU07QUFDckIsVUFBSTNGLE9BQU8yRixLQUFLYixXQUFMLEVBQVg7O0FBRUEsVUFBSXBGLFFBQVEsQ0FBQyxJQUFJaUcsS0FBS2pMLFFBQUwsRUFBTCxFQUFzQndPLFFBQXRCLEVBQVo7QUFDQXhKLGNBQVFBLE1BQU1yQyxNQUFOLEdBQWUsQ0FBZixHQUFtQnFDLEtBQW5CLEdBQTJCLE1BQU1BLEtBQXpDOztBQUVBLFVBQUlGLE1BQU1tRyxLQUFLaEwsT0FBTCxHQUFldU8sUUFBZixFQUFWO0FBQ0ExSixZQUFNQSxJQUFJbkMsTUFBSixHQUFhLENBQWIsR0FBaUJtQyxHQUFqQixHQUF1QixNQUFNQSxHQUFuQzs7QUFFQSxhQUFPUSxPQUFPLEdBQVAsR0FBYU4sS0FBYixHQUFxQixHQUFyQixHQUEyQkYsR0FBbEM7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBSTJKLFNBQVM3TyxTQUFTYyxhQUFULENBQXVCLEtBQXZCLENBQWI7QUFDQStJLGlCQUFXaUYsTUFBWCxDQUFrQkQsTUFBbEIsRUFBMEI7QUFDeEJFLGlCQUFVO0FBRGMsT0FBMUI7QUFHQSxVQUFJQyxNQUFNaFAsU0FBU0MsYUFBVCxDQUF1QixPQUF2QixDQUFWO0FBQ0ErTyxVQUFJOU4sV0FBSixDQUFnQjJOLE1BQWhCO0FBQ0Q7Ozs7OztrQkE3SWtCL0osVSIsImZpbGUiOiIuL2Fzc2V0cy9qcy9hcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjM5MjYzYTVhMDVkYjBkNzg2ZjIiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZWV0aW5nIHtcclxuXHJcbiAgZGlzcGxheU1lZXRpbmcocmVzKSB7XHJcbiAgICBjb25zdCBkYXlUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNtJHtuZXcgRGF0ZShyZXMuc3RhcnQpLmdldE1vbnRoKCl9IC5kYXkke25ldyBEYXRlKHJlcy5zdGFydCkuZ2V0RGF0ZSgpfWApO1xyXG4gICAgbGV0IHN0YXJ0ID0gbmV3IERhdGUocmVzLnN0YXJ0KS5nZXRIb3VycygpO1xyXG4gICAgbGV0IGVuZCA9IG5ldyBEYXRlKHJlcy5lbmQpLmdldEhvdXJzKCk7XHJcbiAgICBsZXQgbWludXRlc1N0YXJ0ID0gbmV3IERhdGUocmVzLnN0YXJ0KS5nZXRNaW51dGVzKCk7XHJcbiAgICBsZXQgbWludXRlc0VuZCA9IG5ldyBEYXRlKHJlcy5lbmQpLmdldE1pbnV0ZXMoKTtcclxuICAgIGlmIChkYXlUZXh0LnBhcmVudEVsZW1lbnQuY2hpbGRFbGVtZW50Q291bnQgPCAzKSB7XHJcbiAgICAgIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNvbnN0IHRpbWVPZkV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBcclxuICAgICAgaWYgKG1pbnV0ZXNFbmQgPT09IDMwKSB7XHJcbiAgICAgICAgbWludXRlc0VuZCA9IDA7XHJcbiAgICAgICAgZW5kKys7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWludXRlc0VuZCA9IDMwO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHRpbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7c3RhcnQgKyAobWludXRlc1N0YXJ0ID09PSAwID8gXCJoXCIgOiAnaCcgKyBtaW51dGVzU3RhcnQpfSAgLSAke2VuZCArIChtaW51dGVzRW5kID09PSAwID8gXCJoXCIgOiAnaCcgKyBtaW51dGVzRW5kKX1gKTtcclxuICAgICAgdGltZU9mRXZlbnQuYXBwZW5kQ2hpbGQodGltZVRleHQpO1xyXG4gICAgICB0aW1lT2ZFdmVudC5jbGFzc05hbWUgPSAndGltZSc7XHJcbiAgICAgIGV2ZW50LmNsYXNzTmFtZSA9IFwiZXZlbnRcIjtcclxuICAgICAgbGV0IG1lZXRpbmcgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnTWVldGluZycpO1xyXG4gICAgICBldmVudC5hcHBlbmRDaGlsZCh0aW1lT2ZFdmVudCk7XHJcbiAgICAgIGV2ZW50LmFwcGVuZENoaWxkKG1lZXRpbmcpO1xyXG4gICAgICBkYXlUZXh0LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZXZlbnQpO1xyXG4gICAgfSBlbHNlIGlmIChkYXlUZXh0LnBhcmVudEVsZW1lbnQuY2hpbGRFbGVtZW50Q291bnQgPT09IDMpIHtcclxuICAgICAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgY29uc3QgdGltZU9mRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHRpbWVPZkV2ZW50LmNsYXNzTmFtZSA9ICd0aW1lJztcclxuICAgICAgZXZlbnQuY2xhc3NOYW1lID0gXCJldmVudF9tb3JlXCI7XHJcbiAgICAgIGxldCBtZWV0aW5nID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJy4uLicpO1xyXG4gICAgICBldmVudC5hcHBlbmRDaGlsZCh0aW1lT2ZFdmVudCk7XHJcbiAgICAgIGV2ZW50LmFwcGVuZENoaWxkKG1lZXRpbmcpO1xyXG4gICAgICBkYXlUZXh0LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlTWVldGluZygpIHtcclxuICAgIGxldCBldmVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXZlbnQnKTtcclxuICAgIGxldCBldmVudE1vcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXZlbnRfbW9yZScpO1xyXG4gICAgZXZlbnRNb3JlLmZvckVhY2goZXZlbnQgPT4gZXZlbnQucmVtb3ZlKCkpO1xyXG4gICAgZXZlbnRzLmZvckVhY2goZXZlbnQgPT4gZXZlbnQucmVtb3ZlKCkpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheU1lZXRpbmdIb3VycyhyZXMsIGNvbG9yKSB7XHJcbiAgICBsZXQgc2VsZWN0VUk7XHJcbiAgICBsZXQgc3RhcnQgPSBuZXcgRGF0ZShyZXMuc3RhcnQpLmdldEhvdXJzKCk7XHJcbiAgICBsZXQgZW5kID0gbmV3IERhdGUocmVzLmVuZCkuZ2V0SG91cnMoKTtcclxuICAgIGxldCBtaW51dGVzU3RhcnQgPSBuZXcgRGF0ZShyZXMuc3RhcnQpLmdldE1pbnV0ZXMoKTtcclxuICAgIGxldCBtaW51dGVzRW5kID0gbmV3IERhdGUocmVzLmVuZCkuZ2V0TWludXRlcygpO1xyXG4gICAgbGV0IHN0YXJ0aSA9IG1pbnV0ZXNTdGFydCA9PT0gMzAgPyBzdGFydCArIDAuNSA6IHN0YXJ0O1xyXG4gICAgbGV0IGVuZGkgPSBtaW51dGVzRW5kID09PSAzMCA/IGVuZCArIDAuNSA6IGVuZDtcclxuICAgIGxldCBmaXJzdFRpbWUgPSAxO1xyXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0aTsgaSA8PSBlbmRpOyBpID0gaSArIDAuNSkge1xyXG4gICAgICBsZXQgcmVwbGFjZURvdCA9IFN0cmluZyhpKS5yZXBsYWNlKC9cXC4vZywnLScpO1xyXG4gICAgICBpZiAoaSAlIDIgPT09IDApIHtcclxuICAgICAgICBzZWxlY3RVSSA9IGAuaCR7aX1gO1xyXG4gICAgICB9XHJcbiAgICAgIHNlbGVjdFVJID0gYC5oJHtyZXBsYWNlRG90fWA7XHJcbiAgICAgIHNlbGVjdFVJID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RVSSArIGAuZCR7bmV3IERhdGUocmVzLnN0YXJ0KS5nZXREYXRlKCl9YCk7XHJcbiAgICAgIHNlbGVjdFVJLnN0eWxlLmJhY2tncm91bmQgPSBjb2xvciArIFwiLjMpXCI7XHJcbiAgICAgIHNlbGVjdFVJLnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xyXG4gICAgICBzZWxlY3RVSS5zdHlsZS5ib3JkZXJMZWZ0ID0gXCIycmVtIHNvbGlkIFwiICsgY29sb3IgKyBcIi42KVwiO1xyXG4gICAgICBpZiAoZmlyc3RUaW1lID09PSAxKSB7XHJcbiAgICAgICAgc2VsZWN0VUkuaW5uZXJUZXh0ID0gYE1lZXRpbmcgJHtyZXMubnVtYmVyT2ZwZXJzb24gPT09IHVuZGVmaW5lZCB8fCByZXMubnVtYmVyT2ZwZXJzb24gPT0gMCA/IFwiXCIgOiBcIiAtICBcIiArIHJlcy5udW1iZXJPZnBlcnNvbiArIFwiIHBlcnNvbnMgLSBcIiArIHJlcy5yb29tICsgXCIgcm9vbVwifWA7XHJcbiAgICAgICAgZmlyc3RUaW1lKys7XHJcbiAgICAgIH0gZWxzZSBpZiAoZmlyc3RUaW1lID09PSAyKSB7XHJcbiAgICAgICAgaWYgKG1pbnV0ZXNFbmQgPT09IDMwKSB7XHJcbiAgICAgICAgICBtaW51dGVzRW5kID0gMDtcclxuICAgICAgICAgIGVuZCsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBtaW51dGVzRW5kID0gMzA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGVjdFVJLmlubmVyVGV4dCA9IGAke3N0YXJ0ICsgKG1pbnV0ZXNTdGFydCA9PT0gMCA/IFwiaFwiIDogJ2gnICsgbWludXRlc1N0YXJ0KX0gIC0gJHtlbmQgKyAobWludXRlc0VuZCA9PT0gMCA/IFwiaFwiIDogJ2gnICsgbWludXRlc0VuZCl9YDtcclxuICAgICAgICBmaXJzdFRpbWUrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbW9udGgoc2VuZCwgc2VsZWN0KSB7XHJcbiAgICAgIGlmIChzZWxlY3QucGFyZW50Tm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA8PSAzKSB7XHJcbiAgICAgIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNvbnN0IHRpbWVPZkV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBjb25zdCB0aW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5ldyBEYXRlKHNlbmQuc3RhcnQpLmdldEhvdXJzKCkgKyAnaCcpO1xyXG4gICAgICB0aW1lT2ZFdmVudC5hcHBlbmRDaGlsZCh0aW1lVGV4dCk7XHJcbiAgICAgIHRpbWVPZkV2ZW50LmNsYXNzTmFtZSA9ICd0aW1lJztcclxuICAgICAgZXZlbnQuY2xhc3NOYW1lID0gXCJldmVudFwiO1xyXG4gICAgICBsZXQgbWVldGluZyA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHNlbmQubmFtZSk7XHJcbiAgICAgIGV2ZW50LmFwcGVuZENoaWxkKHRpbWVPZkV2ZW50KTtcclxuICAgICAgZXZlbnQuYXBwZW5kQ2hpbGQobWVldGluZyk7XHJcbiAgICAgIHNlbGVjdC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGV2ZW50KTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgb25lTWVldGluZygpIHtcclxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIik7XHJcbiAgICBpZiAoIGluZm8uY2hpbGROb2Rlcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgaW5mby5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuICAgIGxldCB0eHQgPSBcIk1lZXRpbmcgd2l0aC4uXCI7XHJcbiAgICBsZXQgY2FyZCA9IE1lZXRpbmcuY3JlYXRlRGl2KHVuZGVmaW5lZCwgXCJjYXJkXCIpO1xyXG4gICAgbGV0IGNhcmRDb250ZW50ID0gTWVldGluZy5jcmVhdGVEaXYodW5kZWZpbmVkLCBcImNhcmRfX2NvbnRlbnRcIik7XHJcbiAgICBsZXQgY2FyZFByaW1hcnkgPSBNZWV0aW5nLmNyZWF0ZURpdih0eHQsIFwiY2FyZF9fY29udGVudC1wcmltYXJ5XCIpO1xyXG4gICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZFByaW1hcnkpO1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQ29udGVudCk7XHJcbiAgICBpbmZvLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gIH1cclxuXHJcblxyXG4gIHN0YXRpYyBjcmVhdGVEaXYodHh0Q29udGVudCA9IFwiXCIsIGNzcykge1xyXG4gICAgbGV0IGFwcGVuZFJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhcHBlbmRSaWdodC5jbGFzc05hbWUgPSBjc3M7XHJcbiAgICBhcHBlbmRSaWdodC5pbm5lclRleHQgPSB0eHRDb250ZW50O1xyXG4gICAgcmV0dXJuIGFwcGVuZFJpZ2h0O1xyXG4gIH1cclxuICBcclxuICBjcmVhdGVJbnB1dEhvdXJzKGgsIG1pbiwgYm9vbCA9IGZhbHNlKSB7XHJcbiAgZnVuY3Rpb24gcG9wdWxhdGVIb3VycyhiKSB7XHJcbiAgICBmb3IodmFyIGkgPSA4OyBpIDw9IDIyOyBpID0gaSArIDAuNSkge1xyXG4gICAgICBpZiAoaSAlIDEgPT09IDApIHtcclxuICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gaSArIFwiaFwiO1xyXG4gICAgICAgIGhvdXJTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gTWF0aC5mbG9vcihpKSArIFwiaFwiICsgXCIzMFwiO1xyXG4gICAgICAgIGhvdXJTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGV0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgaWYgKGJvb2wgPT09IHRydWUpIHtcclxuICAgIHRpbWUuaW5uZXJUZXh0ID0gJyB0byAnO1xyXG4gIH1cclxuICBsZXQgaG91clNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gIGhvdXJTZWxlY3QuY2xhc3NOYW1lID0gXCJ0aW1lX19pbnB1dC1ob3Vyc1wiO1xyXG4gIHRpbWUuY2xhc3NOYW1lID0gXCJ0aW1lX19pbnB1dFwiO1xyXG5cclxuICBwb3B1bGF0ZUhvdXJzKGJvb2wpO1xyXG4gIHRpbWUuYXBwZW5kQ2hpbGQoaG91clNlbGVjdCk7XHJcbiAgaG91clNlbGVjdC52YWx1ZSA9IChtaW4gPT09IDMwID8gaCArIFwiaFwiICsgbWluIDogaCArIFwiaFwiKTtcclxuICByZXR1cm4gdGltZTtcclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdnVlL01lZXRpbmcuanMiLCJpbXBvcnQgJy4vYXNzZXRzL3Nhc3MvYXBwLnNhc3MnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL2pzL2FwcC5qcyc7XHJcblxyXG4vLyBUT0RPXHJcbi8vIGNsaWNrIHN0YXJ0IGNsaWNrIGVuZCAtPiBzY29wZSAtPiBtb2RhbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc2Fzcy9hcHAuc2Fzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi92dWUvQ2FsZW5kYXJNb250aCc7XHJcbmltcG9ydCBDYWxlbmRhckRheSBmcm9tICcuL3Z1ZS9DYWxlbmRhckRheSc7XHJcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vbW9kZWwvU3RvcmFnZSc7XHJcbmltcG9ydCBNZWV0aW5nIGZyb20gJy4vdnVlL01lZXRpbmcnO1xyXG5pbXBvcnQgQWRkTWVldGluZyBmcm9tICcuL3Z1ZS9BZGRNZWV0aW5nJztcclxuXHJcbi8vIEluaXQgY2xhc3MgXHJcbi8qKlxyXG4gKiBDYWxlbmRhclVJID0+IG1haW4gY2FsZW5kYXJcclxuICogQ2FsZW5kYXJEYXkgPT4gd2Vla2x5XHJcbiAqIFN0b3JhZ2UgPT4gZmV0Y2ggZGF0YSBmcm9tIEFQSVxyXG4gKiBDcmVhdGVNZWV0aW5nICYgTWVldGluZyA9PiBEaXNwbGF5IGRhdGEgYW5kIGFkZCB0aGVtXHJcbiAqL1xyXG5jb25zdCBDYWxlbmRhclVJID0gbmV3IENhbGVuZGFyO1xyXG5sZXQgY2FsZW5kYXJEYXkgPSBuZXcgQ2FsZW5kYXJEYXk7XHJcbmxldCBzdG9yYWdlID0gbmV3IFN0b3JhZ2U7XHJcbmxldCBtZWV0aW5nID0gbmV3IE1lZXRpbmc7XHJcbmxldCBjcmVhdGVNZWV0aW5nID0gbmV3IEFkZE1lZXRpbmc7XHJcbmxldCBjaGVjayA9IDE7XHJcbmxldCBmaXJzdENsaWNrO1xyXG5sZXQgcXVpbGw7XHJcbmxldCBkYXkgPSBmYWxzZSxcclxud2VlayA9IGZhbHNlLFxyXG5tb250aCA9IHRydWU7XHJcblxyXG4vLyBkaXNwbGF5IGRheSBmb3IgdGhlIG1haW4gY2FsZW5kYXIgKyBDYWxlbmRhckdyaWQgPT4gbWFpbiBjYWxlbmRhclxyXG5jb25zdCBkYXlzID0gWydNb24nLCdUdWUnLCdXZWQnLCdUaHUnLCdGcmknLCdTYXQnLCdTdW4nXTtcclxuY29uc3QgY2FsZW5kYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsZW5kYXItZGF5cycpO1xyXG5jb25zdCBjYWxlbmRhckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsZW5kYXItZ3JpZCcpO1xyXG5kYXlzLmZvckVhY2goIChkYXkpID0+IHtcclxuICBsZXQgY2FsZW5kYXJEYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYWxlbmRhckRheS5jbGFzc05hbWUgPSBcImNhbGVuZGFyLWRheVwiO1xyXG4gIGNhbGVuZGFyRGF5LmlubmVyVGV4dCA9IGRheTtcclxuICBjYWxlbmRhci5hcHBlbmRDaGlsZChjYWxlbmRhckRheSk7XHJcbn0pO1xyXG5cclxuQ2FsZW5kYXJVSS5kYXlPZkNhbGVuZGFyKCk7XHJcbmxldCBmaXJzdERheSA9IG5ldyBEYXRlKENhbGVuZGFyVUkueWVhciwgQ2FsZW5kYXJVSS5tb250aCwgMCkuZ2V0VGltZSgpO1xyXG5sZXQgbGFzdERheSA9IG5ldyBEYXRlKENhbGVuZGFyVUkueWVhciwgQ2FsZW5kYXJVSS5tb250aCsxLCAwKS5nZXRUaW1lKCk7XHJcbnN0b3JhZ2UuZ2V0TWVldGluZyhmaXJzdERheSwgbGFzdERheSk7XHJcblxyXG5cclxuY29uc3QgcHJldk1vbnRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXZpb3VzLS1tb250aCcpO1xyXG5jb25zdCBuZXh0TW9udGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dC0tbW9udGgnKTtcclxuY29uc3QgYmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb250aC1iYWNrJyk7XHJcblxyXG5wcmV2TW9udGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIC8vIGNhbGVuZGFyRGF5Lmlzc2V0ID0+IGlzIGl0IG1vbnRobHkgb3Igd2Vla2x5ID8gdHJ1ZSBpZiB3ZWVrbHksIGZhbHNlIGlmIG1vbnRobHkuXHJcbiAgaWYoIGNhbGVuZGFyRGF5Lmlzc2V0ID09PSB0cnVlICkge1xyXG4gICAgY2FsZW5kYXJEYXkucHJldkRheSgpO1xyXG4gICAgbGV0IGZpcnN0RGF5ID0gbmV3IERhdGUoQ2FsZW5kYXJVSS55ZWFyLCBjYWxlbmRhckRheS5tb250aCwgY2FsZW5kYXJEYXkuZGF5LCA4KS5nZXRUaW1lKCk7XHJcbiAgICBsZXQgbGFzdERheSA9IG5ldyBEYXRlKENhbGVuZGFyVUkueWVhciwgY2FsZW5kYXJEYXkubW9udGgsIGNhbGVuZGFyRGF5LmRheSwgMjIpLmdldFRpbWUoKTtcclxuICAgIHN0b3JhZ2UuZ2V0TWVldGluZyhmaXJzdERheSwgbGFzdERheSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIENhbGVuZGFyVUkucHJldk1vbnRoKCk7XHJcbiAgICBsZXQgZmlyc3REYXkgPSBuZXcgRGF0ZShDYWxlbmRhclVJLnllYXIsIENhbGVuZGFyVUkubW9udGgsIDAsIDgpLmdldFRpbWUoKTtcclxuICAgIGxldCBsYXN0RGF5ID0gbmV3IERhdGUoQ2FsZW5kYXJVSS55ZWFyLCBDYWxlbmRhclVJLm1vbnRoKzEsIDAsIDIzKS5nZXRUaW1lKCk7XHJcbiAgICBzdG9yYWdlLmdldE1lZXRpbmcoZmlyc3REYXksIGxhc3REYXkpO1xyXG4gIH1cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxubmV4dE1vbnRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHJcbiAgaWYoIGNhbGVuZGFyRGF5Lmlzc2V0ID09PSB0cnVlICkge1xyXG4gICAgY2FsZW5kYXJEYXkubmV4dERheSgpO1xyXG4gICAgbGV0IGZpcnN0RGF5ID0gbmV3IERhdGUoQ2FsZW5kYXJVSS55ZWFyLCBjYWxlbmRhckRheS5tb250aCwgY2FsZW5kYXJEYXkuZGF5LCA4KS5nZXRUaW1lKCk7XHJcbiAgICBsZXQgbGFzdERheSA9IG5ldyBEYXRlKENhbGVuZGFyVUkueWVhciwgY2FsZW5kYXJEYXkubW9udGgsIGNhbGVuZGFyRGF5LmRheSwgMjIpLmdldFRpbWUoKTtcclxuICAgIHN0b3JhZ2UuZ2V0TWVldGluZyhmaXJzdERheSwgbGFzdERheSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIENhbGVuZGFyVUkubmV4dE1vbnRoKCk7XHJcbiAgICBsZXQgZmlyc3REYXkgPSBuZXcgRGF0ZShDYWxlbmRhclVJLnllYXIsIENhbGVuZGFyVUkubW9udGgsIDEsIDgpLmdldFRpbWUoKTtcclxuICAgIGxldCBsYXN0RGF5ID0gbmV3IERhdGUoQ2FsZW5kYXJVSS55ZWFyLCBDYWxlbmRhclVJLm1vbnRoKzEsIDAsIDIzKS5nZXRUaW1lKCk7XHJcbiAgICBzdG9yYWdlLmdldE1lZXRpbmcoZmlyc3REYXksIGxhc3REYXkpO1xyXG4gIH1cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcbi8vIGRpc3BsYXkgd2Vla2x5IGNhbGVuZGFyIFxyXG5jYWxlbmRhckdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gYGNhbGVuZGFyLWdyaWQtZGF5IGNtJHtDYWxlbmRhclVJLm1vbnRofWApIHtcclxuICAgIGRpc3BsYXlEYXkoZXZlbnQudGFyZ2V0LmNoaWxkTm9kZXNbMF0uaW5uZXJUZXh0KTtcclxuICB9XHJcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdldmVudCcgfHwgZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2V2ZW50X21vcmUnICkge1xyXG4gICAgZGlzcGxheURheShldmVudC50YXJnZXQucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzBdLmlubmVyVGV4dClcclxuICB9XHJcblxyXG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAndGltZScpIHtcclxuICAgIGRpc3BsYXlEYXkoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzBdLmlubmVyVGV4dCk7XHJcbiAgfVxyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuLy8gVUkgc2VsZWN0b3IgZm9yIGhvdXJzID0+IGZyb20gLSB0bywgdGhlbiBjYWxsIHN0b3JhZ2UgdG8gY3JlYXRlIHRoZSBldmVudFxyXG5jYWxlbmRhckRheS5DYWxlbmRhckdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAvLyBDaGVjayB0aGUgaG91cnMsIHRyYW5zbGF0ZSBpdCBmb3IgdGhlIEFQSVxyXG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKVswXSA9PT0gXCJob3VyLWV2ZW50XCIgJiYgZXZlbnQudGFyZ2V0LnN0eWxlLmJvcmRlckxlZnRXaWR0aCA9PT0gXCJcIikge1xyXG4gICAgbGV0IGJhY2tncm91bmQgPSBbJ3JnYmEoMCwxNzYsMjU1LCAwJywgXCJyZ2JhKDAsMjMwLDExOCwgMFwiLCBcInJnYmEoMjU1LDIwMiw0MCwwXCJdO1xyXG4gICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMykpO1xyXG4gICAgbGV0IGNvbG9yID0gYmFja2dyb3VuZFtyYW5kXTtcclxuICAgIGV2ZW50LnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDAsMTc2LDI1NSwwLjMpXCI7XHJcbiAgICBsZXQgaG91ciA9IGV2ZW50LnRhcmdldC5jbGFzc05hbWUuc3BsaXQoXCIgXCIpWzFdLnNwbGl0KFwiaFwiKVsxXTtcclxuICAgIENhbGVuZGFyVUkuaG91ciA9IGhvdXIuc3BsaXQoJy0nKVswXTtcclxuICAgIGlmIChob3VyLnNwbGl0KFwiLVwiKVsxXSA9PT0gXCI1XCIpIHtcclxuICAgICAgaG91ciA9IHBhcnNlRmxvYXQoaG91cikgKyBcIjozMFwiO1xyXG4gICAgICBDYWxlbmRhclVJLm1pbiA9IDMwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgQ2FsZW5kYXJVSS5taW4gPSAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoc3RvcmFnZS5zdGFydEhvdXIgIT09IHVuZGVmaW5lZCAmJiBjaGVjayA9PT0gMikge1xyXG4gICAgICBsZXQgbGFzdENsaWNrID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICBpZiAoY3JlYXRlTWVldGluZy52ZXJpZnlVSShmaXJzdENsaWNrLmNsYXNzTmFtZSwgbGFzdENsaWNrLmNsYXNzTmFtZSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgY2hlY2sgPSAxO1xyXG4gICAgICAgIGZpcnN0Q2xpY2suc3R5bGUuYmFja2dyb3VuZCA9IFwid2hpdGVcIjtcclxuICAgICAgICBsYXN0Q2xpY2suc3R5bGUuYmFja2dyb3VuZCA9IFwid2hpdGVcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdG9yYWdlLmVuZEhvdXIgPSBuZXcgRGF0ZShDYWxlbmRhclVJLnllYXIsIENhbGVuZGFyVUkubW9udGgsIENhbGVuZGFyVUkuc2F2ZURheSwgQ2FsZW5kYXJVSS5ob3VyLCBDYWxlbmRhclVJLm1pbik7XHJcbiAgICAgICAgbGV0IHJlcyA9IHtcclxuICAgICAgICAgIHN0YXJ0IDogbmV3IERhdGUoc3RvcmFnZS5zdGFydEhvdXIpLmdldFRpbWUoKSxcclxuICAgICAgICAgIGVuZCA6IG5ldyBEYXRlKHN0b3JhZ2UuZW5kSG91cikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgbmFtZSA6IFwiTmV3IG1lZXRpbmdcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc21vb3RoU2Nyb2xsVG8oKGZpcnN0Q2xpY2sub2Zmc2V0VG9wIC0gODApLCAzNTApO1xyXG4gICAgICAgIG1lZXRpbmcuZGlzcGxheU1lZXRpbmdIb3VycyhyZXMsIGNvbG9yKTtcclxuICAgICAgICByZXMuZW5kID0gcmVzLmVuZCArIDE4MDAwMDA7XHJcbiAgICAgICAgLy8gbWVldGluZy5vbmVNZWV0aW5nRGF5KHJlcyk7XHJcbiAgICAgICAgY3JlYXRlTWVldGluZy5pc3NldChyZXMuc3RhcnQsIGNyZWF0ZU1lZXRpbmcucmVjYXB0Y2hhKTtcclxuICAgICAgICBpc3NldEluZm8oKTtcclxuICAgICAgICBxdWlsbCA9IG5ldyBRdWlsbCgnLnF1aWxsJywge1xyXG4gICAgICAgICAgdGhlbWU6ICdzbm93JyxcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnQWRkIGEgZGVzY3JpcHRpb24gdG8geW91ciBtZWV0aW5nJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBhZGRJbnB1dEhvdXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlc3QnKTtcclxuICAgICAgICBhZGRJbnB1dEhvdXJzLmFwcGVuZENoaWxkKG1lZXRpbmcuY3JlYXRlSW5wdXRIb3VycyhuZXcgRGF0ZShyZXMuc3RhcnQpLmdldEhvdXJzKCksIG5ldyBEYXRlKHJlcy5zdGFydCkuZ2V0TWludXRlcygpKSk7XHJcbiAgICAgICAgYWRkSW5wdXRIb3Vycy5hcHBlbmRDaGlsZChtZWV0aW5nLmNyZWF0ZUlucHV0SG91cnMobmV3IERhdGUocmVzLmVuZCkuZ2V0SG91cnMoKSwgbmV3IERhdGUocmVzLmVuZCkuZ2V0TWludXRlcygpLCB0cnVlKSk7XHJcbiAgICAgICAgY2hlY2sgPSAxO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgc3BhbkZyb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHNwYW5Gcm9tLnN0eWxlLmZsb2F0ID0gXCJsZWZ0XCI7XHJcbiAgICAgIGZpcnN0Q2xpY2sgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgIGV2ZW50LnRhcmdldC5hcHBlbmRDaGlsZChzcGFuRnJvbSk7XHJcbiAgICAgIHN0b3JhZ2Uuc3RhcnRIb3VyID0gbmV3IERhdGUoQ2FsZW5kYXJVSS55ZWFyLCBDYWxlbmRhclVJLm1vbnRoLCBDYWxlbmRhclVJLnNhdmVEYXksIENhbGVuZGFyVUkuaG91ciwgQ2FsZW5kYXJVSS5taW4pO1xyXG4gICAgICBjaGVjaysrO1xyXG4gICAgfVxyXG4gIH1cclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBXb3JraW5nIG9uIGl0IDpcclxuICogMSkgcG9zc2liaWxpdHkgdG8gYWRkIGV2ZW50IGRpcmVjdGx5IGZyb20gbWFpbiBjYWxlbmRhclxyXG4gKiAyKSBQb3NzaWJpbGl0eSB0byBtYWtlIGEgcmVzZWFyY2ggZm9yIGEgZGF0ZVxyXG4gKiAzKSBQcm9wb3NlIGFuIG90aGVyIGRhdGUgaWYgYWxyZWFkeSB0YWtlblxyXG4gKi9cclxuY29uc3QgYWRkTWVldGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZXZlbnQnKTtcclxuYWRkTWVldGluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgaWYgKGNyZWF0ZU1lZXRpbmcudmVyaWZ5TmF2YmFyID09PSBmYWxzZSkge1xyXG4gICAgY3JlYXRlTWVldGluZy5pc3NldChjcmVhdGVNZWV0aW5nLmdldEZvcm1hdHRlZERhdGUobmV3IERhdGUoKSksIGNyZWF0ZU1lZXRpbmcucmVjYXB0Y2hhKTtcclxuICAgIHF1aWxsID0gbmV3IFF1aWxsKCcucXVpbGwnLCB7XHJcbiAgICAgIHRoZW1lOiAnc25vdycsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiAnQWRkIGEgZGVzY3JpcHRpb24gdG8geW91ciBtZWV0aW5nJ1xyXG4gICAgfSk7XHJcbiAgICBpc3NldEluZm8oKTtcclxuICAgIGxldCBhZGRJbnB1dEhvdXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlc3QnKTtcclxuICAgIGFkZElucHV0SG91cnMuYXBwZW5kQ2hpbGQobWVldGluZy5jcmVhdGVJbnB1dEhvdXJzKG5ldyBEYXRlKCkuZ2V0SG91cnMoKSwgbmV3IERhdGUoKS5nZXRNaW51dGVzKCkpKTtcclxuICAgIGFkZElucHV0SG91cnMuYXBwZW5kQ2hpbGQobWVldGluZy5jcmVhdGVJbnB1dEhvdXJzKG5ldyBEYXRlKCkuZ2V0SG91cnMoKSArIDEsIG5ldyBEYXRlKCkuZ2V0TWludXRlcygpLCB0cnVlKSk7XHJcbiAgICAvLyBtZWV0aW5nLm9uZU1lZXRpbmdEYXkoe1wic3RhcnRcIjogMCwgXCJlbmRcIiA6IDB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgY3JlYXRlTWVldGluZy5yZWR1Y2UoKTtcclxuICB9XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbmJhY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIC8vIFJlc2V0LCB0YWtlIHRoZSBwcm9wZXJ0eSBpbiBDYWxlbmRhck1vbnRoXHJcbiAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcbiAgbGV0IGNhbGVuZGFyTW9udGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYWxlbmRhck1vbnRoLmNsYXNzTmFtZSA9IFwiY2FsZW5kYXItZ3JpZFwiO1xyXG4gIGNhbGVuZGFyRGF5LkNhbGVuZGFyR3JpZC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIG1haW4uYXBwZW5kQ2hpbGQoY2FsZW5kYXIpO1xyXG4gIG1haW4uYXBwZW5kQ2hpbGQoQ2FsZW5kYXJVSS5jYWxlbmRhckdyaWQpO1xyXG4gIENhbGVuZGFyVUkudGl0bGVNb250aCgpO1xyXG4gIGNhbGVuZGFyRGF5Lmlzc2V0ID0gZmFsc2U7XHJcbiAgY2FsZW5kYXJEYXkuQ2FsZW5kYXJHcmlkLnJlbW92ZSgpO1xyXG4gIGlmIChjcmVhdGVNZWV0aW5nLnZlcmlmeU5hdmJhciA9PT0gdHJ1ZSkge1xyXG4gICAgY3JlYXRlTWVldGluZy5yZWR1Y2UoKTtcclxuICAgIGNyZWF0ZU1lZXRpbmcudmVyaWZ5TmF2YmFyID0gZmFsc2U7XHJcbiAgfVxyXG4gIGxldCBmaXJzdERheSA9IG5ldyBEYXRlKENhbGVuZGFyVUkueWVhciwgQ2FsZW5kYXJVSS5tb250aCwgMCkuZ2V0VGltZSgpO1xyXG4gIGxldCBsYXN0RGF5ID0gbmV3IERhdGUoQ2FsZW5kYXJVSS55ZWFyLCBDYWxlbmRhclVJLm1vbnRoKzEsIDApLmdldFRpbWUoKTtcclxuICBzdG9yYWdlLmdldE1lZXRpbmcoZmlyc3REYXksIGxhc3REYXkpO1xyXG4gIG1lZXRpbmcucmVtb3ZlTWVldGluZygpO1xyXG4gIGJhY2suc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgZGF5ID0gZmFsc2U7XHJcbiAgd2VlayA9IGZhbHNlO1xyXG4gIG1vbnRoID0gdHJ1ZTtcclxufSk7XHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGxheURheShzYXZlRGF5KSB7XHJcblxyXG4gIENhbGVuZGFyVUkuc2F2ZURheSA9IHNhdmVEYXk7XHJcbiAgY2FsZW5kYXJEYXkueWVhciA9IENhbGVuZGFyVUkueWVhcjtcclxuICBjYWxlbmRhckRheS5kaXNwbGF5Q2FsZW5kYXIoQ2FsZW5kYXJVSS5zYXZlRGF5LCBDYWxlbmRhclVJLm1vbnRoKTtcclxuICBsZXQgZmlyc3REYXkgPSBuZXcgRGF0ZShDYWxlbmRhclVJLnllYXIsIENhbGVuZGFyVUkubW9udGgsIENhbGVuZGFyVUkuc2F2ZURheSwgOCkuZ2V0VGltZSgpO1xyXG4gIGxldCBsYXN0RGF5ID0gbmV3IERhdGUoQ2FsZW5kYXJVSS55ZWFyLCBDYWxlbmRhclVJLm1vbnRoLCBDYWxlbmRhclVJLnNhdmVEYXksIDIyKS5nZXRUaW1lKCk7XHJcbiAgc3RvcmFnZS5nZXRNZWV0aW5nKGZpcnN0RGF5LCBsYXN0RGF5KTtcclxuICBiYWNrLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gc21vb3RoU2Nyb2xsVG8oZW5kWSwgZHVyYXRpb24gPSA0MDApIHtcclxuICBjb25zdCBzdGFydFkgPSB3aW5kb3cucGFnZVlPZmZzZXQsXHJcbiAgZGlzdGFuY2VZID0gZW5kWSAtIHN0YXJ0WSxcclxuICBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHJcbiAgY29uc3QgZWFzZUluT3V0ID0gKHRpbWUsIGZyb20sIGRpc3RhbmNlLCBkdXJhdGlvbikgPT4ge1xyXG4gICAgaWYgKCh0aW1lIC89IGR1cmF0aW9uIC8gMikgPCAxKSB7XHJcbiAgICAgIHJldHVybiBkaXN0YW5jZSAvIDIgKiB0aW1lICogdGltZSAqIHRpbWUgKiB0aW1lICsgZnJvbTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAtZGlzdGFuY2UgLyAyICogKCh0aW1lIC09IDIpICogdGltZSAqIHRpbWUgKiB0aW1lIC0gMikgKyBmcm9tO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICBjb25zdCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWUsXHJcbiAgICBuZXdZID0gZWFzZUluT3V0KHRpbWUsIHN0YXJ0WSwgZGlzdGFuY2VZLCBkdXJhdGlvbik7XHJcbiAgICBpZiAodGltZSA+PSBkdXJhdGlvbikge1xyXG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgIH1cclxuICAgIHNjcm9sbFRvKDAsIG5ld1kpO1xyXG4gIH0sIDEwMDAvNjApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc3NldEluZm8oKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnY2FyZF9fZm9vdGVyLWNhbmNlbCcpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY3JlYXRlTWVldGluZy5yZWR1Y2UoKTtcclxuICAgICAgICBpZiAoY2FsZW5kYXJEYXkuaXNzZXQgPT09IHRydWUpIHtcclxuICAgICAgICAgIGNhbGVuZGFyRGF5LkNhbGVuZGFyR3JpZC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgZGlzcGxheURheShDYWxlbmRhclVJLnNhdmVEYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgNTApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2NhcmRfX2Zvb3Rlci1idG4nKSB7XHJcbiAgICAgIGxldCB0ZXMgPSBxdWlsbC5nZXRDb250ZW50cygpO1xyXG4gICAgICBsZXQgcmVzID0ge1wiZy1yZWNhcHRjaGEtcmVzcG9uc2VcIiA6IGdyZWNhcHRjaGEuZ2V0UmVzcG9uc2UoKX07XHJcbiAgICAgIHN0b3JhZ2UucG9zdChcInN1Ym1pdFwiLCByZXMpXHJcbiAgICAgICAgLnRoZW4oIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5yZXNwb25zZUNvZGUgPT09IDApIHtcclxuICAgICAgICAgICAgc3RvcmFnZS5hZGRNZWV0aW5nKGNyZWF0ZU1lZXRpbmcudmFsaWRhdGUoc3RvcmFnZS5zdGFydEhvdXIuZ2V0VGltZSgpLCBzdG9yYWdlLmVuZEhvdXIuZ2V0VGltZSgpLCB0ZXMpKTtcclxuICAgICAgICAgICAgY3JlYXRlTWVldGluZy5yZWR1Y2UoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYXB0Y2hhIGluY29ycmVjdCAhJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIHN0b3JhZ2UuYWRkTWVldGluZyhjcmVhdGVNZWV0aW5nLnZhbGlkYXRlKHRlcykpO1xyXG4gICAgICAvLyBjcmVhdGVNZWV0aW5nLnJlZHVjZSgpO1xyXG4gICAgICBpZiAoY2FsZW5kYXJEYXkuaXNzZXQgPT09IHRydWUpIHtcclxuICAgICAgICBjYWxlbmRhckRheS5DYWxlbmRhckdyaWQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBkaXNwbGF5RGF5KENhbGVuZGFyVUkuc2F2ZURheSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9hcHAuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxlbmRhciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG1vbnRoLHllYXIpIHtcclxuICAgIHRoaXMubW9udGggPSBtb250aD09PSB1bmRlZmluZWQgPyBuZXcgRGF0ZSgpLmdldE1vbnRoKCkgOiBtb250aDtcclxuICAgIHRoaXMueWVhciA9IHllYXI9PT0gdW5kZWZpbmVkID8gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIDogeWVhcjtcclxuICAgIHRoaXMuY2FsZW5kYXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGVuZGFyLWdyaWQnKTtcclxuICAgIHRoaXMuY2FsZW5kYXJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XHJcbiAgICB0aGlzLm1vbnRocyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xyXG4gICAgdGhpcy5taW4gPSAwO1xyXG4gICAgdGhpcy5tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldE1vbmRheShkKSB7XHJcblxyXG4gICAgZCA9IG5ldyBEYXRlKGQpO1xyXG4gICAgdmFyIGRheSA9IGQuZ2V0RGF5KCksXHJcbiAgICAgICAgZGlmZiA9IGQuZ2V0RGF0ZSgpIC0gZGF5ICsgKGRheSA9PSAwID8gLTY6MSk7IC8vIGFkanVzdCB3aGVuIGRheSBpcyBzdW5kYXlcclxuICAgIHJldHVybiBuZXcgRGF0ZShkLnNldERhdGUoZGlmZikpO1xyXG4gIH1cclxuXHJcbiAgZGF5T2ZDYWxlbmRhcihtb250aCA9IHRoaXMubW9udGgsIHllYXIgPSB0aGlzLnllYXIpIHtcclxuICAgIHRoaXMudGl0bGVNb250aCgpO1xyXG4gICAgbGV0IGZpcnN0RGF0ZT0gbmV3IERhdGUoeWVhciwgbW9udGgsIDApLFxyXG4gICAgbGFzdERhdGU9IG5ldyBEYXRlKHllYXIsIG1vbnRoKzEsIDApLFxyXG4gICAgZmlyc3RNb25kYXkgPSBDYWxlbmRhci5nZXRNb25kYXkoZmlyc3REYXRlKS5nZXREYXRlKCk7XHJcbiAgICBjb25zdCBmaXJzdERhdGVPZk1vbnRoID0gZmlyc3REYXRlLmdldERhdGUoKTtcclxuICAgIGNvbnN0IGVuZE9mUHJldk1vbnRoID0gbGFzdERhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgY29uc3QgZW5kT2ZDdXJyZW50TW9udGggPSA3IC0gbGFzdERhdGUuZ2V0RGF5KCk7XHJcblxyXG4gICAgbGV0IGFsbERhdGUgPSBbZmlyc3REYXRlT2ZNb250aCwgZW5kT2ZQcmV2TW9udGgsIGVuZE9mQ3VycmVudE1vbnRoXTtcclxuICAgIGxldCBjaGVja0ZpcnN0TW9udGggPSBmYWxzZTtcclxuICAgIGFsbERhdGUuZm9yRWFjaCgoZGF0ZSkgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBjaGVja0ZpcnN0TW9udGggPT09IGZhbHNlID8gZmlyc3RNb25kYXkgOiAxOyBpIDw9IGRhdGU7IGkrKykge1xyXG4gICAgICAgICAgdGhpcy5kaXNwbGF5Q2FsZW5kYXIoaSwgZGF0ZSAhPT0gYWxsRGF0ZVsxXSB8fCBjaGVja0ZpcnN0TW9udGggPT09IGZhbHNlID8gJ2ZhZGVNb250aCcgOiBgY20ke3RoaXMubW9udGh9YCk7XHJcbiAgICAgICAgICBpZiAoY2hlY2tGaXJzdE1vbnRoID09PSB0cnVlICYmIGkgPT09IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpICYmIG1vbnRoID09PSBuZXcgRGF0ZSgpLmdldE1vbnRoKCkpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNtJHt0aGlzLm1vbnRofSAuZGF5JHtpfWApLnN0eWxlLmJhY2tncm91bmQgPSBcIiM0MjQyNDJcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNtJHt0aGlzLm1vbnRofSAuZGF5JHtpfWApLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNtJHt0aGlzLm1vbnRofSAuZGF5JHtpfWApLnBhcmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2JhKDE4OSwxODksMTg5LDAuMSknO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjaGVja0ZpcnN0TW9udGggPSB0cnVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgfVxyXG4gIFxyXG4gIGRpc3BsYXlDYWxlbmRhcihkYXksIGJtKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNyZWF0ZURheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY3JlYXRlRGF5LmNsYXNzTmFtZSA9IGBjYWxlbmRhci1ncmlkLWRheSAke2JtfWA7XHJcbiAgICBjb25zdCBkYXlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkYXlUZXh0LmNsYXNzTmFtZSA9IGBkYXl0ZXh0IGRheSR7ZGF5fWA7XHJcbiAgICBkYXlUZXh0LmlubmVyVGV4dCA9IGRheTtcclxuICAgIGNyZWF0ZURheS5hcHBlbmRDaGlsZChkYXlUZXh0KTtcclxuICAgIFxyXG4gICAgdGhpcy5jYWxlbmRhckdyaWQuYXBwZW5kQ2hpbGQoY3JlYXRlRGF5KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUNhbGVuZGFyKCkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsZW5kYXItZ3JpZCcpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gIG5leHRNb250aCgpIHtcclxuICBcclxuICAgICAgaWYgKHRoaXMubW9udGggPCAxMSkge1xyXG4gICAgICAgIHRoaXMubW9udGgrKztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnllYXIrKztcclxuICAgICAgICB0aGlzLm1vbnRoID0gMDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJlbW92ZUNhbGVuZGFyKCk7XHJcbiAgICAgIHRoaXMuZGF5T2ZDYWxlbmRhcih0aGlzLm1vbnRoLCB0aGlzLnllYXIpO1xyXG4gICAgfVxyXG5cclxuICBwcmV2TW9udGgoKSB7XHJcblxyXG4gICAgaWYgKHRoaXMubW9udGggPiAwKSB7XHJcbiAgICAgIHRoaXMubW9udGgtLTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMueWVhci0tO1xyXG4gICAgICB0aGlzLm1vbnRoID0gMTE7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbW92ZUNhbGVuZGFyKCk7XHJcbiAgICB0aGlzLmRheU9mQ2FsZW5kYXIodGhpcy5tb250aCwgdGhpcy55ZWFyKTtcclxuICB9XHJcblxyXG4gIHRpdGxlTW9udGgoKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBoMS5pbm5lclRleHQgPSBcIlwiO1xyXG4gICAgICBoMS5pbm5lclRleHQgPSB0aGlzLm1vbnRoc1sodGhpcy5tb250aCldICsgJyAnICsgdGhpcy55ZWFyO1xyXG4gICAgfSwgNTApO1xyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy92dWUvQ2FsZW5kYXJNb250aC5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGVuZGFyRGF5IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuICAgIHRoaXMuaDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpO1xyXG4gICAgdGhpcy5tb250aHMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXTtcclxuICAgIHRoaXMuQ2FsZW5kYXJHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLkNhbGVuZGFyR3JpZC5jbGFzc05hbWUgPSAnY2FsZW5kYXItZ3JpZC1ob3Vycyc7XHJcbiAgICB0aGlzLmlzc2V0ID0gZmFsc2U7XHJcbiAgICB0aGlzLnllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5Q2FsZW5kYXIoZGF5LCBtb250aCkgeyBcclxuICAgIHRoaXMuZGF5ID0gTnVtYmVyKGRheSk7XHJcbiAgICB0aGlzLm1vbnRoID0gbW9udGg7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5tYWluLmlubmVySFRNTCA9ICcnO1xyXG4gICAgfSwgNTApO1xyXG4gICAgdGhpcy5oMS5zdHlsZS5hbmltYXRpb24gPSBcIjEwMG1zIGdyaWQgY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSlcIjtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmgxLmlubmVyVGV4dCA9IENhbGVuZGFyRGF5Lm9yZGluYWxfc3VmZml4X29mKE51bWJlcihkYXkpKSArICcgJyArIHRoaXMubW9udGhzW21vbnRoXSArICcgJyArIHRoaXMueWVhcjtcclxuICAgIH0sIDEwMCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDg7IGkgPD0gMjI7IGkgPSBpICsgMC41KSB7XHJcbiAgICBsZXQgcmVwbGFjZURvdCA9IFN0cmluZyhpKS5yZXBsYWNlKC9cXC4vZywnLScpO1xyXG4gICAgbGV0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBob3Vycy5jbGFzc05hbWUgPSBcImhvdXJzXCI7XHJcbiAgICBsZXQgaG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaG91ci5jbGFzc05hbWUgPSBcImhvdXJcIjtcclxuICAgIGxldCBob3VyRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhvdXJFdmVudC5jbGFzc05hbWUgPSBgaG91ci1ldmVudCBoJHtyZXBsYWNlRG90fSBkJHt0aGlzLmRheX1gO1xyXG4gICAgaWYgKGkgJSAxID09PSAwKSB7XHJcbiAgICAgIGlmIChpIDwgMTIpIHtcclxuICAgICAgICBob3VyLmlubmVyVGV4dCA9IGAke2l9YW1gO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhvdXIuaW5uZXJUZXh0ID0gYCR7aX1wbWA7XHJcbiAgICAgIH1cclxuICAgICAgaG91ckV2ZW50LnN0eWxlLmJvcmRlclRvcCA9IFwiMXB4IHNvbGlkIHJnYmEoMTg5LDE4OSwxODksIDAuNClcIlxyXG4gICAgfVxyXG5cclxuICAgIGhvdXJzLmFwcGVuZENoaWxkKGhvdXIpO1xyXG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoaG91ckV2ZW50KTtcclxuICAgIHRoaXMuQ2FsZW5kYXJHcmlkLmFwcGVuZENoaWxkKGhvdXJzKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZCh0aGlzLkNhbGVuZGFyR3JpZCk7XHJcbiAgICB0aGlzLmlzc2V0ID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBvcmRpbmFsX3N1ZmZpeF9vZihpKSB7XHJcbiAgICB2YXIgaiA9IGkgJSAxMCxcclxuICAgICAgICBrID0gaSAlIDEwMDtcclxuICAgIGlmIChqID09IDEgJiYgayAhPSAxMSkge1xyXG4gICAgICAgIHJldHVybiBpICsgXCJzdFwiO1xyXG4gICAgfVxyXG4gICAgaWYgKGogPT0gMiAmJiBrICE9IDEyKSB7XHJcbiAgICAgICAgcmV0dXJuIGkgKyBcIm5kXCI7XHJcbiAgICB9XHJcbiAgICBpZiAoaiA9PSAzICYmIGsgIT0gMTMpIHtcclxuICAgICAgICByZXR1cm4gaSArIFwicmRcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBpICsgXCJ0aFwiO1xyXG4gIH1cclxuXHJcbiAgbmV4dERheSgpIHtcclxuXHJcbiAgICBsZXQgc2F2ZSA9IG5ldyBEYXRlKHRoaXMueWVhciwgdGhpcy5tb250aCArIDEsIDApO1xyXG4gICAgc2F2ZSA9IHNhdmUuZ2V0RGF0ZSgpO1xyXG4gICAgaWYgKHRoaXMuZGF5ID09PSBzYXZlKSB7XHJcbiAgICAgIHRoaXMuZGF5ID0gMTtcclxuXHJcbiAgICAgIGlmICh0aGlzLm1vbnRoIDwgMTEpIHtcclxuICAgICAgICB0aGlzLm1vbnRoKys7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy55ZWFyKys7XHJcbiAgICAgICAgdGhpcy5tb250aCA9IDA7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF5Kys7XHJcbiAgICB9XHJcbiAgICB0aGlzLkNhbGVuZGFyR3JpZC5pbm5lckhUTUwgPSAnJztcclxuICAgIHRoaXMuZGlzcGxheUNhbGVuZGFyKHRoaXMuZGF5LCB0aGlzLm1vbnRoKTtcclxuICB9XHJcblxyXG4gIHByZXZEYXkoKSB7XHJcbiAgICBpZiAodGhpcy5kYXkgPT09IDEpIHtcclxuXHJcbiAgICAgIGlmICh0aGlzLm1vbnRoID4gMCkge1xyXG4gICAgICAgIHRoaXMubW9udGgtLTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnllYXItLTtcclxuICAgICAgICB0aGlzLm1vbnRoID0gMTE7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHNhdmUgPSBuZXcgRGF0ZSh0aGlzLnllYXIsIHRoaXMubW9udGggKyAxLCAwKTtcclxuICAgICAgdGhpcy5kYXkgPSBzYXZlLmdldERhdGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF5LS07XHJcbiAgICB9XHJcbiAgICB0aGlzLkNhbGVuZGFyR3JpZC5pbm5lckhUTUwgPSAnJztcclxuICAgIHRoaXMuZGlzcGxheUNhbGVuZGFyKHRoaXMuZGF5LCB0aGlzLm1vbnRoKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3Z1ZS9DYWxlbmRhckRheS5qcyIsImltcG9ydCBNZWV0aW5nIGZyb20gXCIuLi92dWUvTWVldGluZ1wiO1xubGV0IG0gPSBuZXcgTWVldGluZztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xuXG4gIGdldCh1cmwpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGZldGNoKHVybClcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiByZXNvbHZlKGRhdGEpKVxuICAgICAgLmNhdGNoKGVyciA9PiByZWplY3QoZXJyKSk7XG4gIFxuICAgIH0pO1xuICB9XG5cbiAgcG9zdCh1cmwsIGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZmV0Y2godXJsLCB7XG4gICAgICAgIG1ldGhvZCA6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVycyA6IHtcbiAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHJlc29sdmUoZGF0YSkpXG4gICAgICAuY2F0Y2goZXJyID0+IHJlamVjdChlcnIpKTtcbiAgICB9KTsgXG4gIH1cblxuICBwdXQodXJsLGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KSA9PiB7XG4gICAgICBmZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kIDogJ1BVVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICB9KVxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4gKGRhdGEgPT4gcmVzb2x2ZShkYXRhKSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZWplY3QoZXJyKSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBEZWxldGVcbiAgZGVsZXRlKHVybCwgZGF0YSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpID0+IHtcbiAgICAgIGZldGNoKHVybCwge1xuICAgICAgICBtZXRob2QgOiAnREVMRVRFJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuIChkYXRhID0+IHJlc29sdmUoJ0RlbGV0ZWQnKSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZWplY3QoZXJyKSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRNZWV0aW5nKGZyb20sIHRvKSB7XG4gICAgLy8gaHR0cHM6Ly9zbWFydHRpY29mZmljZS1mdW5jdGlvbmFwcC5henVyZXdlYnNpdGVzLm5ldC9hcGkvZ2V0bWVldGluZyBwcm9kXG4gICAgLy8gaHR0cHM6Ly9jcnVkLW1lZXRpbmdzLmF6dXJld2Vic2l0ZXMubmV0L2FwaS9nZXRBbGwgZGV2XG4gICAgdGhpcy5nZXQoYGh0dHBzOi8vc21hcnR0aWNvZmZpY2UtZnVuY3Rpb25hcHAuYXp1cmV3ZWJzaXRlcy5uZXQvYXBpL2dldG1lZXRpbmc/c3RhcnQ9JHtmcm9tfSZlbmQ9JHt0b31gKVxuICAgIC50aGVuKCAocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmICh0byAtIGZyb20gPCAxMzY4MDAwMDApIHtcbiAgICAgICAgcmVzcG9uc2UucmVzLmZvckVhY2goKHJlcykgPT4ge1xuICAgICAgICBsZXQgYmcgPSBbJ3JnYmEoMCwxNzYsMjU1LCAwJywgXCJyZ2JhKDAsMjMwLDExOCwgMFwiLCBcInJnYmEoMjU1LDIwMiw0MCwwXCJdO1xuICAgICAgICBsZXQgY29sb3IgPSBiZ1tNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMykpXTtcbiAgICAgICAgbS5kaXNwbGF5TWVldGluZ0hvdXJzKHJlcywgY29sb3IpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3BvbnNlLnJlcy5mb3JFYWNoKCAocmVzKSA9PiB7XG4gICAgICAgIG0uZGlzcGxheU1lZXRpbmcocmVzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goIChlcnIpID0+IHtcbiAgICAgICAgcmV0dXJuIGVycjtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZE1lZXRpbmcoZGF0YSkge1xuXG4gICAgdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vY3J1ZC1tZWV0aW5ncy5henVyZXdlYnNpdGVzLm5ldC9hcGkvYWRkP2NvZGU9Sk5JMGxMczFINTNVZzFQZUVJMzNWNTBQOEFWRVI1Y1R6YXVycW0wcUk5OGQwSXVsbTBzU2p3PT0nLCBkYXRhKVxuICAgIC50aGVuKGRhdGEgPT4gZGF0YSlcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9XG5cbiAgdXBkYXRlTWVldGluZyh0aW1lLCBkYXRhKSB7XG5cbiAgICB0aGlzLmh0dHAucHV0KCdodHRwczovL2NydWQtbWVldGluZ3MuYXp1cmV3ZWJzaXRlcy5uZXQvYXBpL2FkZD9jb2RlPUpOSTBsTHMxSDUzVWcxUGVFSTMzVjUwUDhBVkVSNWNUemF1cnFtMHFJOThkMEl1bG0wc1Nqdz09JywgZGF0YSlcbiAgICAudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH1cblxuICBkZWxldGVNZWV0aW5nKGlkKSB7XG4gICAgdGhpcy5odHRwLmRlbGV0ZSgnaHR0cHM6Ly9jcnVkLW1lZXRpbmdzLmF6dXJld2Vic2l0ZXMubmV0L2FwaS9hZGQ/Y29kZT1KTkkwbExzMUg1M1VnMVBlRUkzM1Y1MFA4QVZFUjVjVHphdXJxbTBxSTk4ZDBJdWxtMHNTanc9PScpXG4gICAgLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9tb2RlbC9TdG9yYWdlLmpzIiwiLy8gaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4uL21vZGVsL1N0b3JhZ2VcIjtcclxuXHJcbi8vIGxldCBzdG9yYWdlID0gbmV3IFN0b3JhZ2U7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRNZWV0aW5nIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpO1xyXG4gICAgdGhpcy5oZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9udGgnKTtcclxuICAgIHRoaXMuYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ldmVudCcpO1xyXG4gICAgdGhpcy5sb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbicpO1xyXG4gICAgdGhpcy5sb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tbG9naW4nKTtcclxuICAgIHRoaXMuc2lnbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1zaWdudXAnKTtcclxuICAgIHRoaXMuYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ldmVudCcpO1xyXG4gICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgdGhpcy52ZXJpZnlOYXZiYXIgPSBmYWxzZTtcclxuICAgIHRoaXMuaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvJyk7XHJcbiAgfVxyXG5cclxuICBpc3NldChzdGFydCwgcmVjYXB0Y2hhKSB7XHJcbiAgICB0aGlzLmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgwLDAsMCwwLjQpXCI7XHJcbiAgICB0aGlzLmluZm8uaW5uZXJIVE1MID0gXHJcbiAgICBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fdGl0bGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fdGl0bGUtY2VudGVyXCI+XHJcbiAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgaWQ9XCJjb21tZW50X2Zvcm1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlc3RcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgY2xhc3M9XCJjYXJkX190aXRsZS1kYXRlXCIgdmFsdWU9XCIke3RoaXMuZ2V0Rm9ybWF0dGVkRGF0ZShuZXcgRGF0ZShzdGFydCkpfVwiPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaGFsa2JvYXJkLXRlYWNoZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIlwiIGlkPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiQWRkIGEgbWVldGluZyBuYW1lXCIgY2xhc3M9XCJkYXktdGV4dFwiPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicGVyc29uXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS11c2Vyc1wiPjwvaT5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwicGVyc29uXCIgcGxhY2Vob2xkZXI9XCJIb3cgbWFueSBwZXJzb25zID9cIiBjbGFzcz1cImRheS1udW1iZXJcIj5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS1lbnZlbG9wZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImpvaG4uc21pdGhAZ21haWwuY29tXCIgY2xhc3M9XCJkYXktZW1haWxcIj5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2NvbnRlbnQtcHJpbWFyeVwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19jb250ZW50LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgPGRpdiBpZD1cImVkaXRvci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInF1aWxsXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWxsXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fZm9vdGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fZm9vdGVyLWJ0blwiPlxyXG4gICAgICAgICAgICBTQVZFXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19mb290ZXItY2FuY2VsXCI+XHJcbiAgICAgICAgICAgIENBTkNFTFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuICAgIC8vIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJjYXJkX19mb290ZXItYnRuXCIgdmFsdWU9XCJTQVZFXCIvPlxyXG4gICAgLy8gICAgICAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPVwiQWRkIGEgZGVzY3JpcHRpb24gdG8geW91ciBtZWV0aW5nLi4uXCI+PC90ZXh0YXJlYT5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICByZWNhcHRjaGEoKTtcclxuICAgIH0sIDIwMClcclxuICB9XHJcblxyXG4gIHJlZHVjZSgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJykucmVtb3ZlKCk7XHJcbiAgICB0aGlzLmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZSh0ZXMpIHtcclxuICAgIGxldCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheS10ZXh0JykudmFsdWUsXHJcbiAgICBudW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5LW51bWJlcicpLnZhbHVlLFxyXG4gICAgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5LWVtYWlsJykudmFsdWUsXHJcbiAgICB0aW1lSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JyksXHJcbiAgICB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKTtcclxuICAgIGxldCB2YWx1ZSA9IHRpbWUudmFsdWUuc3BsaXQoJy0nKTtcclxuICAgIGxldCBzdGFydCA9IG5ldyBEYXRlKHZhbHVlWzBdLCB2YWx1ZVsxXSAtIDEsIHZhbHVlWzJdLCBnZXRIb3Vycyh0aW1lSW5wdXRzWzBdLCAxKSwgZ2V0SG91cnModGltZUlucHV0c1swXSwgMCkpLmdldFRpbWUoKTtcclxuICAgIGxldCBlbmQgPSBuZXcgRGF0ZSh2YWx1ZVswXSwgdmFsdWVbMV0gLSAxLCB2YWx1ZVsyXSwgZ2V0SG91cnModGltZUlucHV0c1sxXSwgMSksIGdldEhvdXJzKHRpbWVJbnB1dHNbMV0sIDApKS5nZXRUaW1lKCk7XHJcbiAgICBsZXQgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW15hLXowLTnDocOpw63Ds8O6w7HDvCBcXC4sXy1dL2dpbSxcIlwiKTtcclxuICAgIHJlID0gcmUudGVzdChTdHJpbmcoZW1haWwpLnRvTG93ZXJDYXNlKCkpO1xyXG5cclxuICAgIG5hbWUgPSBuYW1lLnRyaW0oKTtcclxuICAgIGxldCBzdWJtaXQgPSB7XHJcbiAgICAgIHN0YXJ0LFxyXG4gICAgICBlbmQsXHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIFwicGVyc29uc1wiIDogbnVtYmVyLFxyXG4gICAgICBcImRlc2NcIiA6IHRlcyxcclxuICAgICAgZW1haWxcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SG91cnModGltZUlucHV0LCBjaGVja0hvdXIpIHtcclxuICAgICAgaWYgKGNoZWNrSG91ciA9PT0gMSkge1xyXG4gICAgICAgIGxldCBob3VyID0gdGltZUlucHV0LnZhbHVlLnNwbGl0KCdoJylbMF07XHJcbiAgICAgICAgcmV0dXJuIGhvdXI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IG1pbiA9IHRpbWVJbnB1dC52YWx1ZS5zcGxpdCgnaCcpWzFdO1xyXG4gICAgICAgIHJldHVybiBtaW47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3VibWl0O1xyXG4gIH1cclxuXHJcbiAgdmVyaWZ5VUkoZmlyc3RDbGljaywgbGFzdENsaWNrKSB7XHJcbiAgICBmaXJzdENsaWNrID0gZmlyc3RDbGljay5zcGxpdCgnICcpWzFdLnJlcGxhY2UoJ2gnLCAnJykucmVwbGFjZSgnLScsICcuJyk7XHJcbiAgICBsYXN0Q2xpY2sgPSBsYXN0Q2xpY2suc3BsaXQoJyAnKVsxXS5yZXBsYWNlKCdoJywgJycpLnJlcGxhY2UoJy0nLCAnLicpO1xyXG4gICAgZm9yIChsZXQgaSA9IE51bWJlcihmaXJzdENsaWNrKTsgaSA8PSBOdW1iZXIobGFzdENsaWNrKTsgaSA9IGkgKyAwLjUpIHtcclxuICAgICAgbGV0IHJlcGxhY2VEb3QgPSBTdHJpbmcoaSkucmVwbGFjZSgvXFwuL2csJy0nKTtcclxuICAgICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5oJHtyZXBsYWNlRG90fWApO1xyXG4gICAgICBpZiAoc2VsZWN0LnN0eWxlLmJvcmRlckxlZnRXaWR0aCA9PT0gXCIycmVtXCIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEZvcm1hdHRlZERhdGUoZGF0ZSkge1xyXG4gICAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgXHJcbiAgICB2YXIgbW9udGggPSAoMSArIGRhdGUuZ2V0TW9udGgoKSkudG9TdHJpbmcoKTtcclxuICAgIG1vbnRoID0gbW9udGgubGVuZ3RoID4gMSA/IG1vbnRoIDogJzAnICsgbW9udGg7XHJcbiAgXHJcbiAgICB2YXIgZGF5ID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKTtcclxuICAgIGRheSA9IGRheS5sZW5ndGggPiAxID8gZGF5IDogJzAnICsgZGF5O1xyXG4gICAgXHJcbiAgICByZXR1cm4geWVhciArICctJyArIG1vbnRoICsgJy0nICsgZGF5O1xyXG4gIH1cclxuXHJcbiAgcmVjYXB0Y2hhKCkge1xyXG4gICAgbGV0IGNyZWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZ3JlY2FwdGNoYS5yZW5kZXIoY3JlYXRlLCB7XHJcbiAgICAgIHNpdGVrZXkgOiBcIjZMZmZIbWtVQUFBQUFJMnNCNzc5ZzRtU3Y2SHBPRXkxWlhIME1fWEZcIlxyXG4gICAgfSk7XHJcbiAgICBsZXQgZG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlbGwnKTtcclxuICAgIGRvdC5hcHBlbmRDaGlsZChjcmVhdGUpO1xyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy92dWUvQWRkTWVldGluZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=