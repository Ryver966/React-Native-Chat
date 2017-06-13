import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class SearchField extends Component {

  render() {
    return(
      <View style={ styles.searchFieldContainer }>
        <TextInput
          style={ styles.input }
          placeholder={ this.props.txt }
          underlineColorAndroid='transparent'
          onChange={ (e) => this.props.onInputChange(e.nativeEvent.text) }
        />
         <View style={ styles.searchBtn }>
          <Icon
            name='search'
            size={ 35 }
            color='#828281'
          />
        </View>
      </View>
    )
  }
}

export default SearchField;

const styles = StyleSheet.create({
  searchFieldContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    marginBottom: 20
  },
  input: {
    height: 40,
    paddingLeft: 5,
    flex: 1,
  },
  searchBtn: {
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: 'center'
  }
})