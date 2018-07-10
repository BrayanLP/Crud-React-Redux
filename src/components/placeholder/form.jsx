import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import { Field, reduxForm } from 'redux-form';
import InputLp from '../input';

const { TextArea } = Input;
const FormItem = Form.Item;
const renderField = field => (
    <div className="input-row">
        <input {...field.input} />
        {field.meta.touched &&
            field.meta.error && (
                <span className="error">{field.meta.error}</span>
            )}
    </div>
);

class FormCrud extends Component {
    componentWillReceiveProps = nextProps => {
        const { detalle } = nextProps;
        this.props.initialize(detalle);
    };

    render() {
        const { handleSubmit, detalle } = this.props;
        return (
            <div>
                {console.log(this.props)}
                <form onSubmit={handleSubmit}>
                    {/* <Field name="myField" component={renderField} /> */}
                    {/* <InputLp
                    type="number"
                    name="id"
                    label="ID: "
                    onChange={props.inChange}
                    value={props.response.id}
                    required="true"
                    errorClass="error-class"
                /> */}
                    <Field
                        name="id"
                        component="input"
                        type="number"
                        autoComplete="off"
                        // onChange={this.props.inChange}
                    />
                    <Field
                        name="title"
                        component="input"
                        type="text"
                        autoComplete="off"
                    />
                    <Field
                        name="userId"
                        component="input"
                        type="text"
                        autoComplete="off"
                    />
                    <Field
                        name="body"
                        component="input"
                        type="text"
                        autoComplete="off"
                    />
                    {/* <InputLp
                    type="number"
                    name="userId"
                    label="ID Usuario: "
                    onChange={this.props.inChange}
                    value={this.props.response.userId}
                />
                <InputLp
                    type="text"
                    label="Titulo"
                    name="title"
                    onChange={this.props.inChange}
                    value={this.props.response.title}
                /> */}
                    {/* <form> */}

                    {/* <FormItem
                    label="Titulo"
                    labelCol={{ span: 7 }}
                    wrapperCol={{ span: 10 }}
                >
                    <Input
                        name="title"
                        value={this.props.response.title}
                        onChange={this.props.inChange}
                    />
                </FormItem>
                <FormItem
                    label="Mensaje"
                    labelCol={{ span: 7 }}
                    wrapperCol={{ span: 10 }}
                >
                    <TextArea
                        rows={4}
                        name="body"
                        value={this.props.response.body}
                        onChange={this.props.inChange}
                    />
                </FormItem> */}
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

// FormCrud.propTypes = {
//     response: PropTypes.object.isRequired,
//     onSave: PropTypes.func.isRequired,
//     inChange: PropTypes.func.isRequired,
//     saving: PropTypes.bool,
// };

export default reduxForm({
    form: 'placeholder',
    enableReinitialize: true,
})(FormCrud);
