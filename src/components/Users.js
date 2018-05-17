import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { showUsers } from '../actions/users';

class Users extends Component {

  componentWillMount() {
    this.props.showUsers();
  }
  renderUsersList() {
    return this.props.users.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      )
    })
  }
    render() {
      return (
        <div > 
          <h2>Lista de usuarios</h2>
          <table border='1'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            { this.renderUsersList() }  
          </tbody>
        </table>
        </div>
      );
    }
  }
  
const mapStateToProps = state =>{
  return {
    users: state.listUsers.data
  }
}

export default connect(mapStateToProps, {showUsers})(Users)