import React from 'react';
import Icon from './icon';

class Logo extends React.Component {
  render() {
    return (
      <div>
        <Icon />
        <h1 className="picogram-logo">picogram</h1>
      </div>
    );
  }
}

export default Logo;
