import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class TopBar extends Component {
  render() {
    return(
      <View style={ styles.container }>
        <Text style={ styles.title }>Chat App</Text>
      </View>
    )
  }
}

export default TopBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#313131',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#E5CD25',
    fontSize: 35,
    fontWeight: 'bold'
  }
})