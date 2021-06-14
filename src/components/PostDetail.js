import './css/PostDetail.css'
import {useEffect, useState} from "react";
import axios from "axios";

const PostDetail = (props) => {
    const [post, setPost] = useState( {
        postId: props.postId,
        userId: "",
        title: "",
        subject: "",
        createdDate: "",
        commentNum: 0,
        viewCount: 1
    });

    useEffect(() => {
        axios.get(`https://blog-tutoring.herokuapp.com/posts/${props.postId}`)
            .then(res => {
                setPost(res.data)
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
        <div>
        <table align="center" border="1" width="1000" height="350">
            <tr align="center" bgcolor="#fafad2">
                <th colSpan="3">제목 : {post.title}</th>
            </tr>
            <tr align="center">
                <td>작성자 : {post.userId}</td>
                <td>날짜 : {post.createdDate}</td>
                <td>조회수 : {post.viewCount}</td>
            </tr>
            <tr align="center" height="500">
                <td colSpan="3">{post.subject}</td>
            </tr>
{/*            <tr>
                <td colSpan="3">댓글 수 : {post.commentNum}</td>
            </tr>*/}
        </table>
    </div>
    )
};
    
export default PostDetail;