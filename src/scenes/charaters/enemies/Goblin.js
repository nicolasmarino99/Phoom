import 'phaser';
import { Align } from '../../../util/align';
import { goblinAnims } from '../../anims/enemiesAnims/goblinAnims';

const directions = {
  LEFT: 0,
  RIGHT: 1,
};
// eslint-disable-next-line no-undef
export default class Goblin extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);

    this.direction = directions.RIGHT;
    goblinAnims(scene);
    Align.scaleToGameW(this, 0.2);

    this.flipX = true;

    this.moveRandom = scene.time.addEvent({
      delay: 2000,
      callback: () => {
        // eslint-disable-next-line no-undef
        const value = Phaser.Math.Between(0, 1);
        this.direction = value;
        this.anims.play('attackgoblin', true);
      },
      loop: true,
    });// eslint-disable-next-line no-undef
    const handleCollision = (go = Phaser.GameObjects.GameObject) => {
      if (go !== this) {
        return;
      }
      // eslint-disable-next-line no-unused-expressions
      this.direction === 1 ? this.direction = 0 : this.direction = 1;
    };
    // eslint-disable-next-line no-undef
    scene.physics.world.on(
      // eslint-disable-next-line no-undef
      Phaser.Physics.Arcade.Events.TILE_COLLIDE,
      handleCollision,
      // eslint-disable-next-line no-undef
      Phaser.Tilemaps.Tile,
      this,
    );
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);

    const speed = 10;

    // eslint-disable-next-line default-case
    switch (this.direction) {
      case directions.RIGHT:
        this.setVelocityX(speed);

        this.flipX = false;
        break;
      case directions.LEFT:
        this.setVelocityX(-speed);

        this.flipX = true;
        break;
    }
  }
}