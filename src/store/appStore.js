import { observable, action } from 'mobx';

class AppSore {
  constructor() {
    this.name = '777'
  }
  @observable name = 'solo';
  @action.bound log() {
    console.log('mobx');
  }
}

export default new AppSore()