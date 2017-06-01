import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  AsyncStorage
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import { 
  getUsers, 
  getValidUser 
} from '../server/actions/actions';

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
    this.setBottomBarVisibility = this.setBottomBarVisibility.bind(this);
    this.setTopBarArrowVisibility = this.setTopBarArrowVisibility.bind(this);
    this.checkUser = this.checkUser.bind(this);

    this.state = {
      isLoading: true,
      isUserLogged: false,
      isBottombarVisible: true,
      isTopBarArrowVisible: false,
      users: null,
      user: null,
      token: null
    }
  }
  componentWillMount() {
    setTimeout(() =>{ this.setState({ isLoading: false }) }, 1000);
    getUsers().then((res) => this.setState({ users: res }));
    AsyncStorage.getItem('token'). then((val) => {
      if(val) {
        this.setState({ token: val, isUserLogged: true })
      } else {
        this.setState({ isUserLogged: false })
      }
    })
  }
  checkUser() {
    getValidUser(this.state.token).then((user) => { 
      this.setState({ user: user })
    });
  }

  setTopBarArrowVisibility() {
    this.setState({ isTopBarArrowVisible: !this.state.isTopBarArrowVisible })
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
      return <NewContacts users={ this.state.users } navigator={ navigator } />
      case 'settings':
      return <SettignsScreen navigator={ navigator } />
      case 'userProfile':
      return <UserProfile navigator={ navigator } />
      case 'editUserProfile':
      return <EditUserProfile 
        navigator={ navigator } 
        topBarArrowVisibility={ this.setTopBarArrowVisibility }
      />
      case 'thread':
      return <ThreadView 
        navigator={ navigator } 
        bottomBarVisibility={ this.setBottomBarVisibility } 
        topBarArrowVisibility={ this.setTopBarArrowVisibility }
      />
      case 'changePassword':
      return <ChangePassword 
        navigator={ navigator } 
        user={ this.state.user } 
        topBarArrowVisibility={ this.setTopBarArrowVisibility }
      />
    }
  }

  render() {
    this.checkUser();
    let nav;
      if(this.state.isLoading) {
        return(
          <View style={ styles.container }>
            <LoadingScreen />
          </View>
        )
      } else if(!this.state.isLoading && this.state.isUserLogged) {
        return(
          <View style={ styles.container }>
            <StatusBar
              barStyle='light-content'
            />
            <View style={{ flex: 1 }}>
              <TopBar isArrowVisible={ this.state.isTopBarArrowVisible } />
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