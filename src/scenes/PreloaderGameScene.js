import 'phaser';
import { Align } from '../util/align';
import heroimg from '../assets/level1/mainCharacter/herojh.png';
import heroJSON from '../assets/level1/mainCharacter/herojh.json';
import mushroomimg from '../assets/level1/enemies/Mushroom/mushroom.png';
import mushroomJSON from '../assets/level1/enemies/Mushroom/mushroom.json';
import cbimg from '../assets/level1/coins/cb.png';
import cbJSON from '../assets/level1/coins/cb.json';
import cgimg from '../assets/level1/coins/cg.png';
import cgJSON from '../assets/level1/coins/cg.json';
import coimg from '../assets/level1/coins/co.png';
import coJSON from '../assets/level1/coins/co.json';
import goblinimg from '../assets/level1/enemies/Goblin/goblin.png';
import goblinJSON from '../assets/level1/enemies/Goblin/goblin.json';
import skeletonimg from '../assets/level1/enemies/Skeleton/skeleton.png';
import skeletonJSON from '../assets/level1/enemies/Skeleton/skeleton.json';
import bossimg from '../assets/level1/enemies/boss/boss.png';
import bossJSON from '../assets/level1/enemies/boss/boss.json';
import portalJSON from '../assets/portals/portal2/portal2.json';
import portalimg from '../assets/portals/portal2/portal2.png';
import tilesetImg from '../assets/level1/map/tileset.png';
import tilesetCSV from '../assets/level1/map/level1.csv';
import level1JSON from '../assets/level1/map/level1.json';
import skyPng from '../assets/level1/map/sky.png';
import seaPng from '../assets/level1/map/sea.png';
import cloudsPng from '../assets/level1/map/clouds.png';
import farGroundsPng from '../assets/level1/map/far-grounds.png';
import gameMusic from '../assets/music/game/darkambient.OGG';
import coinMusic from '../assets/music/game/pleasing-bell.wav';
import winningMusic from '../assets/music/winning/winning.mp3';
import steps from '../assets/music/game/steps/steps2.ogg';
import pause1 from '../assets/ui/buttons/menu/pause1.png';
import pause2 from '../assets/ui/buttons/menu/pause2.png';
import ManaPanel from '../assets/ui/health/ManaPanel.png';
import orb from '../assets/ui/health/orb.png';
import font2Png from '../assets/fonts/menu2/font2.png';
import font2fnt from '../assets/fonts/menu2/font2.fnt';
import font3Png from '../assets/fonts/menu3/font3.png';
import font3fnt from '../assets/fonts/menu3/font3.fnt';

// eslint-disable-next-line no-undef
export default class PreloaderGameScene extends Phaser.Scene {
  constructor() {
    super('Preloader-game-scene');
  }

  preload() {
    this.load.image('tiles', tilesetImg);
    this.load.tilemapCSV('level1CSV', tilesetCSV);
    this.load.tilemapTiledJSON('level1JSON', level1JSON);
    this.load.atlas('hero', heroimg, heroJSON);
    this.load.atlas('mushroom', mushroomimg, mushroomJSON);
    this.load.atlas('cb', cbimg, cbJSON);
    this.load.atlas('cg', cgimg, cgJSON);
    this.load.atlas('co', coimg, coJSON);
    this.load.atlas('goblin', goblinimg, goblinJSON);
    this.load.atlas('skeleton', skeletonimg, skeletonJSON);
    this.load.atlas('boss', bossimg, bossJSON);
    this.load.image('bg_1', skyPng);
    this.load.image('bg_2', seaPng);
    this.load.image('bg_3', cloudsPng);
    this.load.image('bg_4', farGroundsPng);
    this.load.audio('gameMusic', [gameMusic]);
    this.load.audio('coinMusic', [coinMusic]);
    this.load.audio('winningMusic', [winningMusic]);
    this.load.audio('steps', [steps]);

    this.load.html('nameform', './src/assets/text/nameform.html');

    this.load.image('pause1', pause1);
    this.load.image('pause2', pause2);

    this.load.atlas('portal', portalimg, portalJSON);

    this.load.plugin('rexclockplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexclockplugin.min.js', true);

    this.load.image('ManaPanel', ManaPanel);
    this.load.image('orb', orb);

    this.load.bitmapFont(
      'font2',
      font2Png,
      font2fnt,
    );
    this.load.bitmapFont(
      'font3',
      font3Png,
      font3fnt,
    );

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
    });
  }

  create() {
    this.scene.start('Game');
  }
}