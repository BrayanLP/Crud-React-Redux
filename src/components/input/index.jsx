import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import styles from './input.css';
const InputLp = ({
    type,
    name,
    label,
    onChange,
    value,
    placeholder,
    wrapperClass,
    labelClass,
    inputClass,
    errorClass,
    error,
    required,
    autoComplete,
}) => {
    return (
        <div
            className={
                wrapperClass ? 'form-group-lp ' + wrapperClass : 'form-group-lp'
            }
        >
            {label && <label className={labelClass}>{label}</label>}
            <input
                type={type}
                name={name}
                id={name}
                required={required ? required : false}
                className={
                    inputClass
                        ? 'form-control-lp ' + inputClass
                        : 'form-control-lp'
                }
                placeholder={placeholder}
                value={value ? value : ''}
                onChange={onChange}
                autoComplete={autoComplete ? autoComplete : 'off'}
            />
            {required && (
                <span
                    className={
                        errorClass
                            ? 'invalid-feedback hide ' + errorClass
                            : 'invalid-feedback hide'
                    }
                >
                    {error ? error : 'required field'}
                </span>
            )}
        </div>
    );
};

InputLp.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    autoComplete: PropTypes.string,
    icon: PropTypes.string,
    error: PropTypes.string,
    // value: PropTypes.,
};

export default InputLp;
