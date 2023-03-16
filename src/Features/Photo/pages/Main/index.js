import React from "react";
import { json, Link } from "react-router-dom";
import { Container } from "reactstrap";
import { useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";

import Banner from "../../../../GlobalComponents/Banner";
import Images from "../../../../GlobalContants/images";
import PhotoList from "../../components/PhotoList";
import './MainPage.scss'
import { removePhoto } from "../../redux/photoSlide";
import { stringify } from 'qs';

// MainPage.propTypes = {};

function MainPage(props) {

  const photoList = useSelector(state => {
    const list = state.photoReducer
    localStorage.setItem('photoList', JSON.stringify(list))
   return list
  })
    
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEditPhoto = (id) => {
    setTimeout(() => {
      navigate(`/photos/add/${id}`)
    }, 500)
  }

  const handleRemovePhoto = (id) => {
      dispatch(removePhoto(id));
  }
  
  return (
    <div>
      <div className="photo-main">
        <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

        <Container className="text-center"
        >
          <Link className="text-center__link"
           to="add"
          >
            Add new photo
          </Link>
        </Container>

        <PhotoList 
          photoList={photoList}
          handleEditPhoto={handleEditPhoto}
          handleRemovePhoto={handleRemovePhoto}
        />
      </div>
    </div>
  );
}
export default MainPage;
