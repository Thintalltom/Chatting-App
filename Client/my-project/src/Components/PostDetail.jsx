import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const PostDetail = ( ) => {
    const {id} = useParams()
    const [data, setData] = useState([])

   useEffect(() => {
    axios.get(`http://localhost:4001/posts/byId/${id}`).then((response) => {
    setData(response.data)
   
    })

   }, [id])


    return(
        <div>
   
       {data.id}
    </div>
    )

}
export default PostDetail;