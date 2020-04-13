const CryptoJS = require("./AES/crypto-js");

exports.AESEncrypt = function (data, key, iv) {
  data = CryptoJS.enc.Utf8.parse(data);
  key = CryptoJS.enc.Utf8.parse(key);
  if (key.toString().length != 64) {
    key = key.toString()
    key = key.concat("00000000000000000000000000000000000000000000000000000000000000");
    key = key.substring(0, 64);
    key = CryptoJS.enc.Hex.parse(key);
  }
  var _iv = CryptoJS.enc.Hex.parse(iv);
  var _data_en = CryptoJS.AES.encrypt(data, key, {
    iv: _iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
    blockSize: 8
  });
  return _data_en.toString();
};

exports.AESDecrypt = function (data, key, iv) {
  key = CryptoJS.enc.Utf8.parse(key);
  if (key.toString().length != 64) {
    key = key.toString()
    key = key.concat("00000000000000000000000000000000000000000000000000000000000000");
    key = key.substring(0, 64);
    key = CryptoJS.enc.Hex.parse(key);
  }
  var _iv = CryptoJS.enc.Hex.parse(iv);
  var _bytes_de = CryptoJS.AES.decrypt(data, key, {
    iv: _iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
    blockSize: 8
  });
  return _bytes_de.toString(CryptoJS.enc.Utf8);
};