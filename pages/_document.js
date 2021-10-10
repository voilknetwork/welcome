import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head> 
        </Head>
        <body className="saas-classic" data-spy="scroll" data-target=".s2-main-navigation" data-offset="80">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument