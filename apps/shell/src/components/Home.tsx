import * as React from 'react';
import { Link } from 'react-router-dom';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <h1>Hi there :) changed</h1>
      <Link to={'/dashboard'}>To Dashboard</Link>
      <br />
      <Link to={'/vue'}>To Vue</Link>
      <br />
      <Link to={'/angular'}>To Angular</Link>
    </>
  );
};
