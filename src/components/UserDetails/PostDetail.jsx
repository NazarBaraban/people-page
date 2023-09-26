import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommentList from '../CommentList/CommentList';

const PostDetail = ({ posts }) => {
  const { postId } = useParams();
  const post = posts.find((post) => post.id === parseInt(postId));
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  }, [postId]);

  if (!post) {
    return (
      <div>
        <h1>Post not found</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <CommentList comments={comments} />
    </div>
  );
};

export default PostDetail;
