const moment = require("moment");
const base64 = require("base-64");

moment.locale();

const PAYMENT_STATUS = {
  PENDING: "pending",
  SUCCESS: "success",
  CONFIRMED: "confirmed",
  CANCELED: "canceled",
  FAILED: "failed",
  INSUFFICIENT: "insufficient_funds",
};

const getDateTime = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");

const dbKeys = {
    PROJECTS: "projects",
    TAGS: "tags"
};

const PAGE_SIZE = 10;

const routeKeys = {
  PROJECTS: "projects",
  TAGS: "tags"
};

const LogAction = {
  USER_CREATE: 1,
  USER_UPDATE: 2,
  USER_DELETE: 3,
  USER_LOGIN: 4,
  USER_LOGOUT: 5
};
Object.freeze(LogAction);

const PaymentType = {
  DEPOSIT: 1,
  RENT: 2,
};

module.exports = {
  getDateTime,
  dbKeys,
  routeKeys,
  LogAction,
  PAGE_SIZE,
  PAYMENT_STATUS,
  PaymentType,
};
