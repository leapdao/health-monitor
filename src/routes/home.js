import React from 'react';
import Monitor from '../components/monitor';

export default () => {
  return (
    <div className="page">
      <h1>PARSEC nodes health monitor</h1>
      <Monitor
        nodes={[
          {
            url: 'http://ec2-34-254-247-1.eu-west-1.compute.amazonaws.com:8545',
            label: 'Alice',
          },
        ]}
      />
    </div>
  );
};
