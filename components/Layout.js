import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/Header.js';

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <style jsx>{`
        html { font-size: 10px; }
        body { font-size: 1.6rem; padding: 0; margin: 0; background: #790074; }
      `}</style>
    </Head>

    <Header />

    <main-content>
      { children }
    </main-content>

    <footer>
      I`m here to stay
    </footer>
  </div>
)
