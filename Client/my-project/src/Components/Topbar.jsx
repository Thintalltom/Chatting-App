import { Link } from "react-router-dom";
const Topbar = () => {


        return (
            <div>
                <div className="flex justify-between p-[10px] bg-slate-200">
                    <p>YouthVille</p>

                  <Link to='/signup'> <button className="bg-blue-500 shadow-lg hover:bg-blue-700 rounded w-[100px] text-white h-[50px]">Register</button></Link> 
                    
                </div>
            </div>
        )
}
export default Topbar;