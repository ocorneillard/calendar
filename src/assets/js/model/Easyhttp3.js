/**
 * CRUD class to fetch data from Azure
 */

export default class EasyHTTP {

  // Get request
  get(url) {
    return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
  
    });
  }

  // Post
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

  // Put
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
}