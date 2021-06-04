import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import './css/PostList.css'
import axios from "axios";

const PostList = (props) => {

    const [posts, setPosts] = useState({_embedded:{postList:[{
                postId : 0,
                userId : 1,
                title : "",
                subject : "",
                createdDate : "",
                commentNum : 0,
                viewCount : 1
            }]
        },
        page : {
            size:20,
            totalElements:0,
            totalPages:0,
            number:0
        }
    });

    const [pageInfo, setPageInfo] = useState({page:0, size:15});
    useEffect( ()=>{
        updatePage()
    },[]);

    useEffect( ()=>{
        updatePage()
    },[pageInfo]);

    let updatePage = () =>{
        axios.get(`https://blog-tutoring.herokuapp.com/posts?page=${pageInfo.page}&size=${pageInfo.size}`)
            .then(res => {
                console.log(res.data.posts);
                setPosts(res.data);
            })
            .catch(e=> {
                const status = e.response.status;
                if(status===404) {
                    console.log("redirect")
                    props.history.push('/posts/');
                }
                else{
                    //unhandled exception
                }
                alert(e.response.data.message)
            });
    };

    let postInfo = posts => {
        if(posts.page.totalPages !==0)
            return posts._embedded.postList.map(posts => (
                <tr>
                    <th>{posts.postId}</th>
                    <th>
                        <Link to={`/posts/${posts.postId}`}>
                            {posts.title}
                        </Link>
                    </th>
                    <th>{posts.subject}</th>
                    <th>{posts.commentNum}</th>
                    <th>{posts.userId}</th>
                    <th>{posts.viewCount}</th>
                    <th>{posts.createdDate}</th>
                </tr>
            ));
    };

    let goToNextPage = () =>{
        setPageInfo({
            page: pageInfo.page+1,
            size: pageInfo.size
        })
        updatePage()
    };

    let goToPrePage = () =>{
        setPageInfo({
            page: pageInfo.page-1,
            size: pageInfo.size
        })
        updatePage()
    };

    return (
        <div>
            <table align = "center" border="1"  width ="1000" height="200">
                <thead>
                <tr align = "center" bgcolor = "e6e6fa">
                    <th>ID</th>
                    <th>제목</th>
                    <th>내용</th>
                    <th>댓글수</th>
                    <th>작성자</th>
                    <th>조회수</th>
                    <th>작성일</th>
                </tr>
                </thead>
                <tbody>
                {postInfo(posts)}
                </tbody>
            </table>
            <p></p>
            <button onClick={goToPrePage}>이전페이지</button>
            현재 페이지 {`${posts.page.number+1}/${posts.page.totalPages}`}
            <button onClick={goToNextPage}>다음페이지</button>
        </div>
    )
};

export default PostList;