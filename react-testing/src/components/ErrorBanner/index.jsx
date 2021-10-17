import React from 'react';

const ErrorBanner = ({ message }) => {
  return (
    <div
      data-testid="error-banner"
      style={{ backgroundColor: 'red', color: 'white' }}
    >
      {message}
    </div>
  );
};

export default ErrorBanner;
