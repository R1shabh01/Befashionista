import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../Store/PostListStore";
import Welcome from "./Welcome";
import Loading from "./Loading";

const PostList = () => {
  const { postList, fetching } = useContext(PostListContext);

  return (
    <>
      {fetching && <Loading />}
      {!fetching && postList.length === 0 && <Welcome />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;
