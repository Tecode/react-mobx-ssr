import {observable, action} from 'mobx';

class AppSore {
  @observable name = 'solo8969';
  @observable day = '2096';
  @action.bound
  log() {
    console.log('mobx');
  }
}

export default new AppSore();
