import 'phaser';
import ClockPlugin from 'phaser3-rex-plugins/plugins/clock-plugin.js';

 
export default {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: 1500,
    height: 700,
    plugins: {
        global: [{
            key: 'rexClock',
            plugin: ClockPlugin,
            start: true
        }]
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        },
        
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    dom: {
        createContainer: true
    }
   
    
};