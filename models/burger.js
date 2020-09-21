const orm = require("../config/orm.js");

// Select ALL
const burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  // Insert One
  insertOne: function(name, cb) {
    orm.insertOne("burgers", "burger_name", name, cb)
  },
  //Update One
  updateOne: function (id, cb) {
    orm.updateOne("burgers", "devoured", true, id, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;
