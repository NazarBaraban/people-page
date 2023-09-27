import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import UserSearch from './components/UserSearch/UserSearch';
import UserList from './components/UserList/UserList';
import UserDetail from './components/UserDetails/UserDetail';
import PostDetail from './components/UserDetails/PostDetail';
import AlbumPhotos from './components/UserDetails/AlbumPhotos';

export const App = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleQueryChange = (newQuery) => {
    setSearchQuery(newQuery);
  };

  const handleSortChange = (newSortOrder) => {
    setSortOrder(newSortOrder);
  };

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const sortedUsers = users.slice().sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.username.localeCompare(b.username);
    } else {
      return b.username.localeCompare(a.username);
    }
  });

  const filteredUsers = sortedUsers.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <UserSearch
                  query={searchQuery}
                  onQueryChange={handleQueryChange}
                  onSortChange={handleSortChange}
                  sortOrder={sortOrder}
                />
                <UserList users={filteredUsers} />
              </>
            }
          />
          <Route
            path="/user/:userId"
            element={<UserDetail/>}
          />
          <Route path="/post/:postId" element={<PostDetail />} />
          <Route path="/album/:albumId" element={<AlbumPhotos/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
