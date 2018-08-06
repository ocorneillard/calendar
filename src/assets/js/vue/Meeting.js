export default class Meeting {

  displayMeeting(res) {
    const dayText = document.querySelector(`.cm${new Date(res.start).getMonth()} .day${new Date(res.start).getDate()}`);
    if (dayText.parentElement.childElementCount < 3) {
      const event = document.createElement('div');
      const timeOfEvent = document.createElement('span');
      const timeText = document.createTextNode(new Date(res.start).getHours()+ "-" + new Date(res.end).getHours());
      timeOfEvent.appendChild(timeText);
      timeOfEvent.className = 'time';
      event.className = "event";
      let meeting = document.createTextNode(res.name);
      event.appendChild(timeOfEvent);
      event.appendChild(meeting);
      dayText.parentElement.appendChild(event);
    } else if (dayText.parentElement.childElementCount === 3) {
      const event = document.createElement('div');
      const timeOfEvent = document.createElement('span');
      timeOfEvent.className = 'time';
      event.className = "event";
      let meeting = document.createTextNode('See more');
      event.appendChild(timeOfEvent);
      event.appendChild(meeting);
      dayText.parentElement.appendChild(event);
    }
  }

  displayMeetingHours(res, color) {
    let selectUI;
    let start = new Date(res.start).getHours();
    let end = new Date(res.end).getHours();
    let minutesStart = new Date(res.start).getMinutes();
    let minutesEnd = new Date(res.end).getMinutes();
    let starti = minutesStart === 30 ? start + 0.5 : start;
    let endi = minutesEnd === 30 ? end + 0.5 : end;
    let firstTime = 1;
    
    for (let i = starti; i <= endi; i = i + 0.5) {
      let replaceDot = String(i).replace(/\./g,'-');
      if (i % 2 === 0) {
        selectUI = `.h${i}`;
      }
      selectUI = `.h${replaceDot}`;
      // console.log(selectUI);
      // console.log(res);
      selectUI = document.querySelector(selectUI + `.d${new Date(res.start).getDate()}`);
      selectUI.style.background = color + ".3)";
      selectUI.style.border = "none";
      selectUI.style.borderLeft = "2rem solid " + color + ".6)";
      if (firstTime === 1) {
        selectUI.innerText = `${res.name} - 4persons`;
        firstTime++;
      } else if (firstTime === 2) {
        if (minutesEnd === 30) {
          minutesEnd = 0;
          end++;
        } else {
          minutesEnd = 30;
        }
        selectUI.innerText = `${start + ':' + minutesStart}  - ${end + ':' + minutesEnd}`;
        firstTime++;
      }
    }
  }

  month(send, select) {
      if (select.parentNode.childNodes.length <= 3) {
      const event = document.createElement('div');
      const timeOfEvent = document.createElement('span');
      const timeText = document.createTextNode(new Date(send.start).getHours() + 'h');
      timeOfEvent.appendChild(timeText);
      timeOfEvent.className = 'time';
      event.className = "event";
      let meeting = document.createTextNode(send.name);
      event.appendChild(timeOfEvent);
      event.appendChild(meeting);
      select.parentNode.appendChild(event);
      }
  }

  oneMeeting() {
    const info = document.querySelector(".info");
    if ( info.childNodes.length !== 0) {
      info.innerHTML = '';
    }
    let txt = "Meeting with..";
    let card = Meeting.createDiv(undefined, "card");
    let cardContent = Meeting.createDiv(undefined, "card__content");
    let cardPrimary = Meeting.createDiv(txt, "card__content-primary");
    cardContent.appendChild(cardPrimary);
    card.appendChild(cardContent);
    info.appendChild(card);
  }

  oneMeetingDay(res = undefined) {
    const info = document.querySelector(".info");
    if ( info.childNodes.length !== 0) {
      info.innerHTML = '';
    }
    let txt = "New meeting from : ";
    let card = Meeting.createDiv(undefined, "card");
    let cardContent = Meeting.createDiv(undefined, "card__content");
    let cardPrimary = Meeting.createDiv(txt, "card__content-primary");
    let cardSecond = Meeting.createDiv(undefined, "card__content-secondary");

    let inputs = ['text', 'number', "email", "submit"];
    let placeholder = ['Meeting', '6 persons', "john@telenetgroup.be"];
    let count = 0;
    inputs.forEach( (input) => {
      let cardSecondInput = document.createElement('input');
      cardSecondInput.setAttribute('type', input);
      cardSecondInput.setAttribute('placeholder', placeholder[count]);
      cardSecondInput.className = "day-" + input;
      if (input === "submit") {
        cardSecondInput.value = "Send";
      }
      cardSecond.appendChild(cardSecondInput);
      count++;

    });
    cardPrimary.appendChild(this.createInputHours(new Date(res.start).getHours(), new Date(res.start).getMinutes()));
    cardPrimary.appendChild(this.createInputHours("10", "30", true));
    cardContent.appendChild(cardPrimary);
    cardContent.appendChild(cardSecond);
    card.appendChild(cardContent);
    info.appendChild(card);
  }


  static createDiv(txtContent = "", css) {
    let appendRight = document.createElement('div');
    appendRight.className = css;
    appendRight.innerText = txtContent;
    return appendRight;
  }
  
  createInputHours(h, min, bool = false) {
  function populateHours() {
    for(var i = 8; i <= 22; i++) {
      var option = document.createElement('option');
      option.textContent = i + "h";
      hourSelect.appendChild(option);
    }
  }

  function populateMinutes() {
    for(var i = 0; i <= 59; i = i + 30) {
      var option = document.createElement('option');
      option.textContent = (i < 10) ? ("0" + i) : i;
      minuteSelect.appendChild(option);
    }
  }

  let time = document.createElement('span');
  if (bool === true) {
    time.innerText = ' to : ';
  }
  let hourSelect = document.createElement('select');
  let minuteSelect = document.createElement('select');
  time.className = "time__input";

  populateHours();
  populateMinutes();
  time.appendChild(hourSelect);
  time.appendChild(minuteSelect);

  hourSelect.value = (h === undefined ? 8 : h) + "h";
  minuteSelect.value = (min === undefined ? 0 : min);
  return time;
  }
}