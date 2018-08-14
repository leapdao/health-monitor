import React from 'react';
import Monitor from '../components/monitor';

export default () => {
  return (
    <div className="page">
      <h1>PARSEC nodes health monitor</h1>
      <Monitor
        nodes={[
          {
            url: 'https://testnet-1.parseclabs.org',
            label: 'Testnet #1',
          },
          {
            url: 'https://testnet-2.parseclabs.org',
            label: 'Testnet #2',
          },
        ]}
      />
    </div>
  );
};
