var HTMLParser = require('node-html-parser');

async function main() {
  const document = await getHTMLDocument('https://www.brainyquote.com/topics');
  return countTopic(document);
}

async function getHTMLDocument(url) {
  const response = await fetch(url);
  return await response.text();
}

function countTopic(document) {
  const root = HTMLParser.parse(document);
  const spanTags = root.getElementsByTagName('span');
  var count = 0;
  for (const spanTag of spanTags) {
    if (spanTag.classNames === 'topicContentName') {
      count++;
    }
  }
  return count;
}

main().then((res) => console.log(res));