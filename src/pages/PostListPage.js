import PostList from "../components/PostList";
import React from "react";
import {Link} from "react-router-dom";

const PostListPage = (props) => {

    return (
        <div>
            <p> 난 포스트 리스트</p>
            <button>
                <Link to={'/write/posts'}>
                    글쓰기
                </Link>
            </button>
            <PostList/>
        </div>
    )
};

export default PostListPage;