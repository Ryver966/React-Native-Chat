import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import store from '../../mobX/store';
import { observer } from 'mobx-react';

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
            state={ store.soundsSetting }
            storageContainer='sounds'
          />
          <Setting
            name='mobile-phone'
            txt='Vibrations'
            state={ store.vibrateSetting }
            storageContainer='vibrate'
          />
          <Setting
            name='envelope'
            txt='Notifications'
            state={ store.notificationsSetting }
            storageContainer='notifications'
          />
        </ScrollView>
      </View>
    )
  }
}

export default observer(SettingsScreen);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  },
  top: {
    flexDirection: 'row'
  }
})