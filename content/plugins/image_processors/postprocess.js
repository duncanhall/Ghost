var Promise = require('bluebird');
var ExifImage = require('exif').ExifImage;

function postProcessImage (image) {
    return new Promise(function (resolve, reject) {
        try {
            new ExifImage({image: image.original}, function (error, exifData) {
                if (error) {
                    reject(error.message);
                } else {
                    resolve({
                        url: image.url,
                        meta: exifData
                    });
                }
            });
        } catch (error) {
            reject(error.message);
        }
    });
}

module.exports = postProcessImage;
