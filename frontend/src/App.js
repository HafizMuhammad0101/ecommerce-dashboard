import React, { Fragment } from "react";
import "./assets/css/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import ROUTES from "./routes/routes";
import PrivateComponent from "./components/PrivateComponent";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        {/*private routes*/}
        <Route element={<PrivateComponent />}>
          {
            ROUTES.map((item, index) => {
              return <Route key={index} path={item.path} element={item.element} />
            })
          }
        </Route>
        {/*public routes*/}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Fragment>
  )
}

export default App;