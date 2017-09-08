'use strict';

var node = require('./data');
var replaceCommentsWithAnnotations = require('./replaceCommentsWithAnnotations');

console.log(JSON.stringify(replaceCommentsWithAnnotations(node.value)));