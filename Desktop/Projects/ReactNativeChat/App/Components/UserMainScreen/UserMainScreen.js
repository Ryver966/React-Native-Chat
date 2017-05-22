import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import TopBar from '../TopBar/TopBar';

export let nav;

class UserMainScreen extends Component {
  render() {
    nav = this.props.navigator;
    return(
      <View style={ styles.container }>
        <ScrollView style={{ flex: 1 }}>

        </ScrollView>
      </View>
    )
  }
}

export default UserMainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topContainer: {
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#E5CD25'
  },
  bodyContainer: {
    flex: 6
  }
})