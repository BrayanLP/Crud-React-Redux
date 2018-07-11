import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Form, Input, Button } from 'antd';
import InputFieldLp from 'react-component-input-lp';
import { Field, reduxForm } from 'redux-form';
// import { InputFieldLp } from '../input';

// const { TextArea } = Input;
// const FormItem = Form.Item;

class FormCrud extends Component {
    componentWillReceiveProps = nextProps => {
        const { initialValues } = nextProps;
        // console.log(nextProps, 'willreceive');
        if (initialValues.id !== this.props.initialValues.id) {
            // console.log('entre');
            this.props.initialize(initialValues);
        }
    };
    componentDidMount = () => {
        console.log('entre al did mount');
        // this.props.initialize(this.props.initialValues);
    };

    render() {
        const { handleSubmit, initialValues } = this.props;
        return (
            <div>
                {/* {console.log(initialValues)} */}
                <form onSubmit={handleSubmit}>
                    <Field
                        name="id"
                        component={InputFieldLp}
                        type="number"
                        label="Identificador"
                        required
                        disabled="true"
                        // onChange={this.props.inChange}
                    />
                    <Field
                        name="title"
                        component={InputFieldLp}
                        type="text"
                        label="Titulo"
                    />
                    <Field
                        name="userId"
                        component={InputFieldLp}
                        type="text"
                        label="Identificador de Usuario"
                    />
                    <Field
                        name="body"
                        component={InputFieldLp}
                        type="text"
                        label="Descripción"
                    />
                    <button
                        type="submit"
                        className="login-form-button"
                        // value={this.props.saving ? 'Saving...' : 'Save'}
                        // disabled={props.saving}
                        // onClick={props.onSave}
                    >
                        Guardar
                    </button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'placeholder',
    enableReinitialize: true,
})(FormCrud);
