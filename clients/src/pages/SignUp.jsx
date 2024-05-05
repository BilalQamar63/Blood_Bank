import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Navbar from '../components/Navbar'

import InputFields from "../components/InputFields";
import  {auth}  from "../config/firebase";

import "../App.css";

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        // setErrorMsg(err.message);
        console.log(err)
      });
  };

  return (
   <>
    <Navbar/>
    <div className="flex justify-center items-center h-screen ">
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Sign Up</h1>

          <InputFields
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
          <InputFields
            label="Email"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
            placeholder="Enter email address"
          />
          <InputFields
            label="Password"
            type="password"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
            placeholder="Enter Password"
          />

          <div className="mt-4">
            <p className="text-red-500">{errorMsg}</p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              disabled={submitButtonDisabled}
              onClick={handleSubmission}
            >
              {submitButtonDisabled ? "Logging in..." : "Login"}
            </button>
            <p className="mt-4">
              Do not have an account?
              <Link to="/login" className="text-blue-500">
               SignUp
              </Link>
            </p>
          </div>
        </div>
      </div>
   </>
  );
}

export default Signup;