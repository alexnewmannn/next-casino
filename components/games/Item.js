import { Component } from 'react';

export default class extends Component {
  render() {
    const album = this.props.album;
    console.log(album);
    return(
      <game-item>
        <img src={album.images[1].url} />
        <h3>{album.name}</h3>
      </game-item>
    )
  }
}
