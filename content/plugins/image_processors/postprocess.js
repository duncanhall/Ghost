var Promise = require('bluebird');
var ExifImage = require('exif').ExifImage;
var sizeOf = require('image-size');


function postProcessImage (image) {
    return new Promise(function (resolve, reject) {
        try {
            new ExifImage({image: image.original}, function (error, exifData) {
                if (error) {
                    reject(error.message);
                } else {
                    sizeOf(image.original, function (err, dimensions) {
                        resolve({
                            url: image.url,
                            meta: exifData,
                            isPortrait: dimensions.height > dimensions.width
                        });
                    });
                }
            });
        } catch (error) {
            reject(error.message);
        }
    });
}

module.exports = postProcessImage;
