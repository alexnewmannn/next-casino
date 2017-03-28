import { Component } from 'react';
import { dispatch, store } from 'redux';
import Game from '../item/index.js'
import 'isomorphic-fetch';

export default class extends Component {
  render() {
    const Games = this.props.data.items.map((album, id) => {
      return <Game album={album} key={id} />
    });

    return(
      <games-container>
        {Games}
      </games-container>
    )
  }
}
