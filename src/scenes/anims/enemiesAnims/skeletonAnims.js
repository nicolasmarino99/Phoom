// eslint-disable-next-line import/prefer-default-export
export const skeletonAnims = (game) => {
  game.anims.create({
    key: 'attackske',
    frames: game.anims.generateFrameNames('skeleton', {
      start: 0, end: 7, zeroPad: 1, prefix: 'Attack2-', suffix: '.png',
    }),
    frameRate: 9,
    repeat: 2,
  });
};