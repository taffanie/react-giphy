import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "X4M6homF66qFq"
    }
  }

  search = (query) => {
    // TODO: API call
    giphy('K72FmGw7nrQTfb7KLc0Z2zDMp4ACy1IF').search({
    q: query,
    rating: 'g',
    limit: 10
}, (error, result) => {
    // Res contains gif data!
    this.setState({
      gifs: result.data
    });
});
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs = {this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
