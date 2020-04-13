const CryptoJS = require("./AES/crypto-js");

exports.base64ToString = (str) => {
  var data = CryptoJS.enc.Base64.parse(str);
  return data.toString(CryptoJS.enc.Utf8);
};

exports.stringToBase64 = (str) => {
  var data = CryptoJS.enc.Utf8.parse(str);
  return CryptoJS.enc.Base64.stringify(data);
};