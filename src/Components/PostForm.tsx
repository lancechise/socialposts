import { FormEvent, useState } from "react";
import Post from "../Models/Post";
import "./PostForm.css";

interface Props {
  onAdd: (newPost: Post) => void;
}

const PostForm = ({ onAdd }: Props) => {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    onAdd({ title, thought });
    setTitle("");
    setThought("");
  };

  return (
    <form className="PostForm" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="thought">Thought</label>
      <input
        type="text"
        name="thought"
        id="thought"
        value={thought}
        onChange={(e) => setThought(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default PostForm;
