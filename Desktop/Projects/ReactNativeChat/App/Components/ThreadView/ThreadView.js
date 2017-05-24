import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Message from './Message';

class ThreadView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      msgTxt: null
    }
  }

  render() {
    return(
      <View style={{ flex: 1, paddingTop: 20 }}>
        <ScrollView style={{ flex: 1, marginBottom: 20 }}>
          <Message
            userNameBoolean={ false }
            name='John Doe'
            date='15.12.2016'
            msg='asdasdasdadsadsasdazxczxcasdxzcas'
          />
          <Message
            userNameBoolean={ true }
            name='Jack Sparrow'
            date='15.12.2016'
            msg='Hello world!'
          />
          <Message
            userNameBoolean={ true }
            name='Jack Sparrow'
            date='15.12.2016'
            msg='asdzxcasdasdzxc asdasd zxc sad jsfdjfijsfsojsfadojasofjsadofjasdojfosadjfosadj'
          />
          <Message
            userNameBoolean={ false }
            name='John Doe'
            date='15.12.2016'
            msg='sdfsgfsdfgfdsgterwssdfgrtwegwegwgwgs'
          />
          <Message
            userNameBoolean={ true }
            name='Jack Sparrow'
            date='15.12.2016'
            msg='sdfsgfsdfgfdsgterwssdfgrtwegwegwgwgs'
          />
          <Message
            userNameBoolean={ false }
            name='John Doe'
            date='15.12.2016'
            msg='sdfsgfsdfgfdsgterwssdfgrtwegwegwgwgs'
          />
          <Message
            userNameBoolean={ false }
            name='John Doe'
            date='15.12.2016'
            msg='sdfsgfsdfgfdsgterwssdfgrtwegwegwgwgs'
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
        <TouchableOpacity style={ styles.sendMsgBtn }>
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
    height: 35,
    flex: 9,
    backgroundColor: '#fff',
    paddingLeft: 5,
    marginRight: 10,
    borderRadius: 10,
    fontSize: 14
  },
  sendMsgBtn: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#313131',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10
  }
})