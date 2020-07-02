import 'phaser';
// eslint-disable-next-line no-undef
export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  create() {
    this.input.setDefaultCursor('url(./src/assets/ui/cursor/cursor1.png), pointer');
    this.scene.start('Preloader-game-scene');
  }
}
