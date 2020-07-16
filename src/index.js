import 'phaser';
import config from './config/config';
import GameScene from './scenes/GameScene';
import BootScene from './scenes/BootScene';
import PreloaderGameScene from './scenes/PreloaderGameScene';
import PreloaderMenuScene from './scenes/PreloaderMenuScene';
import leaderboardScene from './scenes/leaderboardScene';
import MenuScene from './scenes/MenuScene';
import InstructionsScene from './scenes/InstructionsScene';
import gameUi from './scenes/gameSceneUi';
import scoreHandler from './scenes/scoreHandler';
import Winning from './scenes/winingScene';

// eslint-disable-next-line no-undef
class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader-game-scene', PreloaderGameScene);
    this.scene.add('Preloader-menu-scene', PreloaderMenuScene);
    this.scene.add('leaderboard', leaderboardScene);
    this.scene.add('Menu', MenuScene);
    this.scene.add('Instructions', InstructionsScene);
    this.scene.add('Game', GameScene);
    this.scene.add('game-ui', gameUi);
    this.scene.add('score-handler', scoreHandler);
    this.scene.add('winning', Winning);
    this.scene.start('Preloader-menu-scene');
  }
}

window.game = new Game();
