const node = require('./data');
const replaceCommentsWithAnnotations = require('./replaceCommentsWithAnnotations');

console.log(JSON.stringify(replaceCommentsWithAnnotations(node.value)));
