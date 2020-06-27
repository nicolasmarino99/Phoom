import 'phaser';
import { Align } from '../../../util/align';
import { bossAnims } from '../../anims/enemiesAnims/bossAnims';

export default class Boss extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);

    bossAnims(scene);
    Align.scaleToGameW(this, 0.18);
    this.anims.play('idleboss', true);
  }
}