import './css/Comment.css'

const Comment = (props) => {
    return (
            <div>
                <table align="center">
                    <tr>
{/*                        <td>{props.comment.userId}</td>*/}
                        <td>{props.comment.content}</td>
                        <td>{props.comment.date}</td>
                    </tr>
                </table>
            </div>
        )
};

export default Comment;