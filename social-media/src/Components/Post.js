import { RiDeleteBin5Line } from "react-icons/ri";
import { MdAddReaction } from "react-icons/md";
import { useContext } from "react";
import { PostListContext } from "../Store/PostListStore";

const Post = ({ post }) => {
  const { delPost } = useContext(PostListContext);
  return (
    <div className="card post-card" style={{ width: "35rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => delPost(post.id)}
          >
            <RiDeleteBin5Line />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        <span className="badge text-bg-light">
          <MdAddReaction className="reactIcon" />
          {post.reactions.likes}
        </span>
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="badge rounded-pill text-bg-secondary tags "
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Post;
