import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';
const TextInput = ({
    // name,
    label,
    onChange,
    // placeholder,
    value,
    // error,
    // icon,
    // type = 'text',
}) => {
    let wrapperClass = 'form-group';
    // if (error && error.length > 0) {
    //     wrapperClass += ' has-error';
    // }
    return (
        <div className={wrapperClass}>
            {/* <label htmlFor={name}>{label}</label>
            <div className="field">
                <input
                    type={type}
                    name={name}
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    onChange={this.onChangeUserName}
                />
                {error && <div className="alert alert-danger">{error}</div>}
            </div> */}
            <Input
                placeholder={label}
                // prefix={<Icon type={icon} />}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

TextInput.propTypes = {
    // name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    // onChange: PropTypes.func.isRequired,
    // placeholder: PropTypes.string,
    value: PropTypes.string,
    // icon: PropTypes.string,
    // error: PropTypes.string,
};

export default TextInput;
