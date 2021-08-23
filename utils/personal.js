const request = require('postman-request');

const getAllComision = (callback) => {
  request('https://comision-api.herokuapp.com/personal', (error, res, body) => {
    if (error) {
      console.log('Error', error);
      return callback(error, undefined);
    }
    if (res) {
      if (body) {
        return callback(undefined, body);
      }
      callback('No se pudo agregar el nuevo personal', undefined);
    }
  });
};

module.exports = {
  getAllComision,
};
