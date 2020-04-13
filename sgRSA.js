const JSEncrypt = require("./RSA/jsencrypt");
const RSA = require("./RSA/wxapp_rsa");
const sgStorage = require('./sgStorage.js');

exports.RSA_initKeys = function () {
  let key_local_public = sgStorage.getItem('key_local_public') || "";
  let key_local_private = sgStorage.getItem('key_local_private') || "";
  if (key_local_public == '' || key_local_private == '') {
    let keys = this.RSA_generateKeys(1024);
    key_local_public = keys.publicKey;
    key_local_private = keys.privateKey;
    sgStorage.setItem('key_local_public', key_local_public);
    sgStorage.setItem('key_local_private', key_local_private);
  }
};

exports.RSA_generateKeys = function (bits) {
  var encrypt = new JSEncrypt.JSEncrypt({
    default_key_size: bits
  });
  encrypt.getKey();
  return {
    'publicKey': encrypt.getPublicKey(),
    'privateKey': encrypt.getPrivateKey()
  };
};

/**
 * 数据加密后返回base64字符串
 */
exports.RSA_encrypt_publicKey = function (publicKey, data) {
  var rsa_public = RSA.KEYUTIL.getKey(publicKey);
  var _data_en = rsa_public.encrypt(data);
  _data_en = RSA.hex2b64(_data_en);
  return _data_en;
};

/**
 * 密文数据先使用base64解码 再进行解密
 */
exports.RSA_decrypt_privateKey = function (privateKey, data) {
  var rsa_private = RSA.KEYUTIL.getKey(privateKey);
  var _data_de = RSA.b64tohex(data);
  var _data_de = rsa_private.decrypt(_data_de);
  return _data_de;
};