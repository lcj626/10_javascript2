import posts from "../data/person.json";

export function getPostList(){
    return posts;
}

export function getPostsDetail(index){
    return posts.filter(post => post.index === parseInt(index))[0];
}

export function searchPosts(title){
    return posts.filter(post => post.title.match(title));
}