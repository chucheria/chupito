var imageData = [{
    "filename": "2019-05-22 103740.jpg",
    "aspectRatio": 0.5625
}, {
    "filename": "2019-05-02 150446.jpg",
    "aspectRatio": 0.75
}, {
    "filename": "2019-05-02 162328.jpg",
    "aspectRatio": 1.7777
}, {
    "filename": "2019-05-11 114658.jpg",
    "aspectRatio": 0.5625
}, {
    "filename": "2019-05-11 133612.jpg",
    "aspectRatio": 1
}, {
    "filename": "2019-05-12 113914.jpg",
    "aspectRatio": 0.5625
}, {
    "filename": "2019-05-15 155712.jpg",
    "aspectRatio": 0.5625
}, {
    "filename": "2019-05-22 114216.jpg",
    "aspectRatio": 0.5625
}, {
    "filename": "2019-05-26 191912.jpg",
    "aspectRatio": 1.7777
}, {
    "filename": "2019-05-30 192856.jpg",
    "aspectRatio": 1.7777
}, {
    "filename": "2019-05-31 080320.jpg",
    "aspectRatio": 1.7777
}, {
    "filename": "2019-06-05 163142.jpg",
    "aspectRatio": 1.7777
}, {
    "filename": "2019-06-09 114700.jpg",
    "aspectRatio": 0.5625
}, {
    "filename": "2019-06-15 194318.jpg",
    "aspectRatio": 0.5625
}, {
    "filename": "2019-06-22 113750.jpg",
    "aspectRatio": 0.75
}, {
    "filename": "2019-06-26 194456.jpg",
    "aspectRatio": 1
}, {
    "filename": "2019-06-30 092024.jpg",
    "aspectRatio": 0.5625
}, {
    "filename": "2019-07-06 153008.jpg",
    "aspectRatio": 0.5625
}, {
    "filename": "2019-07-06 160458.jpg",
    "aspectRatio": 0.5625
}, {
    "filename": "2019-07-07 092932.jpg",
    "aspectRatio": 0.5625
}, {
    "filename": "2019-07-08 173432.jpg",
    "aspectRatio": 0.5625
}, {
    "filename": "2019-07-08 173448.jpg",
    "aspectRatio": 0.75
}, {
    "filename": "2019-07-09 062838.jpg",
    "aspectRatio": 0.5625
}, {
    "filename": "2019-07-09 203106.jpg",
    "aspectRatio": 1.33
}, {
    "filename": "2019-07-12 091408.jpg",
    "aspectRatio": 0.5625
}, {
    "filename": "2019-07-12 201522.jpg",
    "aspectRatio": 1.33
}, {
    "filename": "2019-07-12 201523.jpg",
    "aspectRatio": 0.5625
}];
var pig = new Pig(imageData, {
    urlForSize: function(filename, size) {
        return 'http://127.0.0.1:5500/img/' + size + '/' + filename;
    }
}).enable();