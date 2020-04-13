if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./sgLocalStorage');
}



exports.getItem = function (key) {
  return localStorage.getItem(key);
};

exports.setItem = function (key, data) {
  localStorage.setItem(key, data);
};

exports.removeItem = function (key) {
  localStorage.removeItem(key);
};