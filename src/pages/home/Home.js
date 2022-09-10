import React from 'react';
import { useRedirect } from '../../hooks/Redirect';

const Home = () => {
  useRedirect("loggedOut");
  return (
    <div>Home Page</div>
  )
}

export default Home