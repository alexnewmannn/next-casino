import { Component } from 'react';
import Layout from '../components/Layout';
import GamesContainer from '../components/games/Container.js'

export default class extends Component {
  static async getInitialProps () {
    const res = await fetch('https://api.spotify.com/v1/search?q=enter+shikari&type=album')
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
