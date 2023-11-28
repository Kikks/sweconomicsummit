import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <meta property="og:site_name" content="South West Economic Summit" />
          <meta property="og:description" content="" />
          <meta property="og:title" content="South West Economic Summit" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="South West Economic Summit" />
          <meta name="twitter:description" content="" />
        </Head>
        <body className="bg-white antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
