import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  AsyncStorage
} from 'react-native';
import { authUser } from '../../../server/actions/actions';

class LogInForm extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.signIn = this.signIn.bind(this);

    this.state = {
      email: null,
      password: null
    }
  }

  signIn(_email, _password) {
    if(_email && _password) {
      authUser({ 
        email: _email,
        password: _password,
      })
        .then((res) => {
          AsyncStorage.setItem('token', res)
          this.setState({
            email: null,
            password: null
          })
        })
        .catch(() => {
          Alert.alert('Something gone wrong!')
        })
    } else {
      Alert.alert('Check all fields!')
    }
  }
john
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
          value={ this.state.email }
        />
        <TextInput
          style={ styles.input }
          placeholder='Password'
          underlineColorAndroid='transparent'
          secureTextEntry
          onChange={ (e) => this.onChange('password', e.nativeEvent.text) }
          value={ this.state.password }
        />
        <TouchableOpacity
          style={ styles.btn }
          onPress={ () => this.signIn(this.state.email, this.state.password) }
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
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E5CD25',
    marginTop: 5
  },
  btnTxt: {
    color: '#fff',
    fontWeight: '500'
  }
})