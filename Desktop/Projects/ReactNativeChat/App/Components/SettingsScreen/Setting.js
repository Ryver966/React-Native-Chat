import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import store from '../../mobX/store';
import { observer } from 'mobx-react';

class Setting extends Component {

  constructor(props) {
    super(props);

    this.changeState = this.changeState.bind(this);

    this.state = {
      isEnabled: this.props.state
    }
  }

  changeState() {
    this.setState({ isEnabled: !this.state.isEnabled })
    AsyncStorage.getItem('settings')
    .then((result) => {
      const res = JSON.parse(result);
      res[this.props.storageContainer] = this.state.isEnabled
      AsyncStorage.setItem('settings', JSON.stringify(res))
      store.settingsState()

    })
    .catch((err) => console.log(err))
  }

  render() {
    return(
      <TouchableOpacity 
        style={ styles.container }
        onPress={ () => this.changeState() }
      >
        <Icon
          name={ this.props.name }
          size={ 30 }
          color='#828181'
          style={{ justifyContent: 'flex-start' }}
        />
        <Text style={ styles.txt }>{ this.props.txt }</Text>
        <Icon
          name={ this.state.isEnabled ? 'toggle-on' : 'toggle-off' }
          size={ 30 }
          color='#828181'
          style={{ justifyContent: 'flex-end' }}
        />
      </TouchableOpacity>
    )
  }
}

export default observer(Setting);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 65,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20
  },
  txt: {
    justifyContent: 'center',
    fontSize: 20
  }
})