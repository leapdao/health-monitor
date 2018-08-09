import React from 'react';
import Monitor from '../components/monitor';

export default () => {
  return (
    <div className="page">
      <h1>PARSEC nodes health monitor</h1>
      <Monitor nodes={['http://localhost:8646']} />
    </div>
  );
};
