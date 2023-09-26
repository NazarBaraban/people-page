// AlbumPhotos.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './AlbumPhotos.css';

const AlbumPhotos = () => {
  const { albumId } = useParams();
  const [albumPhotos, setAlbumPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => {
        setAlbumPhotos(response.data);
      })
      .catch((error) => {
        console.error('Error fetching album photos:', error);
      });
  }, [albumId]);

  return (
    <div>
      <h2 className="album-title">Album Photos</h2>
      <ul className="photo-list">
        {albumPhotos.map((photo) => (
          <li key={photo.id} className="photo-item">
            <img src={photo.thumbnailUrl} alt={photo.title} className="photo-img" />
            <span className="photo-caption">{photo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumPhotos;
