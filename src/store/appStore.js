import {observable, action} from 'mobx';

class AppSore {
  @observable name = 'Node.js';
  @observable day = '2096';
  @action.bound
  log() {
    console.log('mobx');
  }
}

export default new AppSore();
