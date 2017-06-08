import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import { changePassword } from '../../../server/actions/actions';
import store from '../../mobX/store';
import { observer } from 'mobx-react';

class ChangePassword extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.sendData = this.sendData.bind(this);
    
    this.state = {
      oldPwd: null,
      newPwd: null,
      confNewPwd: null
    }
  }

componentWillMount() {
  store.isTopBarArrowVisible = true
}

componentWillUnmount() {
  store.isTopBarArrowVisible = false
}
sendData(_oldPwd, _newPwd, confNewPwd) {
  if(_oldPwd && _newPwd && _newPwd === confNewPwd) {
    changePassword(this.props.user.id, {
      oldPwd: _oldPwd,
      newPwd: _newPwd
    }).then((res) => {
      if(res.msg !== 'success') {
        Alert.alert(res.msg)
      } else {
        this.setState({
          oldPwd: null,
          newPwd: null,
          confNewPwd: null
        })
        this.props.navigator.pop()
      }
    })
    .catch(() => {
      Alert.alert('Something gone wrong.')
    })
  } else {
    Alert.alert('Check all fields.')
  }
}

  onChange(field, val) {
    this.setState({ [field]: val })
  }
  
  render() {
    return(
      <View style={ styles.container }>
        <View style={ styles.fieldContainer }>
          <Text style={ styles.fieldTxt }>Old Password:</Text>
          <TextInput
              style={ styles.input }
              underlineColorAndroid='transparent'
              secureTextEntry
              onChange={ (e) => this.onChange('oldPwd', e.nativeEvent.text) }
              value={ this.state.oldPwd }
            />
        </View>
        <View style={ styles.fieldContainer }>
          <Text style={ styles.fieldTxt }>New Password:</Text>
          <TextInput
              style={ styles.input }
              underlineColorAndroid='transparent'
              secureTextEntry
              onChange={ (e) => this.onChange('newPwd', e.nativeEvent.text) }
              value={ this.state.newPw }
            />
        </View>
        <View style={ styles.fieldContainer }>
          <Text style={ styles.fieldTxt }>Confirm New Password:</Text>
          <TextInput
              style={ styles.input }
              underlineColorAndroid='transparent'
              secureTextEntry
              onChange={ (e) => this.onChange('confNewPwd', e.nativeEvent.text) }
              value={ this.state.confNewPwd }
            />
        </View>
        <TouchableOpacity
          style={ styles.btn }
          onPress={ () => this.sendData(this.state.oldPwd, this.state.newPwd, this.state.confNewPwd) }
        >
          <Text style={ styles.btnTxt }>Send</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
export default observer(ChangePassword);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  fieldTxt: {
    fontSize: 16,
    marginBottom: 10,
    color: '#fff',
    fontWeight: 'bold'
  },
  input: {
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingLeft: 10
  },
  fieldContainer: {
    marginBottom: 20,
  },
  btn: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#57AF21',
    borderRadius: 10
  },
  btnTxt: {
    color: '#fff',
    fontSize: 16
  }
})