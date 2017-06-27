import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { gotoThread } from '../../../server/actions/actions';

class Thread extends Component {

  constructor(props) {
    super(props)

    this.startChat = this.startChat.bind(this)
  }

  startChat(firstName, secondName) {
    gotoThread(firstName, secondName)
    .then((_thread) => {
      this.props.nav.push({ 
        id: 'thread',
        passProps: {
          thread: _thread
        }
       })
    })
    .catch((err) => console.log(err))
  }

  render() {
    return(
      <TouchableOpacity 
        style={ styles.container }
        onPress={ () => this.startChat(this.props.chatters[0], this.props.chatters[1]) }
      >
        <View style={{ flex: 1 }}>
          <Icon
            name='comment'
            size={ 55 }
            color='#E5CD25'
          />
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