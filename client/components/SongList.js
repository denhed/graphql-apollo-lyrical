import React, { Component } from 'react';
import gql from 'graphql-tag'; // för skapa query
import { graphql } from 'react-apollo'; // för att kunna binda component och query.

class SongList extends Component {

  renderSongs() {
    return this.props.data.songs.map(song => {
      return <li key={song.id} className="collection-item" >{song.title}</li>;
    });
  }

  render(){
    //console.log(this.props);
    // 1. första gången componenten renderas finns inte songs i props = undefined.
    // 2. vi har en loading property som flaggar att vi hämtar data från servern.

    if (this.props.data.loading) { return <div>Loading... </div> };

    return(
      <ul className="collection">
        {this.renderSongs()}
      </ul>
    );
  }
}

// definera en query.
const query = gql`
  {
    songs {
      id
      title
    }
  }
`;


export default graphql(query)(SongList);
