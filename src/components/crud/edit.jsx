import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fecthCrudEdit } from '../../actions/crud';
// import { bindActionCreators } from 'redux';
import TextInput from '../input/index';
import { Input } from 'antd';
// import { Table, Divider, Icon } from 'antd';
// import { Link } from 'react-router-dom';
// const { Column } = Table;

class CrudEdit extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            editar: this.props.editar,
            isEditing: false,
        };
        this.updateCatState = this.updateCatState.bind(this);
        console.log(this.state);
    }
    componentWillMount() {
        this.props.fecthCrudEdit(this.props.match.params.id);
    }
    // onChange = (event) =>{
    //     const field = event.target.name;
    //     const cat = this.state.edit;
    //     console.log(field, cat);
    //     cat.field = event.target.value;
    //     return this.setState({ edit: cat });
    // }
    emitEmpty = () => {
        this.userNameInput.focus();
        this.setState({ title: '' });
    };

    onChangeUserName = e => {
        this.setState({ title: e.target.value });
        console.log(this.state);
    };
    updateCatState = event => {
        const field = event.target.name;
        const cat = this.state.editar;
        console.log(field, cat);
        cat[field] = event.target.value;
        return this.setState({ editar: cat });
    };
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
            <div>
                <h2>Edit de Crud - {this.props.match.params.id}</h2>
                {/* <TextInput
                    name="title"
                    label="titulo"
                    onChange={this.updateCatState}
                    value={this.props.editar.title}
                /> */}
                <Input
                    name="title"
                    placeholder="Basic usage"
                    value={this.state.editar.title}
                    onChange={this.updateCatState}
                />
                {/* <Input
                    placeholder="Hola"
                    // prefix={<Icon type={icon} />}
                    value={this.title}
                    onChange={this.onChangeUserName}
                    ref={node => (this.userNameInput = node)}
                /> */}
                {/* <Input placeholder="Basic usage" /> */}
                {/* <input type="text" value={this.props.editar.title} /> */}
                {/* <div key={this.props.data.id} className="post">
                    <form className="form" onSubmit={this.handleEdit}>
                        <input
                            required
                            type="text"
                            ref={input => (this.getTitle = input)}
                            defaultValue={this.props.data.title}
                            placeholder="Enter Post Title"
                        />
                        <br />
                        <br />
                        <textarea
                            required
                            rows="5"
                            ref={input => (this.getMessage = input)}
                            defaultValue={this.props.data.body}
                            cols="28"
                            placeholder="Enter Post"
                        />
                        <br />
                        <br />
                        <button>Update</button>
                    </form>
                </div> */}
            </div>
        );
    }
}

CrudEdit.propTypes = {
    editar: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    // let cat = { id: '', userId: '', body: '', title: '' };
    var res = {};
    // console.log(this.actions.fecthCrudEdit(ownProps.match.params.id));
    if (state.editCrud) {
        res = { title: state.editCrud.title };
        return { editar: res };
    }
    // this.setState({ edit: res });
};

// const mapDispatchToProps = dispatch => {
//     return {
//         actions: bindActionCreators(fecthCrudEdit, dispatch),
//     };
// };

export default connect(
    mapStateToProps,
    { fecthCrudEdit },
)(CrudEdit);
