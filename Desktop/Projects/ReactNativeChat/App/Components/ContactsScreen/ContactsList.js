import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import TopBtns from './TopBtns';
import SearchField from './SearchField';

class ContactsList extends Component {
  render() {
    return(
      <View style={ styles.container }>
        <View style={ styles.top }>
          <TopBtns navigator={ this.props.navigator } />
        </View>
        <SearchField txt={ 'Search Friend' } />
      </View>
    )
  }
}

export default ContactsList;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1
  },
  top: {
    flexDirection: 'row'
  }
})