const getPosts = require('./getPosts');
const { title, description } = require('./meta');

module.exports = {
  title,
  description,
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  ],
  customData: {
    posts: getPosts(),
  },
};
