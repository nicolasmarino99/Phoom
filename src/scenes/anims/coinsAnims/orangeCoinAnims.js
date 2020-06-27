export const orangeCoinAnims = (game) => {
  game.anims.create({
    key: 'shine3',
    frames: game.anims.generateFrameNames('co', {
      start: 0, end: 7, zeroPad: 1, prefix: 'co-', suffix: '.png',
    }),
    frameRate: 9,
    repeat: -1,
  });
};