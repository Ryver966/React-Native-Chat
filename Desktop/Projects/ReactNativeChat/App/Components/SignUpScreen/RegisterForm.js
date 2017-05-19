import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { createUser } from '../../../server/actions/actions';

class RegisterForm extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.signUp = this.signUp.bind(this);

    this.state = {
      email: null,
      name: null,
      password: null,
      confPassword: null
    }

  }

  signUp(_email, _name, pass, confPass) {
    if(_email && _name && pass && pass === confPass) {
      createUser({ 
        email: _email,
        password: pass,
        name: _name 
      })
        .then(() => {
          this.setState({
            email: null,
            name: null,
            password: null,
            confPassword: null
          })
        })
        .catch(() => {
          console.warn('Something gone wrong!')
        })
    } else {
      console.warn('Check all fields!')
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
          value={ this.state.email }
        />
        <TextInput
          style={ styles.input }
          placeholder='Name'
          underlineColorAndroid='transparent'
          onChange={ (e) => this.onChange('name', e.nativeEvent.text) }
          value={ this.state.name }
        />
        <TextInput
          style={ styles.input }
          placeholder='Password'
          underlineColorAndroid='transparent'
          secureTextEntry
          onChange={ (e) => this.onChange('password', e.nativeEvent.text) }
          value={ this.state.password }
        />
        <TextInput
          style={ styles.input }
          placeholder='Confirm password'
          underlineColorAndroid='transparent'
          secureTextEntry
          onChange={ (e) => this.onChange('confPassword', e.nativeEvent.text) }
          value={ this.state.confPassword }
        />
        <TouchableOpacity
          style={ styles.btn }
          onPress={ () => this.signUp(this.state.email, this.state.name, this.state.password, this.state.confPassword) }
        >
          <Text style={ styles.btnTxt }>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => this.props.navigator.replace({ id: 'signInScreen' }) }>
            <Text style={ styles.btnTxt }>Already Account?</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

export default RegisterForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 5,
    marginBottom: 10
  },
  btnTxt: {
    color: '#fff',
    fontWeight: '500'
  }
})