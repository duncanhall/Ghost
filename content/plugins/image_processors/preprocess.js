var Promise = require('bluebird');

function postProcessImage (image) {
    return new Promise(function (resolve, reject) {
        var data = image;
        if (typeof image === 'string') {
            data = {
                url: image
            }
        }
        data.meta = 'STUFF';
        resolve(data);
    });
}

module.exports = postProcessImage;
