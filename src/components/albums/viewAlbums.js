import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { showAlbums } from '../../actions/albums';

class ViewAlbums extends Component {

  componentWillMount() {
    this.props.showAlbums();
  }
  renderList() {
    return this.props.albums.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.userId}</td>
          <td>{user.title}</td>
        </tr>
      )
    })
  }
    render() {
      return (
        <div > 
          <h2>Lista de Albums</h2>
          <table border='1'>
          <thead>
            <tr>
              <th>ID</th>
              <th>ID Usuario</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            { this.renderList() }  
            { console.log(this.props.albums)}
          </tbody>
        </table>
        </div>
      );
    }
  }
  
const mapStateToProps = state =>{
  return {
    albums: state.album.data
  }
}

export default connect(mapStateToProps, {showAlbums})(ViewAlbums)