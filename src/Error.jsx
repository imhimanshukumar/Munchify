import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Error = () => {
  const location = useLocation();

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Oops! Page not found.</h2>
      <p style={styles.message}>
        The requested URL <code>{location.pathname}</code> was not found on this server.
      </p>
      <p style={styles.message}>
        Go back to <Link to="/" style={styles.link}>home</Link> or try another page.
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Error;
