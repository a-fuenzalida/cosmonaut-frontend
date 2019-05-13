import React, { Component } from 'react';

import { AuthContext } from '../context/AuthContext';

class Feed extends Component {
  render() {
    const value = this.context;
    return (
      <div>
        Feed
      </div>
    )
  }
}

export default Feed;