var test = require('tape');

var mem = require('./index.js');

test('Basic', function(t) {
    mem({ device : '/dev/sda1' }, function(err, res) {
        t.ok(!err, 'There is no error');
        t.ok(res.used, 'used is there');
        t.ok(res.free, 'free is there');
        t.ok(res.total, 'total is there');
        t.end();
    });
});
