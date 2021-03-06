import 'phaser';
import Button from './ui/Button';
import { AlignGrid } from '../util/alignGrid';
// eslint-disable-next-line no-undef
export default class gameUi extends Phaser.Scene {
  constructor() {
    super('game-ui');
  }

  init(data) {
    this.gameMusic = data.gameMusic;
    this.clock = data.clock;
  }

  preload() {
    this.load.html('nameform', 'src/assets/text/nameform.html');
  }

  create() {
    const agrid = new AlignGrid({ scene: this, rows: 10, cols: 25 });
    // agrid.showNumbers()
    // this.gameMusic = this.sound.add('gameMusic', { volume: 0.2, loop: true });

    this.gameMusic.play();

    this.soundOn = new Button(this, 50, 50, 'soundOn', 'soundOff', () => {
      // eslint-disable-next-line no-unused-expressions
      this.gameMusic.stop() ? this.gameMusic.stop() : this.gameMusic.play();
    });

    this.menu = new Button(this, 130, 50, 'pause1', 'pause2', () => {
      this.scene.start('Menu');
      this.scene.stop('Game');
      this.gameMusic.stop();
    }).setScale(0.5);

    this.clockStampTitle = this.add.bitmapText(
      550,
      30,
      'font2',
      'Time',
      46,
    );
    this.clockStamp = this.add.bitmapText(
      700,
      30,
      'font2',
      '',
      46,
    );

    this.clock = this.plugins.get('rexClock').add(this);
    this.clock.start();
    this.text = this.add.text(500, 500, '');

    this.health = this.add.sprite(0, 0, 'ManaPanel');
    this.health.flipY = true;

    this.orb = this.add.sprite(0, 0, 'orb');

    agrid.placeAtIndex(16, this.health);
    agrid.placeAtIndex(48, this.orb);
    this.orb.setOrigin(0.619, 0.45);
    this.health.setOrigin(0.04, 0.27);

    const text = this.add.bitmapText(
      1150,
      230,
      'font3',
      'Type your adventurers name ',
      20,
    );

    const element = this.add.dom(1350, 300).createFromCache('nameform');

    element.addListener('click');

    element.on('click', (event) => {
      if (event.target.name === 'playButton') {
        const inputText = element.getChildByName('nameField');

        //  Have they entered anything?
        if (inputText.value !== '') {
          this.registry.set('name', inputText.value);

          //  Turn off the click events
          element.removeListener('click');

          //  Hide the login element
          element.setVisible(false);

          //  Populate the text with whatever they typed in
          text.setText(`                                        Player:    ${inputText.value}`);
        } else {
          //  Flash the prompt
          this.scene.tweens.add({
            targets: text,
            alpha: 0.2,
            duration: 250,
            ease: 'Power3',
            yoyo: true,
          });
        }
      }
    });

    this.tweens.add({
      targets: element,
      y: 270,
      duration: 3000,
      ease: 'Power3',
    });
  }

  update() {
    this.timeNow = this.clock.now * 0.001;
    // eslint-disable-next-line no-undef
    this.clockStamp.setText(Phaser.Math.FloorTo(this.timeNow));
  }
}
