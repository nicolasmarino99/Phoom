import'phaser';
import { consumeGameData } from './ApiDataConsumer';
import Button from './ui/Button';
import { AlignGrid } from '../util/alignGrid';
import { Align } from '../util/align';
import 'babel-polyfill';

export default class Winning extends Phaser.Scene {
  constructor(score = 0) {
    super('winning');
    this.score = score;
  }

  init(data) {
    this.score = data.gameState.score;
    this.name = this.registry.list.name;
    // this.clock = data.clock
  }

  create() {
    const compare = (a, b) => {
      const score1 = a.score;
      const score2 = b.score;

      let comparison = 0;
      if (score1 > score2) {
        comparison = -1;
      } else if (score1 < score2) {
        comparison = 1;
      }
      return comparison;
    };

    (async () => {
      if (this.name !== '') {
        await consumeGameData.postGameStats(this.name, this.score);
      }
      let leaderBoard = await consumeGameData.getGamersStats();
      leaderBoard = JSON.parse(JSON.stringify(leaderBoard));
      leaderBoard.sort(compare);
      leaderBoard.forEach((obj, i) => {
        this.add.text(550, 30 * (i) + 250, `${i + 1}   ${obj.user}`, { font: '22px Arial', fill: '#ffffff' });
        this.add.text(800, 30 * (i) + 250, `Score: ${obj.score} `, { font: '22px Arial', fill: '#ffffff' });
      });
    })();

    const leaderboardText = this.add.bitmapText(
      450,
      130,
      'font3',
      'leaderboard',
      79,
    );
    leaderboardText.depth = 10;
    this.tweens.add({
      targets: leaderboardText,

      y: 170,
      duration: 3000,
      ease: 'Power3',
    });

    this.winningMusic = this.sound.add('winningMusic', { volume: 0.04, loop: false });
    this.winningMusic.play();

    const bg = this.add.graphics();
    bg.fillStyle(0x222222, 0.8);
    bg.fillRect(0, 0, 1700, 800);

    const progressBar = this.add.graphics();

    progressBar.fillStyle(0xFFAA00, 0.3);
    progressBar.fillRect(500, 200, 500, 400);

    progressBar.depth = 0;

  }

  update() {

  }
}