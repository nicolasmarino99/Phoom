import 'phaser';
import config from './config/config';
import GameScene from './Scenes/GameScene';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import scoresScene from './scenes/scoresScene';
import MenuScene from './scenes/MenuScene';
import InstructionsScene from './scenes/InstructionsScene';
import gameUi from './Scenes/gameSceneUi';
import scoreHandler from './Scenes/scoreHandler';

class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Scores', scoresScene);
    this.scene.add('Menu', MenuScene);
    this.scene.add('Instructions', InstructionsScene);
    this.scene.add('Game', GameScene);
    this.scene.add('game-ui', gameUi);
    this.scene.add('score-handler', scoreHandler);
    this.scene.start('Menu');
  }
}
 
window.game = new Game();