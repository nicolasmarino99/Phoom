import 'phaser';

 
export default {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: 1500,
    height: 700,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
};