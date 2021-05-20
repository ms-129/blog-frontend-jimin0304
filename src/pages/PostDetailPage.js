import PostDetail from "../components/PostDetail";
import Comment from "../components/Comment";
import Comments from "../components/Comments";
import WritePost from "../components/WritePost";

const PostDetailPage = (props) => {

    console.log(props.match);


    return (
        <div>
            <p> 난 포스트 디테일 postId는 {props.match.params.postId}</p>
            <PostDetail postId={props.match.params.postId}/>
            <Comments postId={props.match.params.postId}/>
        </div>
    )
};

export default  PostDetailPage;