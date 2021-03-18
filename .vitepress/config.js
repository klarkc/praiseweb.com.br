import getPosts from './getPosts';

export default {
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
