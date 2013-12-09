// ----------------------------------------------------------------------------
//
// cigar-plugin-device
//
// Copyright 2013 Andrew Chilton. All Rights Reserved.
//
// License: MIT
//
// ----------------------------------------------------------------------------

// core
var exec = require('child_process').exec;

// ----------------------------------------------------------------------------

function convertToInt(field) {
    field = field.substr(0, field.length-1);
    return parseInt(field, 10);
}

module.exports = function(opts, callback) {
    // just get the df stats for this device
    opts.unit = opts.unit || 'G';
    exec('df -B' + opts.unit + ' ' + opts.device + ' | tail -1', function (err, stdout, stderr) {
        if (err) return callback(err);
        
        var fields = stdout.split(/\s+/);
        var data = {
            used  : convertToInt(fields[2]),
            free  : convertToInt(fields[3]),
            total : convertToInt(fields[1]),
        };
        callback(null, data);
    });

};

// ----------------------------------------------------------------------------
