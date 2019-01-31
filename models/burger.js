// Import the ORM to insertOne functions that will interact with the database.
var orm = require("../config/orm.js");

var contact = {
  selectAll: function (cb) {
    orm.selectAll("contacts", function (res) {
      cb(res);
    });
  },

  insertOne: function (cols, vals, cb) {
    orm.insertOne("contacts", cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("contacts", objColVals, condition, function (res) {
      cb(res);
    });
  },
  delete: function (condition, cb) {
    orm.delete("contacts", condition, function (res) {
      cb(res);
    });
  }
};

module.exports = contact;