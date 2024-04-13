import Yourpost from "./Yourpost";
import { Link } from "react-router-dom";
const Home = ({ data, formValues }) => {
  const { email } = formValues;
  return (
    <div>
      <div>
                <div className="flex justify-between p-[10px] bg-slate-200">
                    <p>YouthVille</p>
                  {formValues == null ?  <Link to='/signup'> <button className="bg-blue-500 shadow-lg hover:bg-blue-700 rounded w-[100px] text-white h-[50px]">Register</button></Link>  : <p> Welcome: {email}</p>}
                 
                    
                </div>
            </div>
      <div className="flex flex-col bg-grey-500 p-4 justify-center items-center ">
        {data.map((data, index) => (
          <Yourpost data={data} key={index} />
        ))}
      </div>
    </div>
  );
};
export default Home;
