/* eslint-disable require-jsdoc */

const Database = require("./wrapper/DatabaseWrapper");
const {dbKeys} = require("../helpers");

class ProjectTable {
  constructor() {
    if (this.instance) return this.instance;
    ProjectTable.instance = this;
  }

  get() {
    return Database.getList(dbKeys.BOOKING_KEY);
  }

  getById(id) {
    return Database.get(dbKeys.BOOKING_KEY, id);
  }

  create(data, key) {
    return Database.create(dbKeys.BOOKING_KEY, data, key);
  }

  delete(id) {
    return Database.delete(dbKeys.BOOKING_KEY, id);
  }

  update(id, data) {
    return Database.set(dbKeys.BOOKING_KEY, id, data);
  }

  filter(key, value) {
    return Database.filter(dbKeys.BOOKING_KEY, key, value);
  }

  doubleFilter(firstKey, firstValue, secondKey, secondValue) {
    return Database.secondLevelFilter(dbKeys.BOOKING_KEY, firstKey, firstValue, secondKey, secondValue);
  }

  tripleFilter(firstKey, firstValue, secondKey, secondValue, thirdKey, thirdValue) {
    return Database.thirdLevelFilter(dbKeys.BOOKING_KEY, firstKey, firstValue, secondKey, secondValue, thirdKey, thirdValue);
  }
}

module.exports = new ProjectTable();
