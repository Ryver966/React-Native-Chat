import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image, 
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import store from '../../mobX/store';
import { observer } from 'mobx-react';
import ImagePicker from 'react-native-image-picker';
import { editProfile } from '../../../server/actions/actions';

class EditUserProfile extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.sendData = this.sendData.bind(this);
    this.selectAvatar = this.selectAvatar.bind(this);

    this.state = {
      userAvatar: store.validUser.avatar,
      email: store.validUser.email,
      name: store.validUser.username
    }
  }

  selectAvatar() {
    const options = {
      title: 'Upload Photo',
      cancelButtonTitle: 'Cancel',
      takePhotoButtonTitle: 'Take Photo...',
      chooseFromLibraryButtonTitle: 'Choose from Library...',
      noData: false,
      mediaType: 'photo',
      quality: 0.2
    }

    ImagePicker.showImagePicker(options, (res) => {
      if(!res.didCancel) {
        this.setState({ userAvatar: res.uri.replace('file://', '') })
      }
    })
  }

  componentWillMount() {
    store.isTopBarArrowVisible = true
  }
  componentWillUnmount() {
    store.isTopBarArrowVisible = false
  }

  sendData(_avatar, _email, _username) {
    
    editProfile(store.validUser.id, { 
      avatar: _avatar,
      email: _email,
      username: _username 
    })
    .then((res) => {
      if(res.msg == 'success') {
        store.setValidUser(store.validUser.id)
        this.props.navigator.pop()
      } else {
        Alert.alert(res.msg)
      }
    })
    .catch((err) => console.log(err))
  }

  onChange(field, val) {
    this.setState({ [field]: val })
  }

  render() {
    const avatar = this.state.userAvatar ? 
      <Image
        source={{ uri: this.state.userAvatar }}
        style={ styles.avatar }
      />
      :
      <Icon
        name='plus'
        size={ 50 }
        color='#828181'
      />

    return(
      <View style={ styles.container }>
        <TouchableOpacity 
          style={ styles.avatarContainer }
          onPress={ () => this.selectAvatar() }
        >
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
              style={ styles.input }
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
              style={ styles.input }
              underlineColorAndroid='transparent'
              onChange={ (e) => this.onChange('name', e.nativeEvent.text) }
              value={ this.state.name }
            />
          </View>
        </View>
        <TouchableOpacity
          style={ styles.btn }
          onPress={ () => this.sendData(this.state.userAvatar, this.state.email, this.state.name) }
        >
          <Text style={ styles.btnTxt }>Send</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default observer(EditUserProfile);

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
    borderRadius: 10,
    padding: 10,
    alignItems: 'center'
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
  },
  input: {
    flex: 6,
    height: 35
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60
  }
})