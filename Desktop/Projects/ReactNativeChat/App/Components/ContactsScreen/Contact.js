import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import store from '../../mobX/store';
import { observer } from 'mobx-react';
import { addFriend } from '../../../server/actions/actions';

class Contact extends Component {

  constructor(props) {
    super(props);

    this.getFriend = this.getFriend.bind(this);

    this.state = {
      isUserAvatar: null
    }
  }

  getFriend(id, secondUsrId) {
    addFriend(id, secondUsrId)
    .then(() => {
      addFriend(secondUsrId, id)
      .then(() => store.setValidUser(store.validUser.id))
    })
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
        <TouchableOpacity 
          style={ [styles.addBtn, this.props.isFriend ? { display: 'none' } : ''] }
          onPress={ () => this.getFriend(store.validUser.id, this.porps.user.id)}>
          <Icon
            name='plus'
            size={ 30 }
            color='#57AF21'
          />
        </TouchableOpacity>
        <TouchableOpacity 
          style={ [
            styles.addBtn, 
            this.props.isFriend ? '' : { display: 'none' },
            this.props.user.onlineStatus ? '' : { display: 'none' }
          ] }
          onPress={ () => addFriend(store.validUser.id, this.props.user.id).then((res) => console.log(res)) }>
          <Icon
            name='circle'
            size={ 15 }
            color='#57AF21'
          />
        </TouchableOpacity>
      </View>
    )
  }
}

export default observer(Contact);

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