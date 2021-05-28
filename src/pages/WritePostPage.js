import WritePost from "../components/WritePost";
import {Link} from "react-router-dom";
import React from "react";

const WritePostPage = (props) => {

    console.log(props.match);

    return (
        <div>
            <p> 난 포스트 디테일 postId는 {props.match.params.postId}</p>
            <button>
                <Link to={'/'}>
                    목록으로
                </Link>
            </button>
            <WritePost postId={props.match.params.postId} history = {props.history}/>
        </div>
    )

}

export default WritePostPage;