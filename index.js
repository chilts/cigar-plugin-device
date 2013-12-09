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

module.exports = function(options, callback) {
    // just get the df stats for this device
    options.unit = options.unit || 'G';
    exec('df -B' + options.unit + ' ' + options.device + ' | tail -1', function (err, stdout, stderr) {
        if (err) return callback(err);
        
        console.log(stdout);
        var fields = stdout.split(/\s+/);
        console.log(fields);

        var data = {
            used  : fields[2].substr(0, fields[2].length-1),
            free  : fields[3].substr(0, fields[3].length-1),
            total : fields[1].substr(0, fields[1].length-1),
        };
        console.log(data)

        callback(null, data);
    });

};

// ----------------------------------------------------------------------------
