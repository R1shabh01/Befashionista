import { Form, redirect } from "react-router-dom";

//use navigate is used to dynamically navigate from one link to another
const CreatePost = () => {
  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="UserId" className="form-label">
          User Id
        </label>
        <input type="text" className="form-control" id="UserId" name="userId" />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input type="text" className="form-control" id="title" name="title" />
      </div>
      <div className="mb-3">
        <label htmlFor="Post" className="form-label">
          Post
        </label>
        <textarea className="form-control" id="Post" rows={4} name="body" />
      </div>
      <div className="mb-3">
        <label htmlFor="Tags" className="form-label">
          Tags
        </label>
        <input type="text" className="form-control" id="Tags" name="tags" />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          name="reactions"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </Form>
  );
};
export default CreatePost;

export async function SubmitOnAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
}
