const visit = require('unist-util-visit');

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'link', node => {
    const html = `
        <a href="${node.url}" target="_blank" rel="noopener">
          ${node.children[0].value}
        </a>
      `;
    node.type = 'html';
    node.value = html;
  });
  return markdownAST;
};
