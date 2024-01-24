import { Link } from "react-router-dom"


const ListOfPosts = ({post}) =>{
    return (
        <Link to={`/post/${post.index}`}>
            <div>
                <h2>제목: {post.title}</h2>
                <h3>태그: {post.category}</h3>
            </div>
        </Link>
    )
}

export default ListOfPosts;