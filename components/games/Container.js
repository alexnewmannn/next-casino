import { Component } from 'react';
import Game from '../../components/games/Item.js'
import css from 'next/css';
import 'isomorphic-fetch';

const container = css({
  display: 'flex',
  width: '100%',
  flexFlow: 'row wrap'
})

export default class extends Component {
  getAlbums() {
    const items = this.props.data.albums.items;
    return items.map(album => {
      return <Game album={album} key={album.id} />
    });
  }

  render() {
    const Games = this.getAlbums();
    return(
      <games-container class={container}>
        {Games}
      </games-container>
    )
  }
}
