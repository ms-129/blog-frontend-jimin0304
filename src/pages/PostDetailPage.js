import PostDetail from "../components/PostDetail";
import Comment from "../components/Comment";
import Comments from "../components/Comments";
import WritePost from "../components/WritePost";
import {Link} from "react-router-dom";
import React from "react";

const PostDetailPage = (props) => {

    console.log(props.match);


    return (
        <div>
            <p> 난 포스트 디테일 postId는 {props.match.params.postId}</p>
            <button>
                <Link to={'/'}>
                    목록으로
                </Link>
            </button>
            <PostDetail postId={props.match.params.postId}/>
            <Comments postId={props.match.params.postId}/>
        </div>
    )
};

export default  PostDetailPage;