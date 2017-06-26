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
  render() {
    nav = this.props.navigator;
    return(
      <View style={ styles.container }>
        <ScrollView style={{ flex: 1, paddingTop: 20, paddingBottom: 20 }}>
          <Thread
            name='John Doe'
            message='Hello my dear friend! Test soemthign blah blah blah blah blahblbbh'
            nav={ nav }
          />
          <Thread
            name='Alice Doe'
            message='Hello  blah blah blah blah blahblbbh'
            nav={ nav }
          />
          <Thread
            name='Alice Johnson'
            message='Hello  blah blah blah blah blahblbbh'
            nav={ nav }
          />
          <Thread
            name='Peter Parker'
            message='ah blah blah blah blahblbbh'
            nav={ nav }
          />
          <Thread
            name='Johny Stark'
            message='Hello  b asd asd asd zxcasdasdzxc'
            nav={ nav }
          />
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