import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { InputField, TextAreaField } from 'react-multiple-component-lp';
import { Field, reduxForm } from 'redux-form';
import { SubmissionError } from 'redux-form';

const required = value => (value ? undefined : 'Campo Requerido');
const maxLength = max => value =>
    value && value.length > max
        ? `Must be ${max} characters or less`
        : undefined;
const maxLength15 = maxLength(15);
const number = value =>
    value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined;
const minValue2 = minValue(2);
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined;
const tooOld = value =>
    value && value > 65 ? 'You might be too old for this' : undefined;
const aol = value =>
    value && /.+@aol\.com/.test(value)
        ? 'Really? You still use AOL for your email?'
        : undefined;

class FormComponent extends Component {
    componentWillReceiveProps = nextProps => {
        const { initialValues } = nextProps;
        if (initialValues.id !== this.props.initialValues.id) {
            this.props.initialize(initialValues);
        } else {
            // console.log('entre');
        }
    };
    componentDidMount = () => {
        // console.log('entre al did mount');
    };

    render() {
        const {
            handleSubmit,
            initialValues,
            // nameButton,
            // titleForm,
            pristine,
            submitting,
        } = this.props;
        return (
            <div>
                <h2>
                    {initialValues.id
                        ? 'Editar Placeholder'
                        : 'Crear Placeholder'}
                </h2>
                <form onSubmit={handleSubmit}>
                    <Field
                        name="title"
                        component={InputField}
                        type="text"
                        label="Titulo *"
                        validate={[required]}
                    />
                    <Field
                        name="body"
                        component={TextAreaField}
                        type="text"
                        label="Descripción *"
                        validate={[required]}
                    />
                    <button
                        type="submit"
                        className="login-form-button"
                        disabled={pristine || submitting ? true : false}
                    >
                        {initialValues.id ? 'Actualizar' : 'Agregar'}
                    </button>
                </form>
            </div>
        );
    }
}

FormComponent.propTypes = {
    handleSubmit: PropTypes.func,
    initialValues: PropTypes.object,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool,
};

export default reduxForm({
    form: 'placeholder',
    enableReinitialize: true,
})(FormComponent);
