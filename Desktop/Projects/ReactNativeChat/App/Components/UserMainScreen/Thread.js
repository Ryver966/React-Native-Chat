import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Thread extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isUserAvatar: null
    }
  }

  render() {

    const avatar = this.state.isUserAvatar ? 
      <Image
        source={ this.state.isUserAvatar }
      />
      :
      <Icon
        name='user-circle'
        size={ 65 }
        color='#E5CD25'
      />

    return(
      <TouchableOpacity 
        style={ styles.container }
        onPress={ () => this.props.nav.push({ id: 'thread' }) }
      >
        <View style={{ flex: 1 }}>
          { avatar }
        </View>
        <View style={{ flex: 4, paddingLeft: 10 }}>
          <Text style={ styles.name }>{ this.props.name }</Text>
          <Text style={ styles.lastMessage }>{ this.props.message }</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default Thread;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  lastMessage: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8
  }
})