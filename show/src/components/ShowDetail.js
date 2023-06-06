import React from 'react';

const ShowDetail = ({ show, onBookTicket }) => {
  const { name, image} = show;

  return (
    <div>
      <h3>{name}</h3>
      {image && <img src={image.medium} alt={name} className="img-fluid mb-3" />}
     
              <h5 className="card-title">Summary:</h5>
              <div className="card-text" dangerouslySetInnerHTML={{ __html: show.summary }} />
      <button className="btn btn-primary" onClick={onBookTicket}>
        Book Ticket
      </button>
    </div>
  );
};

export default ShowDetail;
