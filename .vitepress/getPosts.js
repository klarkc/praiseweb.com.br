const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function getReadTime(text) {
  const wordsPerMinute = 200; // Average case.
  let textLength = text.split(" ").length; // Split by words
  if (textLength > 0) {
    return Math.ceil(textLength / wordsPerMinute);
  }
  return 0;
}

function formatDate(date) {
  let newDate = date;
  if (!(newDate instanceof Date)) {
    newDate = new Date(newDate);
  }
  newDate.setUTCHours(12);
  return {
    time: +newDate,
    string: newDate.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  };
}

module.exports = function getPosts(asFeed = false) {
  const postDir = path.resolve(__dirname, '../posts');
  return fs
    .readdirSync(postDir)
    .map((file) => {
      const src = fs.readFileSync(path.join(postDir, file), 'utf-8');
      const { data, content, excerpt } = matter(src, { excerpt: true });
      const post = {
        title: data.title,
        href: `/posts/${file.replace(/\.md$/, '.html')}`,
        date: formatDate(data.date),
        excerpt,
        readTime: getReadTime(content),
      };
      if (asFeed) {
        // only attach these when building the RSS feed to avoid bloating the
        // client bundle size
        post.data = data;
      }
      return post;
    })
    .sort((a, b) => b.date.time - a.date.time);
};
