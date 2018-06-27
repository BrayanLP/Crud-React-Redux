import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fecthCrudEdit } from '../../actions/crud';
// import TextInput from '../input/index';
import FormCrud from './form';

class EditCrud extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            editar: {},
            isEditing: false,
            saving: false,
        };
        this.btnSave = this.btnSave.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    componentWillMount() {
        this.props.fecthCrudEdit(this.props.match.params.id);
    }
    componentWillReceiveProps(nexProps) {
        this.setState(
            {
                editar: nexProps.editar,
            },
            () => {
                console.log(this.state);
            },
        );
    }
    onChange(event) {
        const field = event.target.name;
        const res = this.state.editar;
        res[field] = event.target.value;
        return this.setState({ editar: res });
    }
    btnSave(event) {
        event.preventDefault();
        this.setState({ saving: true });
        // this.props.actions.updateCat(this.state.cat);
    }
    // handleEdit =e => {
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
                <h2>Editando CRUD</h2>
                <FormCrud
                    response={this.state.editar}
                    onSave={this.btnSave}
                    inChange={this.onChange}
                    saving={this.state.saving}
                />
            </div>
        );
    }
}

EditCrud.propTypes = {
    response: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    var res = {};
    if (state.editCrud) {
        res = state.editCrud;
        console.log(res);
        return { editar: res };
    }
};

export default connect(
    mapStateToProps,
    { fecthCrudEdit },
)(EditCrud);
