import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { nav } from '../UserMainScreen/UserMainScreen';

class BottomBar extends Component {

  constructor(props) {
    super(props);

    this.navigate = this.navigate.bind(this);

    this.state = {
      borderMainScreen: true,
      borderContactsScreen: false,
      borderSettingsScreen: false
    }
  }

  navigate(fieldName, navId) {
    nav.replace({ id: navId })

    this.setState({ 
      borderMainScreen: false,
      borderContactsScreen: false,
      borderSettingsScreen: false,
      [fieldName]: true
    })
  }  

  render() {
    return(
      <View style={ styles.container }>
        <TouchableOpacity
          style={ [styles.btn,
          this.state.borderMainScreen ? { borderBottomWidth: 4, borderColor: '#E5CD25', backgroundColor: '#212121' } : '' ] }
          onPress={ () => this.navigate('borderMainScreen', 'mainUserScreen') }
        >
          <Icon
            name='comments-o'
            size={ 35 }
            color='#E5CD25'
          />
        </TouchableOpacity>
        <TouchableOpacity
         style={ [styles.btn,
          this.state.borderContactsScreen ? { borderBottomWidth: 4, borderColor: '#E5CD25', backgroundColor: '#212121' } : '' ] }
         onPress={ () => this.navigate('borderContactsScreen', 'contactsList') }
        >
          <Icon
            name='group'
            size={ 35 }
            color='#E5CD25'
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={ [styles.btn,
          this.state.borderSettingsScreen ? { borderBottomWidth: 4, borderColor: '#E5CD25', backgroundColor: '#212121' } : '' ] }
          onPress={ () => this.navigate('borderSettingsScreen', 'settings') }
        >
          <Icon
            name='gear'
            size={ 35 }
            color='#E5CD25'
          />
        </TouchableOpacity>
      </View>
    )
  }
}

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#313131',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})