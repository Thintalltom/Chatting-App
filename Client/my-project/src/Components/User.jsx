import { useFormik } from "formik";
import { useState } from "react";
import axios from "axios";
const User = () => {
  const [loading, setLoading] = useState(false)
  const validate = (values) => {
    const errors = {};
    if (!values.image) {
      errors.userName = "Required";
    }

    if (!values.userName) {
      errors.userName = "Required";
    } else if (values.userName.length > 10) {
      errors.userName = "Must be 10 characters or less";
    }

    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 20) {
      errors.firstName = "Must be 20 charcaters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      image: null,
    },
    validate,
    onSubmit: async (values,  { resetForm }) => {
      const formData = new FormData();

      formData.append("firstName", values.firstName);
      formData.append("lastName", values.lastName);
      formData.append("userName", values.userName);
      formData.append("image", values.image);

      try{
         const response = await axios.post('http://localhost:4001/user/', formData, {
            headers: {
               'Content-Type': 'multipart/form-data',
            }
         });
         resetForm(); //this is to reset the form back to its normal state 
      } catch(error)
      {

      } finally {
        setLoading(false)
      }
    },
  });

  return (
    <div>
      <p className="text-center mt-[20px]">User Details</p>
      <div className="  h-[80vh] flex justify-center items-center">
        <div className="flex w-[30vw]  p-[20px] h-[70vh] justify-center border-2  rounded-[10px] items-center">
          <form onSubmit={formik.handleSubmit} className="gap-[20px] p-[20px]">
            <label> Profile Picture</label> <br />
            <input
              type="file"
              name="image"
              id="image"
             
              onChange={(event) => {
                formik.setFieldValue("image", event.currentTarget.files[0]);
              }}
              value={null} 
              className="border-2 mt-[10px] w-[20rem] h-[2rem] rounded"
            />
            {formik.errors.image ? <div>{formik.errors.image}</div> : null} <br />
            <label htmlFor="firstName" className="mt-[20px]"> First Name</label>
            <br />
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              className="border-2 w-[20rem] h-[2rem] rounded"
            />
            {formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
            <br />
            <label htmlFor="lastName"> Last Name</label>
            <br />
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              className="border-2 w-[20rem] h-[2rem] rounded"
            />
            {formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}
            <br />
            <label htmlFor="userName"> User Name</label>
            <br />
            <input
              type="text"
              name="userName"
              id="userName"
              onChange={formik.handleChange}
              value={formik.values.userName}
              className="border-2 w-[20rem] h-[2rem] rounded"
            />
            {formik.errors.userName ? (
              <div>{formik.errors.userName}</div>
            ) : null}
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="mx-auto w-[100px] mt-[20px]  p-[10px] rounded border-[1px]"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default User;
