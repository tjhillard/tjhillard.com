const visit = require('unist-util-visit');

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'image', node => {
    const html = `
        <img src="${node.url}" alt="${node.alt}" loading="lazy" />
      `;
    node.type = 'html';
    node.value = html;
  });
  return markdownAST;
};
