const axios = require('axios');

exports.sgRequest = function (parames) {
  parames = parames || {};
  parames.method = parames.method || 'get';
  parames.url = parames.url || '';
  parames.data = parames.data || {};
  parames.headers = parames.headers || {};
  parames.responseType = parames.responseType || 'json';

  return new Promise((resolve, reject) => {
    axios({
        method: parames.method,
        url: parames.url,
        data: parames.data,
        headers: parames.headers,
        responseType: parames.responseType
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

exports.sgRequestGet = function (url, data) {
  return this.sgRequest({
    method: 'get',
    url: url,
    data: data,
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    },
    responseType: 'json'
  });
};

exports.sgRequestPost = function (url, data) {
  return this.sgRequest({
    method: 'post',
    url: url,
    data: data,
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    },
    responseType: 'json'
  });
};