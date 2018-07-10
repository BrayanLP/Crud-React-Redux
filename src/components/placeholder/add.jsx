import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createCrud } from '../../actions/crud';
import FormCrud from './form';
import { message, Button } from 'antd';

class AddCrud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: {
                title: '',
                body: '',
                userId: '',
            },
            isEditing: false,
            saving: false,
        };
        this.btnSave = this.btnSave.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    componentWillReceiveProps(nexProps) {
        this.setState({
            response: {
                title: '',
                body: '',
                userId: '',
            },
        });
    }

    onChange(event) {
        const field = event.target.name;
        const res = this.state.response;
        res[field] = event.target.value;
        return this.setState({ response: res });
    }
    btnSave(event) {
        event.preventDefault();
        this.setState({ saving: true });
        this.props.dispatch(createCrud(this.state.response));
        message.success('Agregado correctamente');
        this.props.history.push('/crud');
        // setTimeout(this.setState({ saving: false }, 1000));
    }
    render() {
        return (
            <div>
                <h2>Agregar CRUD</h2>
                {/* <input
                    type="text"
                    name="body"
                    value={this.state.response.body}
                    onChange={this.onChange}
                /> */}
                {/* {console.log(this.state.response)} */}
                <FormCrud
                    response={this.state.response}
                    onSave={this.btnSave}
                    inChange={this.onChange}
                    saving={this.state.saving}
                />
            </div>
        );
    }
}

AddCrud.propTypes = {
    // response: PropTypes.object.isRequired,
};

export default connect()(AddCrud);
