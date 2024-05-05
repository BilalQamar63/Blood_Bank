// import  { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Background from '../assets/Home.png'
// import axios from "axios";
import {
  Link,
  //  NavLink,
  // useNavigate 
} from "react-router-dom";
import Footer from "../components/Footer";


const Cards = () => {

  return (
    <>
      <Navbar />
      <div>
        <div>

          <img src={Background} alt="" style={{ width: '100%' }} />


        </div>




        <div>
          <h2 className="text-3xl font-bold mt-3 flex justify-center "> Blood Types</h2>
          <p className="text-left mx-20 my-5 font-medium text-xl">
            Blood banking refers to the process of collecting, separating, and
            storing blood. The first U.S. blood bank was established in 1936.
            Today, blood banks collect blood and separate it into its various
            components so they can be used most effectively according to the
            needs of the patient.
            Blood banking refers to the process of collecting, separating, and
            storing blood. The first U.S. blood bank was established in 1936.
            Today, blood banks collect blood and separate it into its various
            components so they can be used most effectively according to the
            needs of the patient.
            Blood banking refers to the process of collecting, separating, and
            storing blood. The first U.S. blood bank was established in 1936.
            Today, blood banks collect blood and separate it into its various
            components so they can be used most effectively according to the
            needs of the patient.
            Blood banking refers to the process of collecting, separating, and
            storing blood. The first U.S. blood bank was established in 1936.
            Today, blood banks collect blood and separate it into its various
            components so they can be used most effectively according to the
            needs of the patient.
          </p>
        </div>
        <h1 className='flex justify-center font-bold my-5 text-3xl'>Types of Bloods</h1>
        <h2 className='flex justify-center font-medium my-5 text-3xl'>Click For More Details</h2>
        <div className="flex flex-wrap mb-2">
          <div className="w-32 h-32 m-auto cursor-pointer bg-red-700 text-white font-bold rounded-full text-center py-10 text-4xl mt-10"> <Link to='/GroupO'> O </Link> </div>
          <div className="w-32 h-32 m-auto cursor-pointer bg-red-700 text-white font-bold rounded-full text-center py-10 text-4xl mt-10"> <Link to='/GroupA'> A </Link> </div>
          <div className="w-32 h-32 m-auto cursor-pointer bg-red-700 text-white font-bold rounded-full text-center py-10 text-4xl mt-10"> <Link to='/GroupB'> B </Link> </div>
          <div className="w-32 h-32 m-auto cursor-pointer bg-red-700 text-white font-bold rounded-full text-center py-10 text-4xl mt-10"> <Link to='/GroupAB'>AB </Link> </div>
        </div>
      </div>

      
      <Footer />

    </>
  );
};

export default Cards;
