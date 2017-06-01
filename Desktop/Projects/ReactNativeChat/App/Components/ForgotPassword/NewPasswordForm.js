import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

class NewPasswordForm extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.getNewPass = this.getNewPass.bind(this);

    this.state = {
      email: null
    }
  }

  getNewPass(email) {
    if(email) {
      this.setState({ email: null })
    } else {
      Alert.alert('Check e-mail field!')
    }
  }

  onChange(val) {
    this.setState({ email: val })
  }

  render() {
    return(
      <View style={ styles.container }>
        <TextInput
          style={ styles.input }
          placeholder='E-mail'
          underlineColorAndroid='transparent'
          onChange={ (e) => this.onChange(e.nativeEvent.text) }
          value={ this.state.email }
        />
        <TouchableOpacity
          style={ styles.btn }
          onPress={ () => this.getNewPass(this.state.email) }
        >
          <Text style={ styles.btnTxt }>SEND</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => this.props.navigator.replace({ id: 'signInScreen' }) }>
            <Text style={ styles.btnTxt }>Already Account?</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

export default NewPasswordForm;

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