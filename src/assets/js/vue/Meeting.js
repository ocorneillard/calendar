export default class Meeting {

  displayMeeting(res) {
    const dayText = document.querySelector(`.cm${new Date(res.start).getMonth()} .day${new Date(res.start).getDate()}`);
    let start = new Date(res.start).getHours();
    let end = new Date(res.end).getHours();
    let minutesStart = new Date(res.start).getMinutes();
    let minutesEnd = new Date(res.end).getMinutes();
    if (dayText.parentElement.childElementCount < 3) {
      const event = document.createElement('div');
      const timeOfEvent = document.createElement('span');
      
      if (minutesEnd === 30) {
        minutesEnd = 0;
        end++;
      } else {
        minutesEnd = 30;
      }
      const timeText = document.createTextNode(`${start + (minutesStart === 0 ? "h" : 'h' + minutesStart)}  - ${end + (minutesEnd === 0 ? "h" : 'h' + minutesEnd)}`);
      timeOfEvent.appendChild(timeText);
      timeOfEvent.className = 'time';
      event.className = "event";
      let meeting = document.createTextNode('Meeting');
      event.appendChild(timeOfEvent);
      event.appendChild(meeting);
      dayText.parentElement.appendChild(event);
    } else if (dayText.parentElement.childElementCount === 3) {
      const event = document.createElement('div');
      const timeOfEvent = document.createElement('span');
      timeOfEvent.className = 'time';
      event.className = "event_more";
      let meeting = document.createTextNode('...');
      event.appendChild(timeOfEvent);
      event.appendChild(meeting);
      dayText.parentElement.appendChild(event);
    }
  }

  removeMeeting() {
    let events = document.querySelectorAll('.event');
    let eventMore = document.querySelectorAll('.event_more');
    eventMore.forEach(event => event.remove());
    events.forEach(event => event.remove());
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
      selectUI = document.querySelector(selectUI + `.d${new Date(res.start).getDate()}`);
      selectUI.style.background = color + ".3)";
      selectUI.style.border = "none";
      selectUI.style.borderLeft = "2rem solid " + color + ".6)";
      if (firstTime === 1) {
        selectUI.innerText = `Meeting ${res.numberOfperson === undefined || res.numberOfperson == 0 ? "" : " -  " + res.numberOfperson + " persons"}`;
        firstTime++;
      } else if (firstTime === 2) {
        if (minutesEnd === 30) {
          minutesEnd = 0;
          end++;
        } else {
          minutesEnd = 30;
        }
        selectUI.innerText = `${start + (minutesStart === 0 ? "h" : 'h' + minutesStart)}  - ${end + (minutesEnd === 0 ? "h" : 'h' + minutesEnd)}`;
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


  static createDiv(txtContent = "", css) {
    let appendRight = document.createElement('div');
    appendRight.className = css;
    appendRight.innerText = txtContent;
    return appendRight;
  }
  
  createInputHours(h, min, bool = false) {
  function populateHours(b) {
    for(var i = 8; i <= 22; i = i + 0.5) {
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

  let time = document.createElement('span');
  if (bool === true) {
    time.innerText = ' to ';
  }
  let hourSelect = document.createElement('select');
  hourSelect.className = "time__input-hours";
  time.className = "time__input";

  populateHours(bool);
  time.appendChild(hourSelect);
  hourSelect.value = (min === 30 ? h + "h" + min : h + "h");
  return time;
  }
}