import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/Header.js';
import variables from '../utilities/variables.js';

export default ({ children, title = 'This is the default title' }) => (
  <site-content>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="/static/index.css" />
    </Head>

    <Header />

    <main-content>
      { children }
    </main-content>

    <footer>
      I`m here to stay
    </footer>
  </site-content>
)
