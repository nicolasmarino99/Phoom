import {Align} from '../../util/align';

export const adjustBodies = (scenario) => {

  scenario.hero.body.setSize(scenario.hero.width*0.5,scenario.hero.height*0.8)
  scenario.hero.body.offset.x = 10
  scenario.hero.body.offset.y = 6

  scenario.boss.children.iterate( child => {
    child.body.setSize(child.width,child.height)
  })
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
      
  scenario.mushroom.children.iterate( child => {
    child.body.setSize(25,40)
    child.body.offset.x = 60
    child.body.offset.y = 60
    child.body.onCollide = true
  })
      
  scenario.goblin.children.iterate( child => {
    
    child.body.setSize(25,40)
    child.body.offset.x = 60
    child.body.offset.y = 60
    
  })
     
  scenario.skeleton.children.iterate( child => {
    child.body.setSize(25,40)
    child.body.offset.x = 60
    child.body.offset.y = 60
    
  })
  
}

