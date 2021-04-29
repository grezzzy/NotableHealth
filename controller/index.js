const model = require('../model/index.js');

module.exports = {
  getPhys: async () => {
    let result = await model.getPhys();
    return result;
  },
  getAppts: async (name, date) => {
    let response = [];
    let result = await model.getAppts(name);
    let appts = result[date];
    for (let key in appts) {
      response.push([key, appts[key]]);
    }
    return response;
  }
}