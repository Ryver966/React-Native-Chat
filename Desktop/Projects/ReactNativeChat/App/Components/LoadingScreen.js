import React, { Component } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

class LoadingScreen extends Component {
  render() {
    return(
      <Spinner visible={ true } color='#E5CD25' size='large' />
    )
  }
}

export default LoadingScreen;