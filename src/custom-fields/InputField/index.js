




import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false,
}

function InputField(props) {
  const {
    field, form,
    type, label, placeholder, disabled,
  } = props;
  const { name, value, onChange, onBlur} = field;
  const showError = form.errors[name] && form.touched[name];
  console.log(showError)

  return (
    <FormGroup>
      {label && <Label for={name} style={{fontWeight: 'bold'}}>{label}</Label>}

      <Input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}

        type={type}
        disabled={disabled}
        placeholder={placeholder}
        invalid={showError ? true : false}
      />

      {/* {showError ? <FormFeedback>{showError}</FormFeedback> : ''} */}
      {/* FormFeedback là 1 component UI của reactstrap, nó chỉ chạy khi thẻ trước nó (ở đây
      là input có className là is-invalid, tuy nhiên input của reactstrap có prop là invalid nên 
      dùng luôn) */}

      {/* Cach 2 dùng component UI là ErrorMessage của formik, nó có name nên chạy vào props errors
      của formik xem giá trị trả ra ở đó là gì, nếu có thì render là component*/}
      <ErrorMessage name={name} component={FormFeedback}/>
    </FormGroup>
  );
}

export default InputField;