import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './UserDetail.css';

const UserDetail = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [userAlbums, setUserAlbums] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });

    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => {
        setUserPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user posts:', error);
      });

    axios
      .get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => {
        setUserAlbums(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user albums:', error);
      });
  }, [userId]);

  if (!user) {
    return (
      <div className="user-detail">
        <h1>No user with such id</h1>
        <Link to="/">Return me home</Link>
      </div>
    );
  }

  return (
    <div className="user-detail">
      <h1>{user.username}</h1>
      <h2>Posts</h2>
      <table className="posts-table">
        <thead>
          <tr>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {userPosts.map((post) => (
            <tr key={post.id}>
              <td>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Albums</h2>
      <table className="albums-table">
        <thead>
          <tr>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {userAlbums.map((album) => (
            <tr key={album.id}>
              <td>
                <Link to={`/album/${album.id}`}>{album.title}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetail;
