import { Component } from 'react';
import Layout from '../components/layout/index';
import GamesContainer from '../components/games/container/index.js'

export default class extends Component {
  static async getInitialProps () {
    const res = await fetch('https://api.spotify.com/v1/artists/31jvzuB4ikftPQZJwrYfCF/albums?market=gb&album_type=album,single')
    this.data = await res.json()
    return { data: this.data }
  }

  render() {
    return(
      <Layout title="Home">
        <GamesContainer data={this.props.data} />
      </Layout>
    )
  }
}
