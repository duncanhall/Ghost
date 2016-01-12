
var preProcess = [],
    postProcess = [require('./postprocess')],
    processor;

processor = {
    process: function (save) {
        return preProcess.concat(save).concat(postProcess);
    }
};

module.exports = processor;
