export const goblinAnims = (game) => {
    game.anims.create({
        key: 'attackgoblin',
        frames: game.anims.generateFrameNames('goblin', {start: 0, end: 7, zeroPad: 1, prefix: 'Attack2-', suffix: '.png'}),
        frameRate: 9, 
        repeat: -1
      })
}