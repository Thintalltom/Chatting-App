import { useState, useEffect } from "react";
import axios from "axios";
import { FaComment } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Yourpost = ({ data, index }) => {
  const [count, setCount] = useState(0);
  const [icon, setIcon] = useState(false);
  const [commentValue, setCommentValue] = useState('');
  const {id} = useParams
  const navigate = useNavigate()

  const resetCount = () => {
    setCount(0);
  };

  const liked = () => {
    setIcon(!icon);
    setCount(count + (icon ? -1 : 1)); // Toggle count based on icon state
  };

  const commentData = (e) => {
    setCommentValue(e.target.value)
  }

  

  const handleSubmitComment = (e) => {
    e.preventDefault();
    const commentData = {
      commentBody: commentValue
    }; // Updated to use the correct state variable
    axios.post('http://localhost:4001/comment', commentData)
      .then((response) => {
        console.log(response.data);
        // Optionally, you can clear the comment input after successful submission
        setCommentValue('');
      })
      .catch((error) => {
        console.error("Error submitting comment:", error);
      });
  };

  const getComments = () => {
    axios.get(`http://localhost:4001/comment/${id}`).then((response) => {
      setCommentValue(response.data)
    })
  }

  useEffect(() => {
    getComments
  },[id])

  useEffect(() => {
    handleSubmitComment
  },[])
  

  return (
    <div>
      <div
        key={index}
        className="border-2 cursor-pointer border-b-0 p-[10px] mt-[20px] w-[400px] h-[450px] gap-[20px]"
     
      >
        <p>user_{data.username}</p>
        <img
          className="w-[400px] h-[300px]"
          src={`http://localhost:4001/posts/images/` + data.image}
          onClick={() => {navigate(`/post/${data.id}`)}}
        />
        <p>{data.title}</p>
        <p>{data.postText}</p>

        <div className="flex items-center   gap-[40px] ">
          <div
            onClick={liked}
            className=" flex  gap-[10px]  items-center cursor-pointer"
          >
            {count} {icon ? <AiFillLike /> : <AiOutlineLike />}
          </div>
          <div className=" cursor-pointer     h-[50px] flex justify-center items-center">
            <FaComment />
          </div>
        </div>
       
      </div>
      <div className="justify-center items-center flex border-[2px]">
        <input
          type="text"
          placeholder="comment"
          className=" p-[2px]  w-[300px] rounded"
          onChange={commentData}
          value={commentValue}
        />
         <button className="bg-slate-900 text-white w-[80px] h-[30px]" onClick={handleSubmitComment}>Send</button>
      
      </div>

      {commentValue}
    </div>
  );
};
export default Yourpost;
