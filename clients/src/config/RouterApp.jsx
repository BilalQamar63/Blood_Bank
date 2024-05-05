import React from "react";
import GroupA from '../pages/GroupA'
import GroupB from '../pages/GroupB'
import GroupO from '../pages/GroupO'
import GroupAB from '../pages/GroupAB'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Cards from "../pages/Cards";
import CardDetails from "../pages/CardsDetails";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
// import Navbar from "../components/Navbar";
import PrivateRouter from './PrivateRouter'
// import  PublicRouter  from './PublicRouter'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      {/* <Route> */}
        <Route path="" element={<PrivateRouter />}>
          <Route path='/' element={<Cards />} />
          {/* <Route path='/cardDetails/:id' element={<CardDetails />} /> */}
          </Route>
          <Route>

          <Route path='/groupA' element={<GroupA />} />
          <Route path='/groupB' element={<GroupB />} />
          <Route path='/groupO' element={<GroupO />} />
          <Route path='/groupAB' element={<GroupAB />} />
        </Route>
        {/* <Route path="" element={<PublicRouter />}> */}
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        {/* </Route> */}
      {/* </Route> */}
      {/* <Route path="/" element={<Cards />} />
      <Route path="/cardDetails/:id" element={<CardDetails />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} /> */}
    </Route>
  )
);

const RouterApp = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default RouterApp;
