import React from 'react';
import PropTypes from 'prop-types';

function getNodeStatus(node) {
  return fetch(node, {
    method: 'post',
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 1,
      method: 'parsec_status',
      params: [],
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(r => r.json(), () => ({ result: 'offline' }))
    .then(r => r.result || 'unsupported-node');
}

const nodeIcons = {
  ok: '✅',
  offline: '🛑',
  'waiting-for-period': '🔶',
  'catching-up': '🏃‍',
};

export default class Monitor extends React.Component {
  static propTypes = {
    nodes: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      statuses: {},
    };

    this.loadStatuses = this.loadStatuses.bind(this);
  }

  componentDidMount() {
    this.loadStatuses();

    setInterval(this.loadStatuses, 10000);
  }

  setNodeStatus(node, status) {
    this.setState(state => ({
      statuses: Object.assign({}, state.statuses, {
        [node]: status,
      }),
    }));
  }

  loadStatuses() {
    this.props.nodes.forEach(node => {
      getNodeStatus(node.url).then(status => {
        this.setNodeStatus(node.url, status);
      });
    });
  }

  render() {
    const { nodes } = this.props;
    const { statuses } = this.state;

    return (
      <ul className="monitor">
        {nodes.map(node => (
          <li key={node.url} className="monitor-item">
            <span className="monitor-node">
              <strong>{node.label}:</strong> {node.url}
            </span>
            <span
              className={`monitor-status monitor-status-${statuses[node.url]}`}
            >
              {statuses[node.url] && nodeIcons[statuses[node.url]]}
              {statuses[node.url] || 'Checking...'}
            </span>
          </li>
        ))}
      </ul>
    );
  }
}
