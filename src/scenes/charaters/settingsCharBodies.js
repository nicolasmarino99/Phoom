import {Align} from '../../util/align';

export const adjustBodies = (scenario) => {
    scenario.coinsb.children.iterate( child => {
        Align.scaleToGameW(child, 0.02)
        child.body.offset.y = 10
        child.anims.play('shine1',true)
    });
    scenario.coinsg.children.iterate( child => {
      Align.scaleToGameW(child, 0.02)
      child.body.offset.y = 10
      child.anims.play('shine2',true)
  
  });
  scenario.coinso.children.iterate( child => {
    Align.scaleToGameW(child, 0.02)
    child.body.offset.y = 10
    child.anims.play('shine3',true)
  
  });
      
  scenario.mushrooms1.children.iterate( child => {
    child.body.setSize(25,40)
    child.body.offset.x = 60
    child.body.offset.y = 60
  })
      scenario.mushrooms2.children.iterate( child => {
        Align.scaleToGameW(child, 0.2)
        child.body.setSize(25,40)
        child.body.offset.x = 60
        child.body.offset.y = 60
        child.anims.play('attack',true)
        child.flipX=true
      })
  
      scenario.goblin1.children.iterate( child => {
        Align.scaleToGameW(child, 0.2)
        child.body.setSize(25,40)
        child.body.offset.x = 60
        child.body.offset.y = 60
        child.anims.play('attackgoblin',true)
        child.flipX=true
      })
  
      scenario.goblin2.children.iterate( child => {
        Align.scaleToGameW(child, 0.2)
        child.body.setSize(25,40)
        child.body.offset.x = 60
        child.body.offset.y = 60
        child.anims.play('attackgoblin',true)
        child.flipX=true
      })
      scenario.skeleton1.children.iterate( child => {
        Align.scaleToGameW(child, 0.2)
        child.body.setSize(25,40)
        child.body.offset.x = 60
        child.body.offset.y = 60
        child.anims.play('attackske',true)
        child.flipX=true
      })
  
      scenario.skeleton2.children.iterate( child => {
        Align.scaleToGameW(child, 0.2)
        child.body.setSize(25,40)
        child.body.offset.x = 60
        child.body.offset.y = 60
        child.anims.play('attackske',true)
        child.flipX=true
      })
}

