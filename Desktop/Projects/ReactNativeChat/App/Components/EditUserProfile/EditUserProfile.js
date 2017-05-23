import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class EditUserProfile extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.sendData = this.sendData.bind(this);

    this.state = {
      userAvatar: null,
      email: 'randomEmail',
      name: 'randomName'
    }
  }

  sendData(_avatar, _email, _name) {
    console.log({ 
      avatar: _avatar,
      email: _email,
      name: _name 
    })
  }

  onChange(field, val) {
    this.setState({ [field]: val })
  }

  render() {

    const avatar = this.state.userAvatar ? 
      <Image
        source={ require(this.state.userAvatar) }
      />
      :
      <Icon
        name='plus'
        size={ 50 }
        color='#828181'
      />

    return(
      <View style={ styles.container }>
        <TouchableOpacity style={ styles.avatarContainer }>
          { avatar }
        </TouchableOpacity>
        <View style={ styles.fieldContainer }>
          <Text style={ styles.fieldTxt }>E-Mail:</Text>
          <View style={ styles.inputContainer }>
            <Icon
              name='at'
              size={ 25 }
              color='#828181'
              style={{ flex: 1 }}
            />
            <TextInput
              style={{ flex: 6 }}
              underlineColorAndroid='transparent'
              onChange={ (e) => this.onChange('email', e.nativeEvent.text) }
              value={ this.state.email }
            />
          </View>
        </View>
        <View style={ styles.fieldContainer }>
          <Text style={ styles.fieldTxt }>Name:</Text>
          <View style={ styles.inputContainer }>
            <Icon
              name='user'
              size={ 25 }
              color='#828181'
              style={{ flex: 1 }}
            />
            <TextInput
              style={{ flex: 6 }}
              underlineColorAndroid='transparent'
              onChange={ (e) => this.onChange('name', e.nativeEvent.text) }
              value={ this.state.name }
            />
          </View>
        </View>
        <TouchableOpacity
          style={ styles.btn }
          onPress={ () => this.sendData(this.state.avatar, this.state.email, this.state.name) }
        >
          <Text style={ styles.btnTxt }>Send</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default EditUserProfile;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  },
  avatarContainer: {
    height: 120,
    width: 120,
    borderRadius: 100,
    backgroundColor: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  inputContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 45,
    borderRadius: 10,
    padding: 10
  },
  fieldContainer: {
    marginBottom: 20
  },
  fieldTxt: {
    fontSize: 16,
    marginBottom: 10,
    color: '#fff',
    fontWeight: 'bold'
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