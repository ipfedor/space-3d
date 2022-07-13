// jshint -W097
// jshint undef: true, unused: true
/* globals require,__dirname,module*/

"use strict";

var webgl = require("./webgl.js");

module.exports.loadProgram = function(gl, source) {
    var noise4d = require("./glsl/classic-noise-4d.snip.js");
    source = source.replace("__noise4d__", noise4d);
    source = source.split("__split__");
    var program = new webgl.Program(gl, source[0], source[1]);
    return program;
};
