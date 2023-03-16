import React from 'react';
import { Outlet,  useResolvedPath} from 'react-router-dom';


// Photo.propTypes = {};

function Photo(props) {

  // const match = useResolvedPath("").pathname;
  // console.log(match)
  return (
    <>
         {/* < Routes>
        <Route path="/photos//*" element={<MainPage />} />
        <Route path={`${match.url}/add`} element={<AddEditPage />} />
        <Route path={`${match.url}/:photoId`} element={<AddEditPage />} />
      </ Routes> */}
      <Outlet />

    </>
  );
}

export default Photo;