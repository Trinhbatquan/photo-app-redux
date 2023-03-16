import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'reactstrap';
import './RandomPhoto.scss';

RandomPhoto.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  onImageUrlChange: PropTypes.func,
  onBlur: PropTypes.func,
};

RandomPhoto.defaultProps = {
  name: '',
  imageUrl: '',
  onImageUrlChange: null,
  onBlur: null,
}

const getRandomImageUrl = () => {
  const randomId = Math.trunc(Math.random() * 2000);
  return `https://picsum.photos/id/${randomId}/300/300`;
}

function RandomPhoto(props) {
  const { name, imageUrl, onImageUrlChange, onBlur } = props;

  const handleRandomPhotoClick = () => {
    if (onImageUrlChange) {
      const randomImageUrl = getRandomImageUrl();
      onImageUrlChange(randomImageUrl)
    }
  }


  return (
    <div className="random-photo">
      <div className="random-photo__button">
        <Button
          outline
          name={name}
          color="primary"
          onBlur={onBlur}
          onClick={handleRandomPhotoClick}
        //   thực ra là onChange nhưng với Button là onClick
        >
          Random a photo
        </Button>
      </div>

      <div className="random-photo__photo">
        {imageUrl && <img 
                        src={imageUrl} 
                        alt="Ooops ... not found. Please click random again!" 
                        onError={handleRandomPhotoClick}

                      />}
      </div>
    </div>
  );
}

export default RandomPhoto;