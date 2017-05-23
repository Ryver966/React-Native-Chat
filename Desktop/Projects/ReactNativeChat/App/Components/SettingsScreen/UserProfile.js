import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import TopBtns from '../TopBtns/TopBtns';
import UserOption from './UserOption';

class UserProfile extends Component {

  constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    console.warn('Logged Out')
  }

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
          <UserOption
            navigator={ this.props.navigator }
            name='pencil'
            txt='Edit User Profile'
            routeId='editUserProfile'
          />
          <UserOption
            navigator={ this.props.navigator }
            name='shield'
            txt='Change Password'
            routeId='test'
          />
          <UserOption
            navigator={ this.props.navigator }
            name='question'
            txt='Help'
            routeId='test'
          />
        </ScrollView>
        <TouchableOpacity
          style={ styles.btn }
          onPress = { () => this.signOut() }
        >
          <Icon
            name='sign-out'
            size={ 30 }
            color='#828181'
            style={{ flex: 1 }}
          />
          <Text style={ styles.btnTxt }>Sign Out</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  },
  top: {
    flexDirection: 'row'
  },
  btn: {
    backgroundColor: '#E5CD25',
    flexDirection: 'row',
    height: 55,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  btnTxt: {
    color: '#828181',
    flex: 4
  }
})