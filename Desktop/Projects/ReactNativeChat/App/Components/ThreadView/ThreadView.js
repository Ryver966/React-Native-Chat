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

import Message from './Message';

class ThreadView extends Component {

  constructor(props) {
    super(props);

    this.sendMsg = this.sendMsg.bind(this);

    this.state = {
      msgTxt: null
    }
  }
  componentWillMount() {
    this.props.bottomBarVisibility();
    this.props.topBarArrowVisibility();
  }
  componentWillUnmount() {
    this.props.bottomBarVisibility();
    this.props.topBarArrowVisibility();
  }

  sendMsg(_userName, _msg) {
    if(_msg) {
      console.log({ 
        userName: _userName, 
        msg: _msg 
      })
      this.setState({ msgTxt: null })
    } else {
      Alert.alert('Type some message, please.')
    }
  }

  render() {
    const userName = 'Test User';
    return(
      <View style={{ flex: 1, paddingTop: 10 }}>
        <ScrollView style={{ flex: 1, marginBottom: 20 }}>
          <Message
            navigator={ this.props.navigator }
            userNameBoolean={ false }
            name='John Doe'
            date='15.12.2016'
            msg='asdasdasdadsadsasdazxczxcasdxzcas'
          />
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
          onPress ={ () => this.sendMsg(userName, this.state.msgTxt) }
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

export default ThreadView;

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