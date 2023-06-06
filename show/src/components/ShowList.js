import React from 'react';

const ShowList = ({ shows, onShowSelect }) => {
  return (
    <div>
      {shows.map((show) => (
        <div key={show.show.id}>
          <h3>{show.show.name}</h3>
          <button onClick={() => onShowSelect(show.show.id)}>View Summary</button>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
