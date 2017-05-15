import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';

class LogInForm extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = {
      email: null,
      password: null
    }
  }

  onChange(fieldName, val) {
    this.setState({ [fieldName]: val })
  }

  render() {
    return(
      <View style={ styles.container }>
        <TextInput
          style={ styles.input }
          placeholder='E-mail'
          underlineColorAndroid='transparent'
          onChange={ (e) => this.onChange('email', e.nativeEvent.text) }
        />
        <TextInput
          style={ styles.input }
          placeholder='Password'
          underlineColorAndroid='transparent'
          onChange={ (e) => this.onChange('password', e.nativeEvent.text) }
        />
        <TouchableOpacity
          style={ styles.btn }
        >
          <Text style={ styles.btnTxt }>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default LogInForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10
  },
  input: {
    backgroundColor: 'rgba(255,255,255, 0.8)',
    height: 40,
    marginBottom: 10,
    paddingLeft: 5
  },
  btn: {
    backgroundColor: '#313131',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#E5CD25'
  },
  btnTxt: {
    color: '#fff',
    fontWeight: '500'
  }
})