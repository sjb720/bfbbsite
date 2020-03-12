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
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <title>BfBB</title>
          <link rel='icon' href='favicon.ico' type='image/x-icon'/ >
          <link href='https://fonts.googleapis.com/css?family=Jockey One' rel='stylesheet'></link>
          <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet"></link>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          />
        </Head>
        <body style={{backgroundImage: `url('/backgroundBattle.png')`}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument