import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import './css/PostList.css'
import axios from "axios";

const PostList = (props) => {

    const [posts, setPosts] = useState([{
        postId: 1,
        userId: "",
        title: "안녕",
        subject: "",
        createdDate: "",
        commentNum: 0,
        viewCount: 1
    }]);

    let postInfo = posts => {
        return posts.map(post => (
            <tr>
                <th>{post.postId}</th>
                <th>
                    <Link to = {`/posts/${post.postId}`}>
                        {post.title}
                    </Link>
                </th>
                <th>{post.subject}</th>
                <th>{post.commentNum}</th>
                <th>{post.userId}</th>
                <th>{post.viewCount}</th>
                <th>{post.createdDate}</th>
            </tr>
        ));
    };

    useEffect(() => {
        axios.get(`https://blog-tutoring.herokuapp.com/boards/1/posts/`)
            .then(res => {
                console.log(res.data)
                setPosts(res.data.posts)
            })
            .catch(e => {
                const status = e.response.status;
                if(status===404) {
                    console.log("redirect")
                    props.history.push('/');
                }
                else {
                    //unhandled exception
                }
                alert(e.response.data.message)
            })
    }, []);

    return (
        <table align = "center" border="1"  width ="1000" height="200">
            <thead>
            <tr align = "center" bgcolor = "#d3d3d3">
                <th>ID</th>
                <th>제목</th>
                <th>내용</th>
                <th>댓글수</th>
                <th>작성자</th>
                <th>조회수</th>
                <th>작성일</th>
            </tr>
            </thead>
            <tbody>
            {postInfo(posts)}
            </tbody>
        </table>
    )
};

export default PostList;