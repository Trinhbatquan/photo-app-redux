import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import util from "../../../../common/util";


import Banner from "../../../../GlobalComponents/Banner";
import PhotoForm from "../../components/PhotoForm";
import {addPhoto, updatePhoto} from '../../redux/photoSlide'
import "./style.scss";

// AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let isEdit = false;
  let initialValues = {};
  const photoIdEdit = useParams(); //obj {photId : "111111"}
  const photoEdit = useSelector(state => state.photoReducer.find(photo => photo.id === parseInt(photoIdEdit.photoId)))
  if (photoEdit) {
    isEdit = true;
    initialValues = {
      title: photoEdit.title,
      categoryId: photoEdit.categoryId,
      photo: photoEdit.photo
    }
  } else {
    initialValues = {
      title: '',
      categoryId: null,
      photo: '',
    }
  }
  




  const handleSubmitRedux = (values) => {
    const customValues = {
      id: util(10000, 99999),
      ...values
    }
      return new Promise (resolve => {
        setTimeout(() => {
          if (!isEdit) {
            dispatch(addPhoto(customValues))
          } else {
            const photoUpdateValue = {
              id: +photoIdEdit.photoId,
              ...values
            }
            dispatch(updatePhoto(photoUpdateValue))
          }
          navigate("/photos")
          resolve()
        }, 1000)

        
      })
  }


  return (
    <div>
      <div className="photo-edit">
        <Banner title="Pick your amazing photo 😎" />

        <div className="photo-edit__form" >
          <PhotoForm
            isEdit={isEdit}
            initialValues={initialValues}
            onSubmit={handleSubmitRedux}
          />
        </div>
      </div>
    </div>
  );
}
export default AddEditPage;
