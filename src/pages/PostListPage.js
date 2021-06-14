import PostList from "../components/PostList";
import React from "react";
import {Link} from "react-router-dom";
import './css/PostListPageCSS.css'
import image from './ktrip_logo.png';

const PostListPage = (props) => {

    return (
        <div className="frame">
            <div className="header">
                <div className="logo">
                    <p>K-trip</p>
                </div>
            </div>

            <div className="container">
                <div className="big-nav">
{/*                    <div className = "login">
                        <p>로그인 창</p>
                    </div>*/}
                    <ul className="nav-list">
                        <li className="nav-item"><a href="" className="nav-link">자유게시판</a></li>
                        <li className="nav-item"><a href="" className="nav-link">핫플레이스</a></li>
                        <li className="nav-item"><a href="" className="nav-link">맛집</a></li>
                        <li className="nav-item"><a href="" className="nav-link">숙소</a></li>
                        <li className="nav-item"><a href="" className="nav-link">날씨</a></li>
                    </ul>
                </div>

                <div className="content">
                    <button>
                        <Link to={'/write/posts'}>
                            글쓰기
                        </Link>
                    </button>
                    <pre/>
                    <button>
                        <Link to={'/first'}>
                            첫화면
                        </Link>
                    </button>
                    <PostList className="lists"/>
                </div>

                {/*<div className="chatting">
                    <p>네프 채팅 레이아웃 맛보기</p>
                    <butto>
                        <Link to={'/chat'}>
                            채팅방입장
                        </Link>
                    </butto>
                </div>*/}
            </div>

            <div class = "footer">
                <p class = "copyright">&copy;copy</p>
            </div>
        </div>
    )
};

export default PostListPage;