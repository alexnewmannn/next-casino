import { Component } from 'react';
import InlineSVG from 'react-inlinesvg';
import variables from '../utilities/variables.js';
import css from 'next/css';

const header = css({
  background: variables.secondaryColor,
  borderBottom: '3px solid #fff'
});

const headerWrapper = css({
  margin: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '120rem',
  padding: '1rem 0'
});

export default class extends Component {
  render() {
    return (
      <header className={header}>
        <header-wrapper class={headerWrapper}>
          <style>{`
            svg { width: 20rem; }
          `}</style>
          <InlineSVG src={"../static/icon.svg"} />
        </header-wrapper>
      </header>
    )
  }
}
