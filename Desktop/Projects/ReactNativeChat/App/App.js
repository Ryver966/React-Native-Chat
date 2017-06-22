import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  AsyncStorage,
  AppState,
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import { 
  getUsers, 
  getValidUser,
  changeOnlineStatus 
} from '../server/actions/actions';
import store from './mobX/store';
import { observer } from 'mobx-react';
import PushNotificationController from './Components/PushNotificationController/PushNotificationController';
import PushNotification from 'react-native-push-notification';

import SignInScreen from './Components/SignInScreen/SignInScreen';
import SignUpScreen from './Components/SignUpScreen/SignUpScreen';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import LoadingScreen from './Components/LoadingScreen';
import UserMainScreen from './Components/UserMainScreen/UserMainScreen';
import TopBar from './Components/TopBar/TopBar';
import BottomBar from './Components/BottomBar/BottomBar';
import ContactsList from './Components/ContactsScreen/ContactsList';
import NewContacts from './Components/ContactsScreen/NewContacts';
import SettignsScreen from './Components/SettingsScreen/SettingsScreen';
import UserProfile from './Components/SettingsScreen/UserProfile';
import EditUserProfile from './Components/EditUserProfile/EditUserProfile';
import ThreadView from './Components/ThreadView/ThreadView';
import ChangePassword from './Components/ChangePassword/ChangePassword';

class App extends Component {

  constructor(props) {
    super(props);

    this.renderScene = this.renderScene.bind(this);
    this.handleAppState = this.handleAppState.bind(this);

  }

  handleAppState(currentState){
    if(currentState === 'background') { 
      AsyncStorage.getItem('token').then((result) => {
        changeOnlineStatus(result)
      })
      PushNotification.localNotification({
        message: 'Test msg. Asd zxc, zxc asd.',
        number: 1,
        playSound: store.soundsSetting,
        vibrate: store.vibrateSetting,
        vibration: 300
      })
    } else if(currentState === 'active') {
      AsyncStorage.getItem('token').then((result) => {
        changeOnlineStatus(result)
      })
    }
  }

  componentWillMount() {
    store.settingsState()
    getUsers().then((res) => store.allUsers = res);
    AsyncStorage.getItem('token')
    .then((val) => {
      if(val) {
        store.token = val
        store.setValidUser(val)
      } else {
        store.setValidUser()
      }
    })
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppState);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppState);
  }

  renderScene(route, navigator) {
    switch(route.id) {
      case 'signInScreen':
      return <SignInScreen navigator={ navigator } />
      case 'signUpScreen':
      return <SignUpScreen navigator={ navigator } />
      case 'forgotPassword':
      return <ForgotPassword navigator={ navigator } />
      case 'mainUserScreen':
      return <UserMainScreen navigator={ navigator } />
      case 'contactsList':
      return <ContactsList navigator={ navigator } />
      case 'newContacts':
      return <NewContacts navigator={ navigator } />
      case 'settings':
      return <SettignsScreen navigator={ navigator } />
      case 'userProfile':
      return <UserProfile navigator={ navigator } />
      case 'editUserProfile':
      return <EditUserProfile navigator={ navigator } />
      case 'thread':
      return <ThreadView navigator={ navigator } />
      case 'changePassword':
      return <ChangePassword navigator={ navigator } />
    }
  }

  render() {
    let nav;
      if(store.isLoading) {
        return(
          <View style={ styles.container }>
            <LoadingScreen />
          </View>
        )
      } else if(!store.isLoading && store.validUser) {
        return(
          <View style={ styles.container }>
            <StatusBar
              barStyle='light-content'
            />
            <View style={{ flex: 1 }}>
              <TopBar />
            </View>
            <Navigator
              initialRoute={{ id: 'mainUserScreen' }}
              renderScene={ this.renderScene }
              style={{ flex: 8 }}
            />
            <View style={ [styles.bottomContainer, store.isBottombarVisible ? '' : { display: 'none' }] }>
              <BottomBar />
            </View>
            <PushNotificationController />
          </View>
        )
      } else {
        return(
          <View style={ styles.container }>
            <StatusBar
              barStyle='light-content'
            />
            <Navigator
              initialRoute={{ id: 'signInScreen' }}
              renderScene={ this.renderScene }
            />
            <PushNotificationController />
          </View>
        )
      }
  }
}

export default observer(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#828281'
  },
  bottomContainer: {
    flex: 1
  }
})