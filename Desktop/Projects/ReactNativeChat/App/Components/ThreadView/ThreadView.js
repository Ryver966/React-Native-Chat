import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import store from '../../mobX/store';
import { observer } from 'mobx-react';
import { 
  getThreadMessages,
  createMessage
} from '../../../server/actions/actions';
import io from 'socket.io-client';

import Message from './Message';

class ThreadView extends Component {

  constructor(props) {
    super(props);

    this.sendMsg = this.sendMsg.bind(this);

    this.state = {
      msgTxt: null,
      threadMessages: []
    }
  }
  componentWillMount() {
    getThreadMessages(this.props.thread.id)
    .then((messages) => {
      this.setState({ threadMessages: messages })
    })
    .catch((err) => console.log(err))
    
    store.isBottombarVisible = false
    store.isTopBarArrowVisible = true
  }
  componentWillUnmount() {
    store.isBottombarVisible = true
    store.isTopBarArrowVisible = false
  }

  sendMsg(_userName, _msg) {
    const socket = io.connect('http://localhost:4050');

    if(_msg) {
      createMessage(this.props.thread.id, { 
        msg: _msg,
        author: store.validUser.id
      })
      .then(() => {
        socket.emit('message', { threadChatters: this.props.thread.chatters })
        socket.on('message', (data) => {

          getThreadMessages(this.props.thread.id)
          .then((messages) => {
            this.setState({ threadMessages: messages })
            
          })
          .catch((err) => console.log(err))

        })
        this.setState({ msgTxt: null })
      })
      .catch((err) => console.log(err))
    } else {
      Alert.alert('Type some message, please.')
    }
  }

  render() {
    const messages = this.state.threadMessages.map((message, index) => {
      return <Message 
        key={ index }
        message={ message }
        isValidUser={ message.author.username == store.validUser.username ? true : false }
      />
    })
    return(
      <View style={{ flex: 1, paddingTop: 10 }}>
        <ScrollView style={{ flex: 1, marginBottom: 20 }}>
          { messages }
        </ScrollView>
        <View style={ styles.inputContainer }>
          <TextInput
          style={ styles.input }
          placeholder='Type your message...'
          underlineColorAndroid='transparent'
          onChange={ (e) => this.setState({ msgTxt: e.nativeEvent.text }) }
          value={ this.state.msgTxt}
        />
        <TouchableOpacity 
          style={ styles.sendMsgBtn }
          onPress ={ () => this.sendMsg(store.validUser.username, this.state.msgTxt) }
        >
            <Icon
              name='envelope'
              size={ 25 }
              color='#E5CD25'
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default observer(ThreadView);

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#414141',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  input: {
    height: 40,
    flex: 9,
    backgroundColor: '#fff',
    paddingLeft: 5,
    marginRight: 10,
    borderRadius: 10,
    fontSize: 14
  },
  sendMsgBtn: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#313131',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10
  }
})