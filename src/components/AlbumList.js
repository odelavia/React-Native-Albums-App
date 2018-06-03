import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({albums: response.data}));
  }

  renderAlbums() {
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    console.log(this.state)
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
        {this.renderAlbums()}
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    shadowColor: '#000',
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

export default AlbumList;