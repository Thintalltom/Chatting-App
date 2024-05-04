import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const PostDetail = ( ) => {
    const {id} = useParams()
    const [data, setData] = useState({})
    const {comment, setComment} = useState([])

   useEffect(() => {
    axios.get(`http://localhost:4001/posts/byId/${id}`).then((response) => {
    setData(response.data)
    })

    axios.get(`http://localhost:4001/comment/${id}`).then((response) => {
    console.log(response.data)
    })


   }, [])

  


    return(
        <div>
            <p>{data.username}</p>
            <img src={`http://localhost:4001/posts/images/` + data.image} />
            <p>
                {data.postText}
            </p>
    </div>
    )

}
export default PostDetail;