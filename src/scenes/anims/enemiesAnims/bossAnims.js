export const bossAnims = (game) => {
  game.anims.create({
    key: 'idleboss',
    frames: game.anims.generateFrameNames('boss', {
      start: 0, end: 5, zeroPad: 1, prefix: 'demon-', suffix: '.png',
    }),
    frameRate: 8,
    repeat: -1,
  });
};