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
  render() {
    return(
      <View style={ styles.container }>
        <TouchableOpacity
          style={{ flex: 1, alignItems: 'center' }}
         
        >
          <Icon
            name='comments-o'
            size={ 35 }
            color='#E5CD25'
          />
        </TouchableOpacity>
        <TouchableOpacity
         style={{ flex: 1, alignItems: 'center' }}
         onPress={ () => nav.replace({ id: 'contactsList' }) }
        >
          <Icon
            name='group'
            size={ 35 }
            color='#E5CD25'
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1, alignItems: 'center' }}
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
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20
  }
})