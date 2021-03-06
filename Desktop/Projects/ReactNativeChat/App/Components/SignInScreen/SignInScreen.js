import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import LogInForm from './LogInForm';

class SignInScreen extends Component {
  render() {
    return(
      <View style={ styles.container }>
        <View style={ styles.logoContainer }>
          <Image 
            source={ require('../../Images/ic_question_answer_white_36dp_2x.png') }
            style={ styles.logo } 
          />
          <Text style={ styles.logoTxt }>Chat App</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <LogInForm setUser={ this.props.setUser } navigator={ this.props.navigator } />
        </View>
        <View>
          <TouchableOpacity onPress={ () => this.props.navigator.replace({ id: 'signUpScreen' }) }>
          <Text style={ styles.btnTxt }>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => this.props.navigator.replace({ id: 'forgotPassword' }) }>
          <Text style={ styles.btnTxt }>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  },
  logoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    flexGrow: 1
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoTxt: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#E5CD25'
  },
  btnTxt: {
    color: '#fff',
    fontWeight: '400'
  }
})