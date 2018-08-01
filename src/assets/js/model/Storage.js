import Meeting from "../vue/Meeting";
let m = new Meeting;
export default class Storage {

  get(url) {
    return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
  
    });
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method : 'POST',
        headers : {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    }); 
  }

  put(url,data) {
    return new Promise((resolve,reject) => {
      fetch(url, {
        method : 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then (data => resolve(data))
        .catch(err => reject(err));
    });
  }

  // Delete
  delete(url, data) {
    return new Promise((resolve,reject) => {
      fetch(url, {
        method : 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
        .then(res => res.json())
        .then (data => resolve('Deleted'))
        .catch(err => reject(err));
    });
  }

  /**
   * 
   * @param {int} from 
   * @param {int} to 
   * @return {Array.object} 
   */
  getMeeting(from, to) {
    this.get(`https://crud-meetings.azurewebsites.net/api/getAll?start=${from}&end=${to}`)
    .then( (response) => {
      if (to - from === 136800000) {
        response.res.forEach((res) => {
        m.displayMeetingHours(res);
        });
      } else {
        response.res.forEach( (res) => {
        m.displayMeeting(res);
        });
      }
    })
    .catch( (err) => {
        return err;
    });
  }

  addMeeting(data) {

    this.http.post('https://crud-meetings.azurewebsites.net/api/add?code=JNI0lLs1H53Ug1PeEI33V50P8AVER5cTzaurqm0qI98d0Iulm0sSjw==', data)
    .then(data => data)
    .catch(err => console.log(err));
  }

  updateMeeting(time, data) {

    this.http.put('https://jsonplaceholder.typicode.com/users/1', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

  deleteMeeting(id) {
    this.http.delete('https://jsonplaceholder.typicode.com/users/1')
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }
}

