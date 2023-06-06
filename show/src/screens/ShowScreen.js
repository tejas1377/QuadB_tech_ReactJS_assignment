import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ShowDetail from '../components/ShowDetail';
import BookingForm from '../components/BookingForm';

const ShowScreen = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShow(response.data);
      } catch (error) {
        console.error('Error fetching show:', error);
      }
    };

    fetchShow();
  }, [id]);

  const handleBookTicket = () => {
    setIsBookingFormOpen(true);
  };

  const handleCloseBookingForm = () => {
    setIsBookingFormOpen(false);
  };

  return (
    <div className="container mt-5">
      {show ? (
        <div>
          <ShowDetail show={show} onBookTicket={handleBookTicket} />
          {isBookingFormOpen && (
            <BookingForm movieName={show.name} onClose={handleCloseBookingForm} />
          )}
        </div>
      ) : (
        <p>Loading show...</p>
      )}
    </div>
  );
};

export default ShowScreen;
