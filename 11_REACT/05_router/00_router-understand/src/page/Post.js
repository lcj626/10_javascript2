import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import ListOfPosts from "../components/PostList";
import { getPostList } from "../Api/PostApi";
import boxStyle from "./Post.module.css";


const Post = () =>{
    const [postList, setPostList] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();


    useEffect(()=>{
        setPostList(getPostList());
    },[])

    const onClickHandler = () =>{
        navigate(`/post/search?title=${searchValue}`);
    }

    return ( 
      <>
        <div>
            <input type="search" name="title" onChange={e => {setSearchValue(e.target.value)}}/>
            <button onClick={onClickHandler}>검색</button>
        </div>
        <div className={boxStyle.PostBox}>
            {postList.map(post => <ListOfPosts key={post.index} post={post}/>)}
        </div>
      </>
    )

}

export default Post;