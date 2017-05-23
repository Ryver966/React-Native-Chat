import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Setting extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isEnable: false
    }
  }

  render() {
    return(
      <TouchableOpacity 
        style={ styles.container }
        onPress={ () => this.setState({ isEnable: !this.state.isEnable }) }
      >
        <Icon
          name={ this.props.name }
          size={ 30 }
          color='#828181'
          style={{ justifyContent: 'flex-start' }}
        />
        <Text style={ styles.txt }>{ this.props.txt }</Text>
        <Icon
          name={ this.state.isEnable ? 'toggle-on' : 'toggle-off' }
          size={ 30 }
          color='#828181'
          style={{ justifyContent: 'flex-end' }}
        />
      </TouchableOpacity>
    )
  }
}

export default Setting;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 65,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20
  },
  txt: {
    justifyContent: 'center',
    fontSize: 20
  }
})