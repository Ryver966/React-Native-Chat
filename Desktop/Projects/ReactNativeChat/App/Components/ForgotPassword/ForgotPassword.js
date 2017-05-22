import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import NewPasswordForm from './NewPasswordForm';

class ForgotPassword extends Component {
  render() {
    return(
      <View style={ styles.container }>
        <View style={ styles.screenImg }>
          <Image 
            source={ require('../../Images/forgot.jpg') }
            style={ styles.image } 
          >
            <Text style={ styles.imageTxt }>Forgot password?</Text>
          </Image>
        </View>
        <View style={ styles.formContainer }>
          <NewPasswordForm navigator={ this.props.navigator } />
        </View>
      </View>
    )
  }
}

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  screenImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    marginBottom: -30
  },
  imageTxt: {
    color: '#fff',
    alignSelf: 'flex-end',
    textAlign: 'center',
    fontSize: 40,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flex: 1
  },
  btnTxt: {
    color: '#fff',
    fontWeight: '400'
  }
})