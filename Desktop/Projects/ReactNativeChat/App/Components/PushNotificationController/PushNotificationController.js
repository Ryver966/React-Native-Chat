import React, { Component } from 'react';
import PushNotification from 'react-native-push-notification';

class PushNotificationController extends Component {
  componentWillMount() {
    PushNotification.configure({
      popInitialNotification: true,
      onNotification: (notification) => {
        console.log('Notification', notification)
      }
    })
  }
  render() {
    return null;
  }
}

export default PushNotificationController;