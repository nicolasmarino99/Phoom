import 'phaser';
import { Align } from '../util/align';
import rainImg from '../assets/ui/rain/rain.png';
import rainJSON from '../assets/ui/rain/rain.json';
import fontImg from '../assets/fonts/menu/font.png';
import fontFnt from '../assets/fonts/menu/font.fnt';
import farImg from '../assets/ui/background/far.png';
import sandImg from '../assets/ui/background/sand.png';
import foregroundmergedImg from '../assets/ui/background/foreground-merged.png';
import menuMusic from '../assets/music/menu/menuMusic.ogg';
import img7 from '../assets/ui/buttons/PNG/shiny/7.png';
import img7shiny from '../assets/ui/buttons/PNG/shiny/7shiny.png';
import soundOnImg from '../assets/ui/buttons/sound/soundOn.png';
import soundOffImg from '../assets/ui/buttons/sound/soundOff.png';
// eslint-disable-next-line no-undef
export default class PreloaderMenuScene extends Phaser.Scene {
  constructor() {
    super('Preloader-menu-scene');
  }

  preload() {
    this.load.atlas('rain', rainImg, rainJSON);
    this.load.bitmapFont(
      'font',
      fontImg,
      fontFnt,
    );
    // Load paralax layers
    this.load.image('far', farImg);
    this.load.image('sand', sandImg);
    this.load.image('foreground-merged', foregroundmergedImg);
    // Load buttons
    this.load.audio('menuMusic', [menuMusic]);
    this.load.image('blueButton1', img7);
    this.load.image('blueButton2', img7shiny);
    this.load.image('soundOn', soundOnImg);
    this.load.image('soundOff', soundOffImg);

    const progressBar = this.add.graphics();
    const progressContainer = this.add.graphics();
    Align.center(progressBar);
    Align.center(progressContainer);
    progressContainer.fillStyle(0x222222, 0.8);
    progressContainer.fillRect(-160, -10, 320, 50);

    const loadingText = this.make.text({
      x: 0,
      y: 0,
      text: 'Loading',
      style: {
        font: '30px monospace',
        fill: '#ffffff',
      },
    });
    Align.center(loadingText.setOrigin(0.5, 1.6));
    const loadingMessage = this.make.text({
      x: 0,
      y: 0,
      text: 'this could take 5 to 10 seconds',
      style: {
        font: '50px monospace',
        fill: '#ffffff',
      },
    });
    Align.center(loadingMessage.setOrigin(0.5, 3));
    const percentText = this.make.text({
      x: 0,
      y: 0,
      text: '0%',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });

    Align.center(percentText.setOrigin(0.4, -0.2));

    const fileText = this.make.text({
      x: 0,
      y: 0,
      text: '',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });

    Align.center(fileText.setOrigin(0.5, -2.5));

    this.load.on('progress', value => {
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(-150, 0, 300 * value, 30);
      percentText.setText(`${Math.floor(value * 100)}%`);
    });

    this.load.on('fileprogress', file => {
      fileText.setText(`Loading asserts:${file.src}`);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressContainer.destroy();
      loadingText.destroy();
      percentText.destroy();
      fileText.destroy();
      loadingMessage.destroy();
    });
  }

  create() {
    this.scene.start('Menu');
  }
}