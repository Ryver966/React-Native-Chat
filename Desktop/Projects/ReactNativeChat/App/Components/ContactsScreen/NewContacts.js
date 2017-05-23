import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import TopBtns from '../TopBtns/TopBtns';
import SearchField from './SearchField';

class NewContacts extends Component {
  render() {
    return(
      <View style={ styles.container }>
        <View style={ styles.top }>
          <TopBtns 
            navigator={ this.props.navigator } 
            names={ ['group', 'user-plus'] }
            routesId={ ['contactsList', 'newContacts'] }
          />
        </View>
          <SearchField txt={ 'Search New Friend' } />
      </View>
    )
  }
}

export default NewContacts;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  },
  top: {
    flexDirection: 'row'
  }
})