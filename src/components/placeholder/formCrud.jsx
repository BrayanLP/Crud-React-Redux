import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import { fecthCrudEdit, createCrud, updateCrud } from '../../actions/crud';
import { message } from 'antd';
import FormComponent from './formComponent';

class FormCrud extends Component {
    componentWillMount() {
        console.log(this.props.match.params.id);
        let id = this.props.match.params.id;
        if (id) {
            this.props.fecthCrudEdit(this.props.match.params.id);
        }
    }
    submit = values => {
        values.id = Number(values.id);
        values.userId = Number(values.userId);
        console.log(values);
        if (!values.id) {
            console.log('estoy agregando');
            message.success('Creado Correctamente');
            this.props.history.push('/');
            return this.props.createCrud(values);
        } else {
            message.success('Actualizado Correctamente');
            this.props.history.push('/');
            return this.props.updateCrud(values, values.id);
        }
    };
    render() {
        return (
            <div>
                <FormComponent
                    initialValues={this.props.initialValues}
                    onSubmit={this.submit}
                    // nameButton="Actualizar"
                    // titleForm="Editar Placeholder"
                />
            </div>
        );
    }
}

FormCrud.propTypes = {
    initialValues: PropTypes.object,
    // nameButton: PropTypes.string,
    // titleForm: PropTypes.string,
};

const mapStateToProps = state => {
    console.log(state);
    return {
        initialValues: state.reducer.editCrud,
    };
};

export default connect(
    mapStateToProps,
    { fecthCrudEdit, createCrud, updateCrud },
)(FormCrud);
