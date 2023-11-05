import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<link rel='icon' href='/favicon.ico' />
					<meta name='description' content='' />
					<meta property='og:site_name' content='South West Economic Summit' />
					<meta property='og:description' content='' />
					<meta property='og:title' content='South West Economic Summit' />
					<meta name='twitter:card' content='summary_large_image' />
					<meta name='twitter:title' content='South West Economic Summit' />
					<meta name='twitter:description' content='' />
				</Head>
				<body className='bg-black antialiased'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
