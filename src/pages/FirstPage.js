import {Link} from "react-router-dom";
import PostList from "../components/PostList";
import React from "react";

const FirstPage = () => {

    return (
        <div className="frame">
            <div className="header">
                <div className="logo">
                    <p>First Page</p>
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
            </div>

            <div className="content">
                {/*<img src="ktrip_logo.png" alt="My Image" width="150" height="150"/>*/}
            </div>


            <div className="footer">
                <p className="copyright">&copy;copy</p>
            </div>
        </div>
    )
};

export default FirstPage;