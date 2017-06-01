import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Message extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isUserName: this.props.userNameBoolean,
      userAvatar: null
    }
  }

  render() {

    const avatar = this.state.userAvatar ? 
      <Image
        source={ this.state.userAvatar }
      />
      :
      <Icon
        name='user-circle'
        size={ 35 }
        color='#E5CD25'
      />

    return(
      <TouchableOpacity style={ [styles.container,
        this.state.isUserName ? { backgroundColor: '#616161' } : ''] }
      >
        <View style={[{ flex: 1 }, this.state.isUserName ? { display: 'none' } : ''] }>
          { avatar }
        </View>
        <View style={{ flex: 9, paddingLeft: 5 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={ styles.name }>{ this.props.name }</Text>
            <Text style={ styles.date }>{ this.props.date }</Text>
          </View>
          <Text style={ styles.msgTxt }>{ this.props.msg }</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default Message;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10
  },
  msgContainer: {
    flex: 7
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#E5CD25',
    marginRight: 10
  },
  date: {
    opacity: 0.8,
    fontSize: 10,
    alignSelf: 'center',
    color: '#fff'
  },
  msgTxt: {
    color: '#fff',
    marginTop: 5
  }
})