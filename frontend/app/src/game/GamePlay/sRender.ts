import GamePlay from './index'
import Entitiy from '../Entity'
import Entity from '../Entity'
import Animation from '../Animation'

/**********************************************************************************************************************/

export default
function sRender(this:GamePlay)
{
    console.log('gameplay sRender')
    
    // clear canvas //
    this.canvas2d.clearRect(0, 0, this.canvas.width, this.canvas.height)

    // render entites (with its sprite) //
    for(let i=0; i<10; i++)
        {
            if(this.entity_manager.entities_layer_map[i])
            {
                for(let entity of Object.values(this.entity_manager.entities_layer_map[i]) as Entity[])
                {
                    if(entity.components.Transform && entity.components.Animation)
                    {
                        let position = entity.components.Transform.position
                        let animation = entity.components.Animation.animation// as Animation
                        
                        this.canvas2d.drawImage(
                            animation.image,
                            animation.current_offset_x,
                            0,
                            animation.slide_size.x,
                            animation.slide_size.y,
                            position.x - animation.slide_size.x/2 - this.camera_offset.x,
                            position.y - animation.slide_size.y/2 - this.camera_offset.y,
                            animation.slide_size.x,
                            animation.slide_size.y,
                        )
                    }
                }
            }
        }
}