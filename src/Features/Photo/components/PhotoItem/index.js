import React from 'react'
import { Button } from 'reactstrap';
import './PhotoItem.scss';

 const PhotoItem = (props) => {
    const {photo, handleEditPhoto, handleRemovePhoto, id} = props


    
      return (
        <div className="photo">
          <img src={photo.photo} alt={photo.title} />
    
          <div className="photo__overlay">
            <h3 className="photo__title">{photo.title}</h3>
    
            <div className="photo__actions">
              <div>
                <Button outline size="sm" color="light" onClick={() => handleEditPhoto(id)}>
                  Edit
                </Button>
              </div>
    
              <div>
                <Button outline size="sm" color="danger" onClick={() => handleRemovePhoto(id)}>
                  Remove
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
}

export default PhotoItem;
