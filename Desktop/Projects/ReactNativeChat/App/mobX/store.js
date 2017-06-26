import { extendObservable } from 'mobx';
import { 
  getValidUser,
  getUserThreads 
} from '../../server/actions/actions';
import { AsyncStorage } from 'react-native'

export class Store {
  constructor() {
    extendObservable(this, {
      validUser: null,
      allUsers: null,
      isLoading: true,
      isTopBarArrowVisible: false,
      isBottombarVisible: true,
      token: null,
      isUserLoggedIn: false,
      soundsSetting: false,
      vibrateSetting: false,
      notificationsSetting: false,
      locationSetting: false,
      userThreads: []
    })
  }

  settingsState() {
    AsyncStorage.getItem('settings')
    .then((result) => {
      if(result === null) {
        AsyncStorage.setItem('settings', JSON.stringify({
          sounds: true,
          vibrate: true,
          notifications: true,
          location: true
        }))
      } else {
        const res = JSON.parse(result);

        this.soundsSetting = res.sounds;
        this.vibrateSetting = res.vibrate;
        this.notificationsSetting = res.notifications;
        this.locationSetting = res.location;
      }
    })
    .catch((err) => console.log(err))
  }

  setIsUserLogged() {
    if(this.token) {
      this.isUserLoggedIn = true
      getUserThreads(this.token).then((threads) => {
        console.log(threads)
      })
    } else {
      this.isLoading = false
    }
  }

  setValidUser(id) {
    getValidUser(id).then((user) => {
      if(user) {
        this.validUser = user
        this.isLoading = false
      } else {
        this.isLoading = false
      }
    })
  };
};

const store = new Store;

export default store;