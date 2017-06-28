import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { getUserThreads } from '../../../server/actions/actions';
import store from '../../mobX/store';
import { observer } from 'mobx-react';

import TopBar from '../TopBar/TopBar';
import Thread from './Thread';

export let nav;

class UserMainScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userThreads: []
    }
  }

  componentWillMount() {
    if(store.validUser) {
      getUserThreads(store.validUser.username)
    .then((threads) => {
      this.setState({ userThreads: threads })
    })
    }
  }

  render() {
    nav = this.props.navigator;

    const threads = this.state.userThreads.map((thread, index) => 
    {
      const threadUsername = thread.chatters.find((element) => {
        return element != store.validUser.username
      })
      
      return <Thread 
        key={ index }
        chatters={ thread.chatters }
        name={ threadUsername }
        message={ thread.messages[thread.messages.length-1].msg }
        nav={ nav }
      />
    })

    return(
      <View style={ styles.container }>
        <ScrollView style={{ flex: 1, paddingTop: 20, paddingBottom: 20 }}>
          { threads }
        </ScrollView>
      </View>
    )
  }
}

export default observer(UserMainScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topContainer: {
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#E5CD25'
  },
  bodyContainer: {
    flex: 6
  }
})