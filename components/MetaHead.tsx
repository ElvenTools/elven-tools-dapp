import Head from 'next/head';
import { FC, memo } from 'react';
import { defaultMetaTags, dappHostname } from '../config/dappUi';

export interface MetaHeadProps {
  metaTitle?: string;
  metaDescription?: string;
  metaImage?: string;
  metaUrl?: string;
}

export const MetaHead: FC<MetaHeadProps> = memo(
  ({ metaTitle, metaDescription, metaImage, metaUrl }) => {
    return (
      <Head>
        <meta name="author" content="Elven Tools | www.elven.tools"></meta>
        <link rel="icon" sizes="192x192" href="https://ghostverse.org/logo192.png" />
        <meta
          name="msapplication-square310x310logo"
          content="https://ghostverse.org/logo512.png"
        ></meta>
        <link rel="apple-touch-icon" href="https://ghostverse.org/logo192.png" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="https://ghostverse.org/logo96.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="https://ghostverse.org/logo144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="https://ghostverse.org/logo192.png"
        />
        <meta name="theme-color" content="#000000" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        <title>{metaTitle || defaultMetaTags.title}</title>
        <meta
          name="description"
          content={metaDescription || defaultMetaTags.description}
          data-react-helmet="true"
        />
        <meta
          property="og:title"
          content={metaTitle || defaultMetaTags.shortname}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={metaDescription || defaultMetaTags.description}
          data-react-helmet="true"
        />
        <meta
          property="og:image"
          content={metaImage || defaultMetaTags.image}
          data-react-helmet="true"
        />
        <meta
          property="og:url"
          content={metaUrl || dappHostname}
          data-react-helmet="true"
        />
        <meta
          name="twitter:title"
          content={metaTitle || defaultMetaTags.shortname}
          data-react-helmet="true"
        />
        <meta
          name="twitter:description"
          content={metaDescription || defaultMetaTags.description}
          data-react-helmet="true"
        />
        <meta
          name="twitter:image"
          content={metaImage || defaultMetaTags.image}
          data-react-helmet="true"
        />
        <meta
          name="twitter:url"
          content={metaUrl || dappHostname}
          data-react-helmet="true"
        />

        <meta
          name="google-site-verification"
          content="PCHvSTFxg13Czg4ibk7D0ubEJ81ps6zhiqW-w9F5xp0"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
    );
  }
);

MetaHead.displayName = 'MetaHead';
