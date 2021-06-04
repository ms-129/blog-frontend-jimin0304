import WritePost from "../components/WritePost";
import {Link} from "react-router-dom";
import React from "react";
import './css/PostListPageCSS.css'
import PostList from "../components/PostList";

const WritePostPage = (props) => {

    console.log(props.match);

    return (
        <div className="frame">
            <div className="header">
                <div className="logo">
                    <p>K-trip</p>
                </div>
            </div>

            <div className="container">
                <div className="big-nav">
                    <div className="login">
                        <p>로그인 창</p>
                    </div>
                    <ul className="nav-list">
                        <li className="nav-item"><a href="" className="nav-link">자유게시판</a></li>
                        <li className="nav-item"><a href="" className="nav-link">핫플레이스</a></li>
                        <li className="nav-item"><a href="" className="nav-link">맛집</a></li>
                        <li className="nav-item"><a href="" className="nav-link">숙소</a></li>
                        <li className="nav-item"><a href="" className="nav-link">날씨</a></li>
                    </ul>
                </div>

                <div className="content">
                    {/*<p> 난 포스트 디테일 postId는 {props.match.params.postId}</p>*/}
                    <button>
                        <Link to={'/'}>
                            목록으로
                        </Link>
                    </button>
                    <WritePost classNmae="lists" postId={props.match.params.postId} history = {props.history}/>
                </div>

                <div className="chatting">
                    <p>네프 채팅 레이아웃 맛보기</p>
                </div>
            </div>

            <div className="footer">
                <p className="copyright">&copy;copy</p>
            </div>
        </div>
    )

}

export default WritePostPage;