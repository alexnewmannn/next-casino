import { Component } from 'react';
import Like from '../../like/index.js';

export default class extends Component {
  render() {
    const album = this.props.album;
    return(
      <game-item>
        <img src={album.images[1].url} />
        <h3>{album.name}</h3>
        <Like />
      </game-item>
    )
  }
}
