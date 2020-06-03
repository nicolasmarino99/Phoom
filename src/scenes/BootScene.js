import 'phaser';
import zenva from '../assets/zenva_logo.png';

export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot');
  }

  preload () {
    this.load.image('zenva', zenva);
  }

  create () {
    this.input.setDefaultCursor('url(./src/assets/ui/cursor/cursor1.png), pointer')
    this.scene.start('Preloader');
  }
};
