import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class UserOption extends Component {

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
        onPress={ () => this.props.navigator.push({ id: this.props.routeId }) }
      >
        <Icon
          name={ this.props.name }
          size={ 30 }
          color='#828181'
          style={{ flex: 1 }}
        />
        <Text style={ styles.txt }>{ this.props.txt }</Text>
      </TouchableOpacity>
    )
  }
}

export default UserOption;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    height: 65,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20
  },
  txt: {
    justifyContent: 'center',
    fontSize: 20,
    flex: 4
  }
})