import "phaser";

export default class Button extends Phaser.GameObjects.Container {
    constructor(scene, x, y, key1, key2, callBackPointerDown) {

    
        super(scene)
        this.scene = scene;
        this.x = x;
        this.y = y;

        this.button = this.scene.add.sprite(0, 0, key1).setInteractive();
        this.add(this.button);

        this.button.on('pointerdown', callBackPointerDown
        .bind(this));
    
        this.button.on('pointerover', function () {
            this.button.setTexture(key2);
        }.bind(this));
    
        this.button.on('pointerout', function () {
            this.button.setTexture(key1);
        }.bind(this));
    
        this.scene.add.existing(this);

    }
}