import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const props = await Document.getInitialProps(ctx)
  }

  render () {
    return (
     <html>
       <Head>

       </Head>
       <body className="custom_class">
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}
