// eslint-disable-next-line import/prefer-default-export
export const heroAnims = (game) => {
  game.anims.create({
    key: 'idle',
    frames: game.anims.generateFrameNames('hero', {
      start: 0, end: 3, zeroPad: 2, prefix: 'adventurer-idle-2-', suffix: '.png',
    }),
    frameRate: 8,
    repeat: -1,
  });

  game.anims.create({
    key: 'runSlow',
    frames: game.anims.generateFrameNames('hero', {
      start: 0, end: 5, zeroPad: 2, prefix: 'adventurer-run-', suffix: '.png',
    }),
    frameRate: 13,
    repeat: -1,
  });
  game.anims.create({
    key: 'run',
    frames: game.anims.generateFrameNames('hero', {
      start: 0, end: 5, zeroPad: 2, prefix: 'adventurer-run3-', suffix: '.png',
    }),
    frameRate: 13,
    repeat: -1,
  });
  game.anims.create({
    key: 'jump1',
    frames: game.anims.generateFrameNames('hero', {
      start: 0, end: 3, zeroPad: 2, prefix: 'adventurer-jump-', suffix: '.png',
    }),
    frameRate: 13,
    repeat: -1,
  });
  game.anims.create({
    key: 'jump2',
    frames: game.anims.generateFrameNames('hero', {
      start: 0, end: 2, zeroPad: 2, prefix: 'adventurer-crnr-jmp-', suffix: '.png',
    }),
    frameRate: 13,
    repeat: -1,
  });
  game.anims.create({
    key: 'jump3',
    frames: game.anims.generateFrameNames('hero', {
      start: 0, end: 3, zeroPad: 1, prefix: 'adventurer-smrslt-', suffix: '.png',
    }),
    frameRate: 13,
    repeat: -1,
  });
  game.anims.create({
    key: 'attack1',
    frames: game.anims.generateFrameNames('hero', {
      start: 0, end: 4, zeroPad: 2, prefix: 'adventurer-attack1-', suffix: '.png',
    }),
    frameRate: 18,
    repeat: 1,
  });
  game.anims.create({
    key: 'attack2',
    frames: game.anims.generateFrameNames('hero', {
      start: 0, end: 5, zeroPad: 2, prefix: 'adventurer-attack2-', suffix: '.png',
    }),
    frameRate: 18,
  });
  game.anims.create({
    key: 'attack3',
    frames: game.anims.generateFrameNames('hero', {
      start: 0, end: 5, zeroPad: 2, prefix: 'adventurer-attack3-', suffix: '.png',
    }),
    frameRate: 18,
  });

  game.anims.create({
    key: 'slide',
    frames: game.anims.generateFrameNames('hero', {
      start: 0, end: 1, zeroPad: 2, prefix: 'adventurer-slide-', suffix: '.png',
    }),
    frameRate: 8,
  });
  game.anims.create({
    key: 'stand',
    frames: game.anims.generateFrameNames('hero', {
      start: 0, end: 2, zeroPad: 2, prefix: 'adventurer-stand-', suffix: '.png',
    }),
    frameRate: 8,
  });
  game.anims.create({
    key: 'down',
    frames: game.anims.generateFrameNames('hero', {
      start: 0, end: 3, zeroPad: 2, prefix: 'adventurer-crouch-', suffix: '.png',
    }),
    frameRate: 8,
  });
};