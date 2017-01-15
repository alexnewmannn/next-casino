import { Component } from 'react';
import InlineSVG from 'react-inlinesvg';

export default class extends Component {
  render() {
    return (
      <header>
        <header-wrapper>
          <style jsx>{`
            svg { width: 20rem; }
            header-wrapper {
              margin: auto; display: flex; justify-content: space-between;
              max-width: 120rem; padding: 1rem 0;
            }
            header { background: #4F2EB7; border-bottom: 3px solid white;}
          `}</style>
          <InlineSVG style="background: red" src={"../static/icon.svg"} />
        </header-wrapper>
      </header>
    )
  }
}
