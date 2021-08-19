const orm = require('../config/orm.js');

const burger = {
  select(cb) {
      orm.selectAll('burgers', (res) => cb(res));
  },  

  insert(reqBody, cb) {
        orm.insertOne('burgers', reqBody, (res) => cb(res));
  },

  update(id, cb) {
      orm.updateOne(id, (res) => cb(res));
  }
}

module.exports = burger;