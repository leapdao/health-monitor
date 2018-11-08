import React from 'react';
import Monitor from '../components/monitor';

export default () => {
  return (
    <div className="page">
      <h1>Leap nodes health monitor</h1>
      <Monitor
        nodes={[
          {
            url: 'https://testnet-1.leapdao.org',
            label: 'Testnet #1',
          },
          {
            url: 'https://testnet-2.leapdao.org',
            label: 'Testnet #2',
          },
        ]}
      />
    </div>
  );
};
