import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommentList from '../CommentList/CommentList';
import Loader from '../Loader/Loader';

const PostDetail = ({ posts }) => {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  }, [postId]);

  if (!post) {
    return (
      <Loader />
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
