import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { nav } from '../UserMainScreen/UserMainScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import store from '../../mobX/store';
import { observer } from 'mobx-react';

class TopBar extends Component {
  render() {
    return(
      <View style={ styles.container }>
        <TouchableOpacity
          style={ store.isTopBarArrowVisible ? '' : { display: 'none' }}
          onPress={ () => nav.pop() }
        >
          <Icon
            name='chevron-left'
            size={ 30 }
            color='#E5CD25'
          />
        </TouchableOpacity>
        <View>
          
        </View>
        <Text style={ styles.title }>Chat App</Text>
      </View>
    )
  }
}

export default observer(TopBar);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#313131',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 20
  },
  title: {
    color: '#E5CD25',
    fontSize: 35,
    fontWeight: 'bold',
    flex: 6,
    textAlign: 'center'
  },
})