import Comment from "./Comment";
import {useEffect, useState} from "react";
import axios from "axios";

const Comments = (props) => {
    const [comment, setComment] = useState([{
        userId: "1",
        content: ""
    }]);
    const [comments, setComments] = useState([]);

    function getComments() {
        axios.get(`https://blog-tutoring.herokuapp.com/posts/${props.postId}/comments`)
            .then(res => {
                setComments(res.data.comments)
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
    };

    useEffect(()=> {
        console.log(props.postId);
        getComments();
        }, []);


    let updateComment = e => {   //댓글 작성창
        setComment({
            userId: 1,
            content: e.target.value
        });
    }

    let addComment = () => {     //댓글쓰기 buttonClick
      alert(`${comment.content}를 등록합니다.`);
      axios.post(`https://blog-tutoring.herokuapp.com/posts/${props.postId}/comments`, comment)
        .then(res => {
            getComments();
            setComment({
                ...comment,
                content: ''
            });
        })
        .catch(e => {
            console.log(e.response);
            console.log(e.response.status);
            alert(e.response.data.message)
        })};

    let pressEnter = e => {     //엔터치면 댓글 작성 완료
        if(e.key ==='Enter') addComment();
    };

    /*let commented = {
        content: 'hello',
        date: 'tow',
        userId: 'jimin'
    };*/

    return (
        <div>
            {comments.map(comment => (<Comment comment = {comment} list={'dfs'}/>))}
            <input type="text" size="100" placeholder="댓글을 입력해주세요(100자 이내)" value={comment.content} onChange={(updateComment)} onKeyPress={pressEnter}/>
            <button onClick={addComment}>댓글쓰기</button>
        </div>
    );
};

export default Comments;