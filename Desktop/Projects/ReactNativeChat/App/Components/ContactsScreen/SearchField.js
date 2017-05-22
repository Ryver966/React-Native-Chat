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

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = {
      searchField: null
    }
  }

  onChange(val) {
    this.setState({ searchField: val })
  }

  render() {
    return(
      <View style={ styles.searchFieldContainer }>
        <TextInput
          style={ styles.input }
          placeholder={ this.props.txt }
          underlineColorAndroid='transparent'
          onChange={ (e) => this.onChange(e.nativeEvent.text) }
          value={ this.state.searchField }
        />
         <TouchableOpacity
           style={ styles.searchBtn }
        >
          <Icon
            name='search'
            size={ 35 }
            color='#828281'
          />
        </TouchableOpacity>
      </View>
    )
  }
}

export default SearchField;

const styles = StyleSheet.create({
  searchFieldContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10
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