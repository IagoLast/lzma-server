function decode(input) {
    console.log(input);
    return new Promise(function (resolve, reject) {
        var LZMA = require('lzma').LZMA;
        var lzmaWorker = new LZMA();
        var lzmaInput = decodeURIComponent(input);
        var lzmaBuffer = new Buffer(lzmaInput, 'base64')
            .toString('binary')
            .split('')
            .map(function (c) {
                return c.charCodeAt(0) - 128
            });

        lzmaWorker.decompress(lzmaBuffer, function (result) {
            resolve(JSON.parse(result, null, 4));
        });
    });
}

module.exports = { decode };