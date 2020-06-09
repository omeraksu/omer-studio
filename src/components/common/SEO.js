import React from 'react';
import Helmet from 'react-helmet';

const SEO_DATA = {
  description: 'omeraksu dijital tasarım stüdyosu.',
  title: 'omeraksu studio',
  url: '',
  author: 'omeraksu',
  keywords: ['tasarım', 'yazılım', 'seo', 'dijital-pazarlama', 'sosyal-medya'],
  img: 'https://scontent.fadb2-2.fna.fbcdn.net/v/t1.0-9/48373522_10215630138657914_8817789324381650944_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=FWcK0XucnUIAX_5OpNx&_nc_ht=scontent.fadb2-2.fna&oh=946809dc7e2dbbe3c626a2619d43cf99&oe=5F04F2E7',
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
