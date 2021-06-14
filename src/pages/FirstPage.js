import {Link} from "react-router-dom";
import PostList from "../components/PostList";
import React from "react";
import './css/FirstPage.css'
import PostDetail from "../components/PostDetail";
import Comments from "../components/Comments";

const FirstPage = () => {

    return (
        <div className="frame">
            <div className="header">
                <div className="logo">
                    <p>K-trip</p>
                </div>
            </div>

            <div className="container">
                <div className="first-nav">
{/*                    <div className="login">
                        <p>로그인 창</p>
                    </div>*/}
                    <ul className="firstlist">
                        <li className="nav-item"><a href="/" className="nav-link">서울/인천/경기</a></li>
                        <li className="nav-item"><a href="/" className="nav-link">강원도</a></li>
                        <li className="nav-item"><a href="/" className="nav-link">충남/충북</a></li>
                        <li className="nav-item"><a href="/" className="nav-link">전북/전남</a></li>
                        <li className="nav-item"><a href="/" className="nav-link">경북/경남</a></li>
                        <li className="nav-item"><a href="/" className="nav-link">경북/경남</a></li>
                    </ul>
                </div>


            <div className="introduce">
                <h1>k-trip 소개</h1>
                <p>- 국내 여행지 정보 공유 웹사이트</p>
                <p>- 부족한 부분은 업데이트 예정</p>
                <p>- 왼쪽 리스트에서 원하는 지역을 선택하세요!</p>
            </div>

            </div>
            <div className="footer">
                <p className="copyright">&copy;copy</p>
            </div>
        </div>
    )
};

export default FirstPage;