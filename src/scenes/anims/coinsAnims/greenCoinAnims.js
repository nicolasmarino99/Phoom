export const greenCoinAnims = (game) => {
    game.anims.create({
        key: 'shine2',
        frames: game.anims.generateFrameNames('cg', {start: 0, end: 7, zeroPad: 1, prefix: 'cg-', suffix: '.png'}),
        frameRate: 9, 
        repeat: -1
    })
}