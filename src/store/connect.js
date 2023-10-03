
import React from 'react';
import { StateContext } from '../stateContext';

const connect = (Component) => {
  class Connect extends React.Component {

    render() {
      return <Component {...this.context}></Component>
    }
  }
  Connect.contextType = StateContext;
  return Connect;
}

export default connect;