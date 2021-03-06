import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import store from '../../mobX/store';
import { observer } from 'mobx-react';

import TopBtns from '../TopBtns/TopBtns';
import SearchField from './SearchField';
import Contact from './Contact';

class NewContacts extends Component {

  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      usersList: []
    }
  }

  onInputChange(val) {
    if(val) {
      this.setState({
        usersList: store.allUsers.filter(user =>
        user.username.includes(val)
        )
      })
    } else {
      this.setState({ usersList: [] })
    }
  }

  render() {
    const users = this.state.usersList.map((user, index) =>
    {
      const isUserFriend = store.validUser.friends.find((element) => {
        return element.id === user.id
      });

      if(user.username !== store.validUser.username && !isUserFriend) {
        return <Contact 
          user={ user } 
          key={ index } 
          new={ true }
          isFriend={ false }
        />
      }
    })

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
            txt={ 'Search New Friend' } 
            onInputChange={ this.onInputChange }
          />
          <ScrollView>
            { users }
          </ScrollView>
      </View>
    )
  }
}

export default observer(NewContacts);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  },
  top: {
    flexDirection: 'row'
  }
})