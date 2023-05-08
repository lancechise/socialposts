import { useState } from "react";
import Post from "../models/Post
import React, { Component } from 'react'

type Props = {}

type State = {}

export class SocialPosts extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>SocialPosts</div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SocialPosts)";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./SocialPosts.css";

const SocialPosts = () => {
  const [posts, setPosts] = useState<Post[]>([
    { title: "James", thought: "Thanks for being a great TA" },
    { title: "Billy", thought: "Thanks for being a great PM" },
    { title: "Ice", thought: "Ice makes things dangerous" },
  ]);

  const deletePost = (index: number): void => {
    setPosts((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  const addPost = (newPost: Post): void => {
    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <div className="SocialPosts">
      <h1>My Thoughts</h1>
      <PostForm onAdd={addPost} />
      <ol>
        {posts.map((item, index) => (
          <PostInList post={item} onDelete={() => deletePost(index)} />
        ))}
      </ol>
    </div>
  );
};

export default SocialPosts;
