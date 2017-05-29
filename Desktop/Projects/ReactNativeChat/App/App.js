import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

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

class App extends Component {

  constructor(props) {
    super(props);

    this.renderScene = this.renderScene.bind(this);
    this.setBottomBarVisibility = this.setBottomBarVisibility.bind(this);

    this.state = {
      isLoading: true,
      isUserLogged: false,
      isBottombarVisible: true
    }
  }
  componentWillMount() {
    setTimeout(() =>{ this.setState({ isLoading: false, isUserLogged: true }) }, 1000);
  }

  setBottomBarVisibility() {
    this.setState({ isBottombarVisible: !this.state.isBottombarVisible })
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
      return <ThreadView 
        navigator={ navigator } 
        bottomBarVisibility={ this.setBottomBarVisibility } 
      />
    }
  }

  render() {
    let nav;
    console.log(this.renderScene)
      if(this.state.isLoading) {
        return(
          <View style={ styles.container }>
            <LoadingScreen />
          </View>
        )
      } else if(this.state.isUserLogged && !this.state.isLoading) {
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
            <View style={ [styles.bottomContainer, this.state.isBottombarVisible ? '' : { display: 'none' }] }>
              <BottomBar />
            </View>
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
          </View>
        )
      }
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#828281'
  },
  bottomContainer: {
    flex: 1
  }
})