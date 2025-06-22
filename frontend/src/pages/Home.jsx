import React from 'react';
import ServiceList from '../components/ServiceList';
import BookingForm from '../components/BookingForm';

const Home = () => (
  <div className="home">
    <ServiceList />
    <BookingForm />
  </div>
);

export default Home;
// This is the home page of the service booking portal.
// It imports the ServiceList component to display available services and the BookingForm component for users to