export default class Meeting {

  displayMeeting(res) {
    const dayText = document.querySelector(`.cm .day${new Date(res.start).getDate()}`);
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
    let minutes = new Date(res.start).getMinutes();
    end = minutes === 30 ? end + 0.5 : end;
    console.log(start + " " + end);
    let firstTime = true
    
    for (let i = start; i < end; i = i + 0.5) {
      let replaceDot = String(i).replace(/\./g,'-');
      if (i % 2 === 0) {
        selectUI = `.h${i}`;
      }
      selectUI = `.h${replaceDot}`;
      console.log(selectUI);
      let selectUI = document.querySelector(selectUI);
      selectUI.style.background = "rgba(189,189,189, 0.2)";
      selectUI.style.borderLeft = "2rem solid rgba(189,189,189, 0.6)";
      if (firstTime === true) {
        selectUI.innerText = `${res.name} - 4persons`;
        firstTime = false;
      }
    }
  }

  fakeDate() {
    let sends = [];
    for (let i = 0; i < 100; i++) {
      let name = ["Meeting", "reunion", "party", "grouping", "End of week"];
      let nameRand = Math.floor((Math.random() * 4));
       name = name[nameRand];
      let rand = Math.floor((Math.random() * 8000000000) + 1);
      let rand2 = Math.floor((Math.random() * 36000000) + 1);
      let start = new Date(2018,6,0).getTime() + rand;
      let end = new Date().getTime() + rand + rand2;
      let send = {name, start, end}
      sends.push(send);
    }
    return sends;
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
    let txt = "Create a meeting at " + hour + "hours.";
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
  
}