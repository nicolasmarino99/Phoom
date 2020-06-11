export const blueCoinAnims = (game) => {
    game.anims.create({
        key: 'shine1',
        frames: game.anims.generateFrameNames('cb', {start: 0, end: 7, zeroPad: 1, prefix: 'cb-', suffix: '.png'}),
        frameRate: 9, 
        repeat: -1
    })
}