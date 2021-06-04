import PostDetail from "./PostDetail";
import {useEffect, useState} from "react";
import './css/WritePost.css'
import axios from "axios";

const WritePost = (props) => {
    const [post,setPost] = useState({
        userId:1,
        title:"",
        subject:""
    })

    let updatePostTitle = e => {
        setPost({
            ...post,
            title:e.target.value
        })
    }

    let updatePostSubject = e => {
        setPost({
            ...post,
            subject:e.target.value
        })
    }

    let addPost = () =>  {     //글쓰기 buttonClick
        alert(`${post.title}을(를) 등록합니다.`);
        axios.post("https://blog-tutoring.herokuapp.com/posts", post)
            .then(res => {
                console.log(res.data);
                props.history.push(`/posts/${res.data.postId}`);
            })
            .catch(e => {
                console.log(e.response);
                console.log(e.response.status);
                alert(e.response.data.message)
            })};

    let pressEnter = e => {     //엔터치면 글 작성 완료
        if(e.key ==='Enter') addPost();
    };

    return (
        <div>
                <table align="center" border="1" width="900" height="300">
                    <tr align="center" bgcolor="#fafad2">
                        <th> 제목 :
                            <input type="text" size="100" placeholder="제목을 입력해주세요(100자 이내)" value={post.title} onChange={(updatePostTitle)} onKeyPress={pressEnter}/>
                        </th>
                    </tr>
                    <tr align="center" height="500">
                        <textarea type="text" rows="32" cols="140" placeholder="글을 입력해주세요" value={post.subject} onChange={(updatePostSubject)} onKeyPress={pressEnter}/>
                        <button onClick={addPost}>등록하기</button>
                    </tr>
                </table>
        </div>
    );
};

export default WritePost;