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
      token: null
    })
  }

  setLoading(state) {
    this.isLoading = state
  }

  setTopBarArrowVisibility() {
    this.isTopBarArrowVisible = !this.isTopBarArrowVisible
  };

  setBottomBarVisibility() {
    this.isBottombarVisible = !this.isBottombarVisible
  };

  setValidUser(id) {
    getValidUser(id).then((user) => {
      this.validUser = user
    })
  };
};

const store = new Store;

export default store;