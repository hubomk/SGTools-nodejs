const axios = require('axios');

exports.sgRequestGet = function (url, data) {
  return new Promise((resolve, reject) => {
    axios({
        method: 'get',
        url: url,
        data: data
      }).then(function (response) {
        if (response && response.data) {
          resolve(response.data)
        } else {
          reject(response.data)
        }
      })
      .catch(function (error) {
        reject({
          code: -1,
          message: "not data"
        });
      });
  }).catch(new Function());
};

exports.sgRequestPost = function (url, data) {
  return new Promise((resolve, reject) => {
    axios({
        method: 'post',
        url: url,
        data: data
      }).then(function (response) {
        if (response && response.data) {
          resolve(response.data)
        } else {
          reject(response.data)
        }
      })
      .catch(function (error) {
        reject({
          code: -1,
          message: "not data"
        });
      });
  }).catch(new Function());
};