import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Message extends Component {
  render() {
    const avatar = this.props.message.author.avatar ? 
      <Image
        source={ this.props.avatar }
        style={ styles.avatar }
      />
      :
      <Icon
        name='user-circle'
        size={ 35 }
        color='#E5CD25'
      />

    return(
      <TouchableOpacity style={ [styles.container,
        this.props.isValidUser ? { backgroundColor: '#616161' } : ''] }
      >
        <View style={[{ flex: 1 }, this.props.isValidUser ? { display: 'none' } : ''] }>
          { avatar }
        </View>
        <View style={{ flex: 9, paddingLeft: 5 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={ styles.name }>{ this.props.message.author.username }</Text>
            <Text style={ styles.date }>{ this.props.message.createdAt.substring(0, 10) }</Text>
          </View>
          <Text style={ styles.msgTxt }>{ this.props.message.msg }</Text>
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
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 60
  }
})