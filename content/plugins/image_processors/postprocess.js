var Promise = require('bluebird');

function preProcessImage (image) {
    return new Promise(function (resolve, reject) {
        console.log('Pre processing image...');
        resolve(image);
    });
}

module.exports = preProcessImage;
