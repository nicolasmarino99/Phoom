import 'phaser';
import cursor2Img from '../assets/ui/cursor/cursor2.png';
// eslint-disable-next-line no-undef
export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  create() {
    this.input.setDefaultCursor(`url(${cursor2Img}), pointer`);
    this.scene.start('Preloader-game-scene');
  }
}
