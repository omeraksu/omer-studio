import React from 'react';
import Helmet from 'react-helmet';

const SEO_DATA = {
  description: 'omeraksu design studio',
  title: 'omeraksu',
  url: 'https://omer.studio/',
  author: 'omeraksu',
  keywords: ['tasarım', 'yazılım', 'seo', 'dijital-pazarlama', 'sosyal-medya'],
  img: 'https://avatars0.githubusercontent.com/u/34721029?s=460&u=3e3d4d0187ed012d2e51981d50b2e91ac1c582b9&v=4',
  twitterId: '@aksuomeer',
  facebookId: '@oaomeraksu',
};

const SEO = () => {
  return (
    <Helmet>
      <meta property="fb:app_id" content={SEO_DATA.facebookId} />
      <meta property="og:title" content={SEO_DATA.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SEO_DATA.url} />
      <meta property="og:image" content={SEO_DATA.img} />
      <meta property="og:description" content={SEO_DATA.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={SEO_DATA.twitterId} />
      <meta name="twitter:site" content={SEO_DATA.url} />
      <meta name="twitter:title" content={SEO_DATA.title} />
      <meta name="twitter:description" content={SEO_DATA.description} />
      <meta name="twitter:domain" content={SEO_DATA.url} />
      <meta name="twitter:image:src" content={SEO_DATA.img} />

      <meta name="description" content={SEO_DATA.description} />
      <meta name="keywords" content={SEO_DATA.keywords.join(', ')} />
      <meta name="author" content={SEO_DATA.author} />
      <title>{SEO_DATA.title}</title>
      <html lang="en" />
    </Helmet>
  );
};

export default SEO;
