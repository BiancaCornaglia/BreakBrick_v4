export class Brick extends Phaser.GameObjects.Rectangle {
    constructor(scene, x, y, width, height, color, alpha) {
      super(scene, x, y, width, height, color, alpha);
  
      this.scene = scene;
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
  
      this.body.immovable = true;
      this.body.setCollideWorldBounds(true);
  
      this.toches = 0;
      this.maxToches = Phaser.Math.Between(1, 4);
      this.points = Phaser.Math.Between(5, 20);
  
      console.log(this.scene);
    }
  
    hit() {
      this.toches++;
      if (this.toches === 1) {
        this.setFillStyle(0xff0000);
      }
      if (this.toches === 2) {
        this.setFillStyle(0x00ff00);
      }
      if (this.toches === 3) {
        this.setFillStyle(0x0000ff);
      }
  
      if (this.toches === this.maxToches) {
        this.scene.update_points(this.points);
  
        this.destroy();
      }
    }
  }