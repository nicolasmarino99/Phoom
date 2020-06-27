import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
  }

  create() {
    this.input.setDefaultCursor('url(./src/assets/ui/cursor/cursor1.png), pointer');
    this.scene.start('Preloader');
  }
}
