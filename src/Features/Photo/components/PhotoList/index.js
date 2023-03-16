import React from 'react'
import { Col, Row } from 'reactstrap';


import PhotoItem from '../PhotoItem';

const PhotoList = (props) => {
    
  return (
    <Row
      style={{margin: '2rem 2rem'}}
    >

            {props.photoList.map((photo, index) => {
                return <Col 
                          key={photo.id}
                          xs="12" md="6" lg="3">
                            <PhotoItem 
                                photo={photo}
                                {...props}
                                id={photo.id}
                            />
                        </Col>
            })}

    </Row>
  )
}

export default PhotoList;