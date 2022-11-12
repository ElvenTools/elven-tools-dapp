import Head from 'next/head';
import { FC, memo } from 'react';
import { defaultMetaTags, dappHostname } from '../config/dappUi';

export interface MetaHeadProps {
  metaTitle?: string;
  metaName?: string;
  metaDescription?: string;
  metaImage?: string;
  metaUrl?: string;
}

export const MetaHead: FC<MetaHeadProps> = memo(
  ({ metaTitle, metaDescription, metaName, metaImage, metaUrl }) => {
    return (
      <Head>
        <meta name="author" content="Gokai Labs | www.gokai.org" />
        <meta name="generator" content="Elven Tools | www.elven.tools" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />

        <title>{metaTitle || defaultMetaTags.title}</title>
        <meta
          name="description"
          content={metaDescription || defaultMetaTags.description}
          data-react-helmet="true"
        />
        <meta name="theme-color" content="#000000" />
        <link
          rel="shortcut icon"
          href={`${metaUrl || dappHostname}/favicon.ico`}
        />

        <link
          rel="icon"
          sizes="192x192"
          href={`${metaUrl || dappHostname}/logo192.png`}
        />
        <meta
          name="msapplication-square310x310logo"
          content={`${metaUrl || dappHostname}/logo512.png`}
        ></meta>
        <link
          rel="apple-touch-icon"
          href={`${metaUrl || dappHostname}/logo192.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href={`${metaUrl || dappHostname}/logo96.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href={`${metaUrl || dappHostname}/logo144.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href={`${metaUrl || dappHostname}/logo192.png`}
        />
        <link
          rel="mask-icon"
          href={`${metaUrl || dappHostname}/logo-G.svg`}
          color="#fff"
        />

        <link
          rel="manifest"
          href={`${metaUrl || dappHostname}/manifest.json`}
        />
        <meta
          name="application-name"
          content={metaName || defaultMetaTags.shortname}
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="apple-mobile-web-app-title"
          content={metaName || defaultMetaTags.shortname}
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />

        <meta property="og:type" content="website" />
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
          property="og:site_name"
          content={metaName || defaultMetaTags.shortname}
        />

        <meta name="twitter:card" content="summary_large_image" />
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
        <meta name="twitter:creator" content="@GhostVerseOrg" />

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
