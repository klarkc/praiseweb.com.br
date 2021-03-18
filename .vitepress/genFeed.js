import fs from 'fs';
import path from 'path';
import { Feed } from 'feed';
import getPosts from './getPosts.js';
import { title, description } from './meta.js';

const url = 'https://praiseweb.com.br';

const feed = new Feed({
  title,
  description,
  id: url,
  link: url,
  language: 'pt',
  image: `${url}/logo.jpg`,
  favicon: `${url}/favicon.ico`,
  copyright: 'Copyright (c) 2021-present, Walker Leite',
});

getPosts(true).forEach((post) => {
  const file = path.resolve(__dirname, `dist${post.href}`);
  const rendered = fs.readFileSync(file, 'utf-8');
  const content = rendered.match(
    /<div class="prose[^<>]+>([\s\S]*)<\/div><\/div><footer/,
  );

  feed.addItem({
    title: post.title,
    id: `${url}${post.href}`,
    link: `${url}${post.href}`,
    description: post.excerpt,
    content: content[1],
    author: [
      {
        name: post.data.author,
        link: post.data.twitter
          ? `https://twitter.com/${post.data.twitter}`
          : undefined,
      },
    ],
    date: post.data.date,
  });
});

fs.writeFileSync(path.resolve(__dirname, 'dist/feed.rss'), feed.rss2());
