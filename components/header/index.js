import { Component } from 'react';
import InlineSVG from 'react-inlinesvg';

export default class extends Component {
  render() {
    return (
      <header>
        <header-wrapper>
          <style>{`
            svg { width: 20rem; }
          `}</style>
          <InlineSVG src={"./static/icon.svg"} />
        </header-wrapper>
      </header>
    )
  }
}
