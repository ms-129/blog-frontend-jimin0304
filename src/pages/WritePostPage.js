import WritePost from "../components/WritePost";

const WritePostPage = (props) => {

    console.log(props.match);

    return (
        <div>
            <p> 난 포스트 디테일 postId는 {props.match.params.postId}</p>
            <WritePost postId={props.match.params.postId} history = {props.history}/>
        </div>
    )

}

export default WritePostPage;