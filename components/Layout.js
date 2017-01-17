import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/Header.js';
import variables from '../utilities/variables.js';
import css from 'next/css';

const container = css({
  display: 'flex',
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '120rem',
  width: '100%',
  padding: '1rem'
});

const mainContent = css({
  background: '#fff',
  flex: 1,
  marginTop: 0,
  marginBottom: 0
});

const siteContent = css({
  display: 'flex',
  justifyContent: 'flex-start',
  flex: 1,
  flexDirection: 'column'
});

const footer = css({
  background: '#fff',
  marginTop: 'auto',
  borderTop: '2px solid #eaeaea'
})

export default ({ children, title = 'This is the default title' }) => (
  <site-content class={siteContent}>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <style>{`
        html { font-size: 10px; }
        *, *::before, *::after { box-sizing: border-box; }
        body { font-size: 1.6rem; padding: 0; margin: 0; background: #f7f7f7; }
        body > div { min-height: 100vh; display: flex; }
      `}</style>
    </Head>

    <Header />

    <main-content class={`${mainContent} ${container}`}>
      { children }
    </main-content>

    <footer className={`${footer} ${container}`}>
      I`m here to stay
    </footer>
  </site-content>
)
