// import React from 'react'
import Navbar from '../components/Navbar'
// import imgA from '../assets/BloodA.avif'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'


const GroupAB = () => {
 

  return (
    <>

      <Navbar />
      <div className="text-center">
        <div>
          <h1 className="text-center mx-20 my-10 font-medium text-3xl">
            Welcome to Bank Group AB
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="max-w-screen-md">
            <h2 className="text-center  mt-10 md:mt-32 font-medium text-xl my-5">
             <span className='text-red-700 text-xl'>Q:</span> What is the Blood<span className="text-red-700 font-bold "> Group AB Negative</span>
            </h2>
            <p className="text-center font-medium text-xl">
              Blood group O negative is a unique blood type characterized by the absence of both A and B antigens as well as the Rh antigen. Individuals with this blood type are universal donors, as their blood can be safely transfused to recipients of any other blood type without causing adverse reactions. However, they can only receive blood from other O negative donors. Despite being relatively rare, comprising around 7% of the global population, their blood is highly sought after for emergency transfusions and in situations where blood type compatibility is uncertain.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="max-w-screen-md">
            <h2 className="text-center mt-10 md:mt-32 font-medium text-xl my-5">
            <span className='text-red-700 text-xl'>Q:</span>  What is the Blood<span className="text-red-700 font-bold"> Group AB Positive</span>
            </h2>
            <p className="text-center font-medium text-xl">
              Blood group O positive is one of the most common blood types globally, characterized by the presence of antigen O on red blood cells and Rh factor positivity. Individuals with this blood type are universal donors, as their blood can be transfused to recipients with any Rh-positive blood type. Despite being compatible with a wide range of recipients, O positive individuals can only receive blood from donors with the same Rh factor. This blood type is crucial in emergencies when immediate transfusions are necessary, highlighting its significance in healthcare systems worldwide.
            </p>
          </div>
        </div>
        
        <h1 className='flex justify-center font-medium my-5 text-3xl'>Types of Bloods</h1>
        <div className="flex flex-wrap mb-2">
          <div className="w-32 h-32 m-auto cursor-pointer bg-red-700 text-white font-bold rounded-full text-center py-10 text-4xl mt-10"> <Link to='/GroupO'> O </Link> </div>
          <div className="w-32 h-32 m-auto cursor-pointer bg-red-700 text-white font-bold rounded-full text-center py-10 text-4xl mt-10"> <Link to='/GroupA'> A </Link> </div>
          <div className="w-32 h-32 m-auto cursor-pointer bg-red-700 text-white font-bold rounded-full text-center py-10 text-4xl mt-10"> <Link to='/GroupB'> B </Link> </div>
          <div className="w-32 h-32 m-auto cursor-pointer bg-red-700 text-white font-bold rounded-full text-center py-10 text-4xl mt-10"> <Link to='/GroupAB'>AB </Link> </div>
        </div>

        <div>
     
        </div>

      </div>
        <Footer/>
    </>

  )
}

export default GroupAB