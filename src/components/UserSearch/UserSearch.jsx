import React from 'react';
import './UserSearch.css';

const UserSearch = ({ query, onQueryChange, onSortChange, sortOrder }) => {
  return (
    <div className="user-search">
      <div className="search-input">
        <form>
          <input
            type="text"
            placeholder="Search by username"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
          />
        </form>
      </div>
      <div className="sort-controls">
        <label className="sort-label">Sort: </label>
        <select className="sort-select" onChange={(e) => onSortChange(e.target.value)} value={sortOrder}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
};

export default UserSearch;
