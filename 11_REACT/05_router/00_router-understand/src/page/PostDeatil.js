import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getPostsDetail } from "../Api/PostApi";


const PostDetail = () =>{
    const {index} = useParams();
    const [post,setPost] = useState({
        title : '',
        category: '',
        contents: '',
        detail:{}
    });

    useEffect(() => {
      // 비동기 함수를 호출할 때에는 async/await 또는 Promise를 활용해야 합니다.
      const fetchData = async () => {
          try {
              const postData = await getPostsDetail(index);
              setPost(postData);
          } catch (error) {
              console.error('게시물 상세 정보를 불러오는 중 오류가 발생했습니다:', error);
          }
      };

      fetchData(); // 비동기 함수를 호출합니다.
  }, [index]);

    return (
      <>
          <h1>제목 : {post.title}</h1>
          <h2>태그 : {post.category}</h2>
          <h3>내용 : {post.contents}</h3>
          <h3>상세내용 : {post.detail.description}</h3>

          <img src={post.detail.image} style={{maxWidth:500}}/>
      </>
    );
  }

export default PostDetail;