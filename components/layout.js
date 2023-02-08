import React from 'react';
import Head from 'next/head';
import Footer from './footer';
import PropTypes from 'prop-types';

export default function Layout({ children, title }) {
    const siteTitle = title;
        // ? `${title} - ${process.env.NEXT_PUBLIC_SITE_TITLE}`
        // : `${process.env.NEXT_PUBLIC_SITE_TITLE}`;

    return (
      <>
        <Head>
          <title>{siteTitle}</title>
          <link rel="icon" href="/byecom-favicon-32x32.png" />
          <meta name="description" content="Byecom" />
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              title
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} key="title" />
          <meta name="twitter:card" content="summary_large_image" />

          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <script
                    async
                    type='text/javascript'
                    src='/js/jquery-3.5.1.min.js'
                ></script>
                <script
                    async
                    src='/js/webflow.js'
                    type='text/javascript'
                ></script>
        </Head>

        {children}
        <Footer />
      </>
    );
}

Layout.propTypes = {
    children: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
};
