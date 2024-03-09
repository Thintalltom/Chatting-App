import { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
const Yourpost = ({ data, index }) => {
  const [count, setCount] = useState(0);
  const [icon, setIcon] = useState(false);

  const resetCount = () => {
    setCount(0);
  };

  const liked = () => {
    setIcon(!icon);
    setCount(count + (icon ? -1 : 1)); // Toggle count based on icon state
  };

  return (
    <div
      key={index}
      className="border-2 p-[10px] mt-[20px] w-[400px] h-[450px] gap-[20px]"
    >
      <p>user_{data.username}</p>
      <img
        className="w-[400px] h-[300px]"
        src={`http://localhost:4001/posts/images/` + data.image}
      />
      <p>{data.title}</p>
      <p>{data.postText}</p>
      {
        <div
          onClick={liked}
          className=" flex  gap-[10px] mt-[10px] items-center cursor-pointer"
        >
          {count} {icon ? <AiFillLike /> :  <AiOutlineLike />}
        </div>
      }
    </div>
  );
};
export default Yourpost;
