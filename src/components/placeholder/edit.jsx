import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import { fecthCrudEdit, createCrud, updateCrud } from '../../actions/crud';
// import TextInput from '../input/index';
import FormCrud from './form';

class EditCrud extends Component {
    componentWillMount() {
        this.props.fecthCrudEdit(this.props.match.params.id);
    }
    submit = values => {
        if (!values.id) {
            return this.props.createCrud(values);
        } else {
            return this.props.updateCrud(values, values.id);
        }
    };
    render() {
        return (
            <div>
                <h2>Editando CRUD</h2>
                <FormCrud
                    // detalle={this.props.initialValues}
                    initialValues={this.props.initialValues}
                    onSubmit={this.submit}
                />
            </div>
        );
    }
}

EditCrud.propTypes = {
    initialValues: PropTypes.object,
};

const mapStateToProps = state => {
    // console.log(state);
    return {
        initialValues: state.reducer.editCrud,
    };
};

export default connect(
    mapStateToProps,
    { fecthCrudEdit, createCrud, updateCrud },
)(EditCrud);
