import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import SignInScreen from './Components/SignInScreen/SignInScreen';
import SignUpScreen from './Components/SignUpScreen/SignUpScreen';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import LoadingScreen from './Components/LoadingScreen';

class App extends Component {

  constructor(props) {
    super(props);

    this.renderScene = this.renderScene.bind(this);

    this.state = {
      isLoading: true
    }
  }
  componentWillMount() {
    setTimeout(() =>{ this.setState({ isLoading: false }) }, 2000)
  }

  renderScene(route, navigator) {
    switch(route.id) {
      case 'signInScreen':
      return <SignInScreen navigator={ navigator } />
      case 'signUpScreen':
      return <SignUpScreen navigator={ navigator } />
      case 'forgotPassword':
      return <ForgotPassword navigator={ navigator } />
      case 'loadingScreen':
      return <LoadingScreen />
    }
  }

  render() {
      if(this.state.isLoading) {
        return(
          <View style={ styles.container }>
            <LoadingScreen />
          </View>
        )
      } else {
        return(
          <View style={ styles.container }>
            <Navigator
              initialRoute={{ id: 'signInScreen' }}
              renderScene={ this.renderScene }
            />
          </View>
      )
      }
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#828281',
    paddingBottom: 20
  }
})