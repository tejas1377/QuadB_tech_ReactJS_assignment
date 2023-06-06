import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomeScreen = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setShows(response.data);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">TV Shows</h2>
      <div className="row">
        {shows.map((show) => (
          <div className="col-md-4 mb-4" key={show.show.id}>
            <div className="card h-100">
              <img
                src={show.show.image?.medium}
                alt={show.show.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{show.show.name}</h5>
                <Link to={`/shows/${show.show.id}`} className="btn btn-primary">
                  View Summary
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
