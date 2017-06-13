import { extendObservable } from 'mobx';
import { getValidUser } from '../../server/actions/actions';

export class Store {
  constructor() {
    extendObservable(this, {
      validUser: null,
      allUsers: null,
      isLoading: true,
      isTopBarArrowVisible: false,
      isBottombarVisible: true,
      token: null,
      isUserLoggedIn: false
    })
  }

  setIsUserLogged() {
    if(this.token) {
      this.isUserLoggedIn = true
      this.isLoading = false
    } else {
      this.isLoading = false
    }
  }

  setValidUser(id) {
    getValidUser(id).then((user) => {
      if(user) {
        this.validUser = user
      }
    })
  };
};

const store = new Store;

export default store;