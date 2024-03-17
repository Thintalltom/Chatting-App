import { useFormik } from "formik";
const Signup = () => {
    const validate = (values) => {
        if(!values.password){
            errors.password = 'required';
        } else if( values.password.length < 10 )
        {
            errors.password = 'must be greater than 10 charcaters'
        }
    }
    const formik = useFormik( {
        initialValues: {
            email: '',
            password: ''
        }, 
        validate
    })
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
        <form className="mt-[20px] gap-[40px]">
          <input
            type="email"
            className="border-b-[2px] mt-[40px] w-[70%] rounded-[5px]"
            placeholder="email"
          />{" "}
          <br />
          <div className="mt-[20px]">
            <input
              type="password"
              className="w-[70%] mt-[40px] border-b-[2px] rounded-[5px]"
              placeholder="password "
            />
          </div>
        </form>
        
        <button className="mt-[40px] text-center bg-red-500 w-[70%] p-[10px] rounded shadow-md text-white">Sign Up</button>
        <p className="mt-[20px]">Already have an account? signin</p>      
      </div>
    </div>
  );
};

export default Signup;
