import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Select Author");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handlSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New Blog Added");
      alert("New Blog Added");
      setIsPending(false);
      // setAuthor('Select Author');
      // setBody("");
      // setTitle('');

    //   history.go(-1);
        history.push('/')
    });
    // console.log(blog);
  };

  return (
    <div className="create">
      <h2>Add A New Blog</h2>
      <form onSubmit={handlSubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option disabled>Select Author</option>
          <option value="Rushabh">Rushabh</option>
          <option value="Geek">Geek</option>
        </select>
        <label>Blog Body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        {!isPending && <button>Add Blog</button>}
        {isPending && <div>Loading...</div>}
        {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
      </form>
    </div>
  );
};

export default Create;
