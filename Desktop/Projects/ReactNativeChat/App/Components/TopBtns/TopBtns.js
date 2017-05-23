import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class TopBtns extends Component {
  render() {
    return(
      <View style={ styles.container }>
        <TouchableOpacity
          style={[ styles.btn, styles.leftBtn ]}
          onPress={ () => this.props.navigator.replace({ id: this.props.routesId[0] }) }
        >
          <Icon
            name={ this.props.names[0] }
            size={ 30 }
            color='#828281'
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[ styles.btn, styles.rightBtn ]}
          onPress={ () => this.props.navigator.replace({ id: this.props.routesId[1] }) }
        >
          <Icon
            name={ this.props.names[1] }
            size={ 30 }
            color='#828281'
          />
        </TouchableOpacity>
      </View>
    )
  }
}

export default TopBtns;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20
  },
  btn: {
    backgroundColor: '#E5CD25',
    flex: 0.2,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftBtn: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  rightBtn: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  }
})