import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocumente extends Document {
  render() {
      return (
        <Html>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />

            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;600&display=swap" rel="stylesheet" />

            <title>Ab Store</title>
          </Head>

          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
  }
}