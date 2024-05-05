import { useState } from "react";
import { Link,
  //  Outlet,
    useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword}  from "firebase/auth";
import Navbar from '../components/Navbar'

import InputFields from "../components/InputFields";
import {auth}  from "../config/firebase";

// import "../App.css";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async () => {
        setSubmitButtonDisabled(false);
        alert('user login successfully')

        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
        alert('plz set correct crediantials')
      });
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen ">
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Login</h1>

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
              Do not have an account?{" "}
              <Link to="/signup" className="text-blue-500">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
