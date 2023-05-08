import Post from "../Models/Post";
import "./PostInList.css";

interface Props {
  post: Post;
  onDelete: () => void;
}

const PostInList = ({ post, onDelete }: Props) => {
  return (
    <li className="PostInList">
      <p>Title: {post.title}</p>
      <p>Thought: {post.thought}</p>
      <button onClick={() => onDelete()}>X</button>
    </li>
  );
};

export default PostInList;
