const sgtools = require('./index.js');

const test_sgRequest = function () {
  sgtools.sgRequest.sgRequestGet('https://think.isigu.com/api/client/globals/serverkey', {}).then(res => {
    console.log("test http get result:");
    if (!res || !res.data) {
      console.log("error");
      return;
    }
    console.log(res.data);
  });

  sgtools.sgRequest.sgRequestPost('https://think.isigu.com/api/client/globals/settings', {}).then(res => {
    console.log("test http post result:");
    if (!res || !res.data) {
      console.log("error");
      return;
    }
    console.log(res.data);
  });
};

const test_sgUtils = function () {
  let sgUtils = sgtools.sgUtils;
  console.log("randomString = ", sgUtils.randomString(16));
};

const test_sgStorage = function () {
  let sgStorage = sgtools.sgStorage;
  console.log("sgStorage.getItem", sgStorage.getItem('test_key'));
  console.log("sgStorage.setItem", sgStorage.setItem('test_key', 'ABCDEFG'));
  console.log("sgStorage.getItem", sgStorage.getItem('test_key'));
  console.log("sgStorage.removeItem", sgStorage.removeItem('test_key'));
  console.log("sgStorage.getItem", sgStorage.getItem('test_key'));
};

const test_sgBase64 = function () {
  let sgBase64 = sgtools.sgBase64;

  let _str = '这是测试字符串。';
  console.log("_str", _str);

  let _str_base64 = sgBase64.stringToBase64(_str);
  console.log("_str_base64", _str_base64);

  let _str_org = sgBase64.base64ToString(_str_base64);
  console.log("_str_org", _str_org);
};

// test_sgRequest();

// test_sgUtils();
// test_sgStorage();
test_sgBase64();