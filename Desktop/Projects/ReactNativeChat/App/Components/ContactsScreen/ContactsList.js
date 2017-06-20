import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import TopBtns from '../TopBtns/TopBtns';
import SearchField from './SearchField';
import store from '../../mobX/store';
import { observer } from 'mobx-react';
import { getUserFriends } from '../../../server/actions/actions';

import Contact from './Contact';

class ContactsList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      friendships: []
    }
  }

  componentWillMount() {
    this.setState({ friendships: store.validUser.friends })
  }

  render() {

    const friends = this.state.friendships.map((friend, index) =>
    {
      return <Contact
        user={ friend }
        key={ index }
        isFriend={ true }
      />
    }
    )

    return(
      <View style={ styles.container }>
        <View style={ styles.top }>
          <TopBtns 
            navigator={ this.props.navigator } 
            names={ ['group', 'user-plus'] }
            routesId={ ['contactsList', 'newContacts'] }
          />
        </View>
        <SearchField 
          txt={ 'Search Friend' } 
        />
        <ScrollView>
          { friends }
        </ScrollView>
      </View>
    )
  }
}

export default observer(ContactsList);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  },
  top: {
    flexDirection: 'row'
  }
})