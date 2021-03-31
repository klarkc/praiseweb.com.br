const getPosts = require('./getPosts');
const { title, description } = require('./meta');

module.exports = {
  title,
  description,
  lang: 'pt-BR',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.png',
      },
    ],
  ],
  customData: {
    posts: getPosts(),
  },
};
