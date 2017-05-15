import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import SignInScreen from './Components/SignInScreen/SignInScreen';

class App extends Component {

  constructor(props) {
    super(props);

    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route, navigator) {
    switch(route.id) {
      case 'signInScreen':
      return <SignInScreen navigator={ navigator } />
    }
  }

  render() {
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

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#828281',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  }
})