import { createContext, useReducer, useEffect, useState } from "react";

// postListcontext is created so that any component in app can use the data through context
export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  fetching: false,
  delPost: () => {},
});

const postListReducer = (currentList, action) => {
  let newList = currentList;
  if (action.type === "DEL-POST") {
    newList = currentList.filter((post) => post.id !== action.payload.id);
  } else if (action.type === "ADD-POST") {
    newList = [action.payload, ...currentList];
  } else if (action.type === "ADD-POSTS") {
    newList = action.payload.posts;
  }
  return newList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD-POST",
      payload: post,
    });
  };

  const addPosts = (posts) => {
    dispatchPostList({
      type: "ADD-POSTS",
      payload: {
        posts,
      },
    });
  };

  const delPost = (postId) => {
    console.log(postId);
    dispatchPostList({
      type: "DEL-POST",
      payload: {
        id: postId,
      },
    });
  };

  const [fetching, setFetching] = useState(false);

  //Manages side effects—operations that occur outside of rendering, such as data fetching
  //useEffect also returns a function for clean up
  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(
      "https://dummyjson.com/posts?select=id,title,body,reactions,userId,tags",
      { signal }
    )
      .then((res) => res.json())
      .then((data) => {
        addPosts(data.posts);
        setFetching(false);
      });
    return () => {
      console.log("clean up after useEffect");
      controller.abort();
    };
  }, []);
  return (
    <PostListContext.Provider value={{ postList, addPost, fetching, delPost }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
