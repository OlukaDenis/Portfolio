const axios = require('axios');

const defaultHeaders = {
  'Content-Type': 'application/json',
};

exports.apiAxios = axios.create({
  baseURL: 'https://us-central1-denis-portfolio.cloudfunctions.net/app/api/v1/',
  timeout: 30000,
  headers: defaultHeaders,
});
