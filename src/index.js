import 'phaser';
import config from './config/config';
import GameScene from './Scenes/GameScene';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import leaderboardScene from './scenes/leaderboardScene';
import MenuScene from './scenes/MenuScene';
import InstructionsScene from './scenes/InstructionsScene';
import gameUi from './Scenes/gameSceneUi';
import scoreHandler from './Scenes/scoreHandler';
import Winning from './Scenes/winingScene';

class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('leaderboard', leaderboardScene);
    this.scene.add('Menu', MenuScene);
    this.scene.add('Instructions', InstructionsScene);
    this.scene.add('Game', GameScene);
    this.scene.add('game-ui', gameUi);
    this.scene.add('score-handler', scoreHandler);
    this.scene.add('winning', Winning);
    this.scene.start('Menu');
  }
}
 
window.game = new Game();
