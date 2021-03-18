import getPosts from './getPosts';
import { title, description } from './meta'

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
