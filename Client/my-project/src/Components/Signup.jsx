import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
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

      formData.append("email", values.email);
      formData.append("password", values.password);

      try {
        setLoading(true);
        const response = await axios.post(
          "http://localhost:4001/signup/",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setLoading(false);
      navigate('/login')
        resetForm();
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    },
  });
  return (
    <div className="flex ">
      <div className="">
        <img
          className="w-[1000px] h-[100vh]"
          src="https://img.freepik.com/free-vector/illustration-diverse-people-using-digital-devices_53876-26694.jpg?t=st=1710658417~exp=1710662017~hmac=1e6abd15ab36e51cd3f643a6c0376839caec0e74146bcd8f6aee26d4e3dfa0e2&w=740"
          alt="youthville"
          srcset=""
        />
      </div>
      <div className="bg-white   w-full p-[20px]">
        <p className="text-xl font-bold">Create Account</p>
        <form className="mt-[20px] gap-[40px]" onSubmit={formik.handleSubmit}>
          <input
            type="email"
            className="border-b-[2px] mt-[40px] w-[70%] rounded-[5px]"
            name="email"
            id="email"
            placeholder="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
         {formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
          <br />
          <div className="mt-[20px]">
            <input
              type={show ? "password" : "text"}
              placeholder="password"
              className="w-[70%] mt-[40px] border-b-[2px] rounded-[5px]"
              name="password"
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
             <p onClick={() => setShow(!show)} className="cursor-pointer">
              {show ? "show" : "hide"}
            </p>
          </div>
          {formik.errors.password ? (
            <div className="text-red-500">{formik.errors.password}</div>
          ) : null}
          <button
            type="submit"
            className="mt-[40px] cursor-pointer hover:bg-red-700 text-center bg-red-500 w-[70%] p-[10px] rounded shadow-md text-white"
            disabled={loading || !formik.isValid || !formik.dirty}
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-[20px]">
          Already have an account? <Link to="/login" className="text-blue-600">login</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
