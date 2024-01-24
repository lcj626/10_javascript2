import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import PostList from "../components/PostList";
import ListOfPosts from "../components/PostList";
import { searchPosts } from "../Api/PostApi";


const SearchPost = () =>{

    const [search] = useSearchParams();

    const searchPostTitle = search.get("title");

    const [postList, setPostList] = useState([]);

  
    useEffect(() =>{
        setPostList(searchPosts(searchPostTitle));
    },[])


    return (
        <>
            <div>
              {postList.map(post => <ListOfPosts key={post.index} post={post}/>)}
            </div>
        </>
    )
}

export default SearchPost;