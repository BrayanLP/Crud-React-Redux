import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fecthCrudEdit } from '../../actions/crud';
// import TextInput from '../input/index';
import FormCrud from './form';

class EditCrud extends Component {
    componentWillMount() {
        this.props.fecthCrudEdit(this.props.match.params.id);
    }
    btnSave(event) {
        event.preventDefault();
        this.setState({ saving: true });
    }
    submit = values => {
        console.log(values);
    };
    render() {
        return (
            <div>
                <h2>Editando CRUD</h2>
                <FormCrud
                    detalle={this.props.initialValues}
                    // initialValues={this.props.initialValues}
                    onSubmit={this.submit}
                />
            </div>
        );
    }
}

EditCrud.propTypes = {
    detalle: PropTypes.object,
};

const mapStateToProps = (state, props) => {
    return {
        initialValues: state.reducer.editCrud,
    };
};

export default connect(
    mapStateToProps,
    { fecthCrudEdit },
)(EditCrud);
