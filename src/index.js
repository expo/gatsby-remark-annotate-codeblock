const visit = require(`unist-util-visit`);
const replaceCommentsWithAnnotations = require('./replaceCommentsWithAnnotations');

function patch(context, key, value) {
  if (!context[key]) {
    context[key] = value;
  }

  return context[key];
}

module.exports = ({ markdownAST }) => {
  visit(markdownAST, `html`, node => {
    if (node.value.includes('gatsby-highlight')) {
      node.value = replaceCommentsWithAnnotations(node.value);
    }
  });
};
