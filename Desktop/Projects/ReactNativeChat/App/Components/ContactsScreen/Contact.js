import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isUserAvatar: null
    }
  }

  render() {

    const avatar = this.state.isUserAvatar ?
    <Image
      source={ this.state.isUserAvatar }
    />
    :
    <Icon
      name='user-circle'
      size={ 55 }
      color='#E5CD25'
    />

    return(
      <View style={ styles.container }>
        <View style={ styles.avatar }>
          { avatar }
        </View>
        <View style={ styles.nameContainer }>
          <Text style={ styles.name }>{ this.props.user.username }</Text>
        </View>
        <TouchableOpacity style={ [styles.addBtn] }>
          <Icon
            name='plus'
            size={ 30 }
            color='#57AF21'
          />
        </TouchableOpacity>
      </View>
    )
  }
}

export default Contact;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10
  },
  avatar: {
    flex: 2
  },
  nameContainer: {
    flex: 7,
    justifyContent: 'center'
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  addBtn: {
    flex: 1,
    justifyContent: 'center'
  }
})