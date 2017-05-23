import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import TopBtns from '../TopBtns/TopBtns';
import Setting from './Setting';

class SettingsScreen extends Component {
  render() {
    return(
      <View style={ styles.container }>
        <View style={ styles.top }>
          <TopBtns
            navigator={ this.props.navigator }
            names={ ['mobile-phone', 'user-circle'] }
            routesId={ ['settings', 'userProfile'] }
          />
        </View>
        <ScrollView>
          <Setting
            name='volume-up'
            txt='Aplication Sounds'
          />
          <Setting
            name='mobile-phone'
            txt='Vibrations'
          />
          <Setting
            name='envelope'
            txt='Notifications'
          />
          <Setting
            name='globe'
            txt='Links Open In Browser'
          />
          <Setting
            name='map-marker'
            txt='Your Location'
          />
        </ScrollView>
      </View>
    )
  }
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  },
  top: {
    flexDirection: 'row'
  }
})