function escapeHtml(text) {
  return text.replace(/"/g, '&quot;');
}

module.exports = function replaceCommentsWithAnnotations(value) {
  return value
    .replace(
      /<span class="token comment" spellcheck="true">\/\* @info (.*?)\*\/<\/span>\s*/g,
      (match, content) => {
        return `<span class="code-annotation" title="${escapeHtml(content)}">`;
      }
    )
    .replace(
      /<span class="token comment" spellcheck="true">\/\* @end \*\/<\/span>(\n *)?/g,
      '</span>'
    );
};
