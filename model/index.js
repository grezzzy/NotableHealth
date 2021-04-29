const pool = require('../database/index');
const data = require('../database/rawData');

//console.log(data);

module.exports = {
  getPhys: () => {
    return new Promise ( (resolve, reject) => {
      //mocking an asnynchronus query
      setTimeout( () => {
        let result =[];
        for (let doc in data) {
          result.push(data[doc].name);
        }
        console.log(result);
        resolve(result);
      }, 50);
    });
  },
  getAppts: (name) => {
    return new Promise ( (resolve, reject) => {
      //mocking an asnynchronus query
      setTimeout( () => {
        let result =[];
        for (let key in data) {
          if (data[key].name === name)
            resolve(data[key].appointments);
        }
      }, 50);
    });
  }
}