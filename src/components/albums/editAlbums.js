import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editAlbums } from '../../actions/albums';
import { Divider } from 'antd';

class EditAlbums extends Component {
    componentWillMount() {
        this.props.editAlbums(this.props.match.params.id);
    }
    // handleEdit = e => {
    //     e.preventDefault();
    //     const newTitle = this.getTitle.value;
    //     const newMessage = this.getMessage.value;
    //     const data = {
    //         newTitle,
    //         newMessage,
    //     };
    //     this.props.dispatch({
    //         type: 'UPDATE',
    //         id: this.props.albums.id,
    //         data: data,
    //     });
    // };
    render() {
        return (
            <div> Hola {this.props.match.params.id}</div>
            // <div key={this.props.albums.id} className="post">
            //     <form className="form" onSubmit={this.handleEdit}>
            //         <input
            //             required
            //             type="text"
            //             ref={input => (this.getTitle = input)}
            //             defaultValue={this.props.albums.title}
            //             placeholder="Enter Post Title"
            //         />
            //         <br />
            //         <br />
            //         <textarea
            //             required
            //             rows="5"
            //             ref={input => (this.getMessage = input)}
            //             defaultValue={this.props.albums.message}
            //             cols="28"
            //             placeholder="Enter Post"
            //         />
            //         <br />
            //         <br />
            //         <button>Update</button>
            //     </form>
            // </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        albums: state.albums.data,
    };
};

export default connect(mapStateToProps, { editAlbums })(EditAlbums);
