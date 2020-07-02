import Phaser from 'phaser';
import { AlignGrid } from '../util/alignGrid';
import { Align } from '../util/align';
import cursor1Img from '../assets/ui/cursor/cursor1.png';
import Button from './ui/Button';

// eslint-disable-next-line no-undef
export default class MenuScene extends Phaser.Scene {
  constructor() {
    super('Menu');
  }

  create() {
    const agrid = new AlignGrid({ scene: this, rows: 10, cols: 25 });
    this.input.setDefaultCursor(`url(${cursor1Img}), pointer`);
    this.bgMusic = this.sound.add('menuMusic', { volume: 0.2, loop: true });
    this.bgMusic.play();
    this.gameText = this.add.text(0, 0, 'Play', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', fontSize: '40px', fill: '#fff' });
    agrid.placeAtIndex(136, this.gameText.setOrigin(-0.3, 0.5));
    this.gameText.depth = 101;
    this.leaderBoardText = this.add.text(0, 0, 'Leaderboard', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', fontSize: '40px', fill: '#fff' });
    agrid.placeAtIndex(184, this.leaderBoardText.setOrigin(-0.3, 0.5));
    this.leaderBoardText.depth = 101;
    // eslint-disable-next-line max-len
    // this.gameTextB = this.add.text(0, 0, 'Play', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', fontSize: '40px', fill: '#fff' });
    // agrid.placeAtIndex(161,this.gameTextB.setOrigin(-0.3,0.5))
    // this.gameTextB.depth=101
    this.gameButton = new Button(this, 0, 0, 'blueButton1', 'blueButton2', () => {
      this.scene.start('Boot');
      this.bgMusic.stop();
    }).setScale(0.7, 0.5);
    agrid.placeAtIndex(137, this.gameButton);
    this.gameButton.depth = 100;
    this.leaderBoardBtn = new Button(this, 0, 0, 'blueButton1', 'blueButton2', () => {
      this.scene.start('Boot');
      this.bgMusic.stop();
    }).setScale(0.7, 0.5);
    agrid.placeAtIndex(187, this.leaderBoardBtn);
    this.leaderBoardBtn.depth = 100;
    // this.as = new Button(this, 50, 50, 'blueButton1', 'blueButton2', () => {
    //  this.scene.start('Boot');
    //  this.bgMusic.stop();
    // }).setScale(.5,.4);
    // agrid.placeAtIndex(162,this.as )
    // this.as.depth=100
    this.soundOn = new Button(this, 50, 50, 'soundOn', 'soundOff', () => {
      // eslint-disable-next-line no-unused-expressions
      this.bgMusic.stop() ? this.bgMusic.stop() : this.bgMusic.play();
    });
    this.soundOn.depth = 200;
    this.far = this.add.tileSprite(
      0,
      0,
      this.game.config.width,
      this.game.config.height,
      'far',
    );
    this.far.setOrigin(0, 0);
    this.far.setScrollFactor(0);
    this.sand = this.add.tileSprite(
      0,
      0,
      this.game.config.width,
      this.game.config.height,
      'sand',
    );
    this.sand.setOrigin(0, 0);
    this.sand.setScrollFactor(0);
    this.foregroundMerged = this.add.tileSprite(
      0,
      0,
      this.game.config.width,
      this.game.config.height,
      'foreground-merged',
    );
    this.foregroundMerged.setOrigin(0, 0);
    this.foregroundMerged.setScrollFactor(0);
    this.rainFrame = this.add.sprite(0, 0, 'rain', 0);
    const logo = this.add.bitmapText(
      0,
      0,
      'font',
      'PHOOM',
      186,
    );
    agrid.placeAtIndex(32, logo);
    const credits = this.add.bitmapText(
      0,
      0,
      'font',
      'Created by Nicolas Marino 😃',
      46,
    );
    agrid.placeAtIndex(207, credits);
    // Animation to the rain
    this.anims.create({
      key: 'rainy',
      frames: this.anims.generateFrameNames('rain', {
        start: 1, end: 4, zeroPad: 2, prefix: 'rain_drops-', suffix: '.png',
      }),
      frameRate: 16,
      repeat: -1,
    });
    // agrid.showNumbers()
  }

  update() {
    const rainAnim = this.rainFrame.anims.play('rainy', true);
    Align.center(rainAnim);
    Align.scaleToGameW(rainAnim, 1);
    this.far.tilePositionX += 0.1;
    Align.scaleToGameW(this.far, 2);
    this.sand.tilePositionX += 0.3;
    Align.scaleToGameW(this.sand, 3.2);
    this.foregroundMerged.tilePositionX += 0.75;
    Align.scaleToGameW(this.foregroundMerged, 3.7);
  }
}