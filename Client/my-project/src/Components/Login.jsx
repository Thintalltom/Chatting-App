import axios from "axios";
import { useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      errors.email = "Invalid email address must include @gmail.com";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 10) {
      errors.password = "Password must be at least 10 characters long";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      formData.append("password", values.password);
      formData.append("email", values.email);

      try {
        const response = await axios.post(
          "http://localhost:4001/signup/login/",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        navigate('/')
        resetForm();
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setErrorMessage(
            "User not found. Please check your email and password."
          );
        } else {
          setErrorMessage("An error occurred. Please try again later.");
        }
        console.error("Error during login:", error);
      }
    },
  });
  return (
    <div>
      <div className="flex ">
        <div>
            
          <img 
          className="w-[1000px] h-[100vh]"
          src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=740&t=st=1712648308~exp=1712648908~hmac=66b7fd8a2f0e5bd43c147c16bb433260622e886644e5a30595093d645c53c8ac" />
        </div>
        <div className="bg-white w-full p-[20px]">
          <form className="mt-[20px] gap-[40px]" onSubmit={formik.handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="border-b-[2px] mt-[40px] w-[70%] rounded-[5px]"
            />
             {formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
            <br />
            <input
              className="border-b-[2px] mt-[40px] w-[70%] rounded-[5px]"
              type={show ? "password" : "text"}
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <p onClick={() => setShow(!show)} className="cursor-pointer">
              {show ? "show" : "hide"}
            </p>
            <br />
            {formik.errors.password ? (
            <div className="text-red-500">{formik.errors.password}</div>
          ) : null}
            <button
              type="submit"
              className=" hover:bg-blue-700 mt-[40px] text-center bg-blue-500 w-[70%] p-[10px] rounded shadow-md text-white"
            >
              Login
            </button>
          </form>
          <p className="mt-[20px]">
            Do not have an account? <Link to="/signup" className="text-blue-500">Sign up</Link>
          </p>
        </div>
      </div>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};
export default Login;
