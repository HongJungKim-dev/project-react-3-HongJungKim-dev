import React from 'react';

import { Link } from 'react-router-dom';

export default function StartPage() {
  return (
    <>
      <h1>questions</h1>
      <h1><Link to="/">previous</Link></h1>
      <h1><Link to="/result">next</Link></h1>
    </>
  );
}
