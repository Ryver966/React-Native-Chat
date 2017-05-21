import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import TopBar from '../TopBar/TopBar';

class UserMainScreen extends Component {
  render() {
    return(
      <View style={ styles.container }>
        <View style={ styles.topContainer }>
          <TopBar />
        </View>
        <View style={ styles.bodyContainer }>
          <ScrollView style={{ flex: 1 }}>

          </ScrollView>
        </View>
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