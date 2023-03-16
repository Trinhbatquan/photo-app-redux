import RandomPhoto from '../../GlobalComponents/RandomPhoto';
import PropTypes from 'prop-types';
import React from 'react';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import { ErrorMessage } from 'formik';

PhotoRandomField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
};

PhotoRandomField.defaultProps = {
  label: '',
}

function PhotoRandomField(props) {
  const {  field, form, label } = props;
  const { name, value, onBlur } = field;

  const handleImageUrlChange = (newImageUrl) => {
    form.setFieldValue(name, newImageUrl)
  }
  //newImageUrl là url random mới của ảnh và gọi form + setValue => render lại 
  //FastField này với value là name + đường dần https, cái này dẽ được truyền xuống 
  //và truyền vào src của thẻ url


  const showError = form.errors[name] || form.touched[name];
  return (
    <FormGroup>
      {label && <Label for={name} style={{fontWeight: 'bold'}}>{label}</Label>}

      <RandomPhoto
        name={name}
        imageUrl={value}
        //value là đường dẫn https của img
        onImageUrlChange={handleImageUrlChange}
        onRandomButtonBlur={onBlur}
      />
    <div className={showError ? 'is-invalid' : ''}></div>
    <ErrorMessage name={name} component={FormFeedback}/>

    </FormGroup>
  );
}

export default PhotoRandomField;