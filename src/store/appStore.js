import { observable } from 'mobx';

class AppSore {
  @observable name = 'Node.js';
  @observable day = '2096';
}

export default new AppSore();
