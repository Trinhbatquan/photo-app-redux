

import React, { Suspense, useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import './App.scss';
import Header from "./GlobalComponents/Header";
import NotFound from "./GlobalComponents/NotFound";
import MainPage from './Features/Photo/pages/Main'
import AddEditPage from "./Features/Photo/pages/AddEdit";
import photoAPI from "./api/photoApi";
import SignIn from "Features/Sign-in/components/SignIn";
import { Button } from 'reactstrap';





const Photo = React.lazy(() => import("./Features/Photo"));


function App() {

  //lấy data bằng axios
  const [data, setData] = useState([]);



  //feetch data bằng axios
  const fetchDataList = async () => {
    console.log(10)
    try {
      const params = {
        _page: 1,
        _limit: 10,

      };
      const response = await photoAPI.getAll(params);
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.log('Failed to fetch product list: ', error);
    }
  }


  return (
    <div className="photo-app" 
         style={
                  {maxWidth: '80rem', 
                  margin: "0 auto",
                  boxShadow: '0 0 7px 5px rgb(145, 99, 99)'
                  }
                }
    >
      <Suspense fallback={<div>Loading ...</div>}>
      <BrowserRouter>
        <Header />
        {/* <Button onClick={getList}>Gets</Button> */}
        <Routes>
          <Route path="photos" element={<Photo />}>
            <Route path="sign_in" element={<SignIn />} />
            <Route path="" element={<MainPage />}/>
            <Route path="add" element={<AddEditPage />} />
            <Route path="add/:photoId" element={<AddEditPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Navigate to="photos" replace />} />
        </Routes>
      </BrowserRouter>
      </Suspense>
    </div>
  );
}
export default App;
