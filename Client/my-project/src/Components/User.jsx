import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";

const User = () => {
  const validate = (values) => {
    const errors = {};

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
      image: "",
    },
    validate,
  });

  const onSubmit = (data) => {
   console.log(data)
  }
  return (
    <div>
      <p className="text-center mt-[20px]">User Details</p>
<div className="  h-[100vh] flex justify-center items-center">
      <div className="flex w-[50vw] h-[70vh] justify-center border-2  rounded-[10px] items-center">
        <form onSubmit={onSubmit} className="gap-[20px] p-[20px]">
          <label htmlFor="firstName" > First Name</label>
          <br />
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            className="border-2 w-[35rem] h-[2rem] rounded"
          />
          {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
          <br />
          <label htmlFor="lastName"> Last Name</label>
          <br />
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            className="border-2 w-[35rem] h-[2rem] rounded"
          />
           {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
          <br />
          <label htmlFor="userName"> User Name</label>
          <br />
          <input
            type="text"
            name="userName"
            id="userName"
            onChange={formik.handleChange}
            value={formik.values.userName}
            className="border-2 w-[35rem] h-[2rem] rounded"
          />
           {formik.errors.userName ? <div>{formik.errors.userName}</div> : null}
        <div className="flex justify-center items-center">
        <button type="submit" className="mx-auto w-[100px] mt-[20px]  p-[10px] rounded border-[1px]"> Submit</button>
        </div>
      
        </form>
      </div>
    </div>
    </div>
  );
};
export default User;
