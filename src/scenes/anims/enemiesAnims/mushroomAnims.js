export const mushroomAnims = (game) => {
    game.anims.create({
        key: 'attack',
        frames: game.anims.generateFrameNames('mushroom', {start: 0, end: 3, zeroPad: 1, prefix: 'Attack2-', suffix: '.png'}),
        frameRate: 7, 
        repeat: -1
      })
}