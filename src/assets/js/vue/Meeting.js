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

  displayMeetingHours(res) {
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
      let selectUI = document.querySelector(selectUI + `.d${new Date(res.start).getDate()}`);
      let backgroundRandom = ['rgba(0,176,255, 0.6)', "rgba(0,230,118, 0.6)", "rgba(255,202,40,0.6)"]
      selectUI.style.background = "rgba(0,176,255,0.3)";
      selectUI.style.border = "none";
      selectUI.style.borderLeft = "2rem solid rgba(0,176,255,0.6)";
      if (firstTime === 1) {
        selectUI.innerText = `${res.name} - 4persons`;
        firstTime++;
      } else if (firstTime === 2) {
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

  oneMeetingDay(hour) {
    const info = document.querySelector(".info");
    if ( info.childNodes.length !== 0) {
      info.innerHTML = '';
    }
    let txt = "New meeting at " + hour + "h";
    let card = Meeting.createDiv(undefined, "card");
    let cardContent = Meeting.createDiv(undefined, "card__content");
    let cardPrimary = Meeting.createDiv(txt, "card__content-primary");
    let cardSecond = Meeting.createDiv("name : ", "card__content-secondary");

    let inputs = ['text', 'time', 'number', "email", "submit"];
    inputs.forEach( (input) => {
      let cardSecondInput = document.createElement('input');
      cardSecondInput.setAttribute('type', input);
      cardSecondInput.className = "day-" + input;
      cardSecond.appendChild(cardSecondInput);

    });

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
  
}