import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
const { TextArea } = Input;
const FormItem = Form.Item;

class FormCrud extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {/* <form> */}
                <FormItem
                    label="ID usuario"
                    labelCol={{ span: 7 }}
                    wrapperCol={{ span: 10 }}
                >
                    {/* <Input
                        name="id"
                        value={this.props.response.id}
                        onChange={this.props.inChange}
                    /> */}
                    <Input
                        name="userId"
                        value={this.props.response.userId}
                        onChange={this.props.inChange}
                    />
                </FormItem>
                <FormItem
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
                </FormItem>
                <Button
                    type="primary"
                    className="login-form-button"
                    // value={this.props.saving ? 'Saving...' : 'Save'}
                    disabled={this.props.saving}
                    onClick={this.props.onSave}
                >
                    Guardar
                </Button>
                {/* </form> */}
            </div>
        );
    }
}

FormCrud.propTypes = {
    response: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    inChange: PropTypes.func.isRequired,
    saving: PropTypes.bool,
};

export default FormCrud;
