import GamePlay from './index'
import Vec2 from '../Vec2'
import {
    CTransform,
    CBoundingBox,
    CAnimation,
    CState,
    CInput,
} from '../Components'

/**********************************************************************************************************************/

export default
function loadLevel(this:GamePlay)
{
    console.log('gameplay load level')
    
    // load entities to entity_manager ---------------------------------------------------------------------------------
    for(let entity_config of this.level_config.entities)
    {
        let entity = this.entity_manager.addEntity(entity_config.tags, entity_config.layer)

        // entity is player -> setup player - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
        /**
         * some config is exclusively only for player,
         * so it needs to be setup outside the normal entity building workflow
         */
        if(entity.hasTag('player'))
        {
            // setup player //
            entity.components.Animation =
                new CAnimation(
                    'stand',
                    true,
                )
            entity.components.State = new CState('jumping')
            entity.components.Input = new CInput()

            // bind player entity to quick access of this //
            this.player = entity
        }

        // entity is normal one -> build entity - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
        if(entity_config.components.Transform)
        {
            entity.components.Transform =
                new CTransform(
                    new Vec2(
                        entity_config.components.Transform[0],
                        entity_config.components.Transform[1],
                    )
                )
        }
        if(entity_config.components.BoundingBox)
        {
            if(entity_config.components.BoundingBox.length === 0)
            {
                let texture = this.assets.animation_map[entity_config.components.Animation[0]].image
                entity.components.BoundingBox =
                    new CBoundingBox(
                        new Vec2(
                            texture.width,
                            texture.height
                        )
                    )
            }
            else
            {
                entity.components.BoundingBox =
                    new CBoundingBox(
                        new Vec2(
                            entity_config.components.BoundingBox[0],
                            entity_config.components.BoundingBox[1],
                        )
                    )
            }
        }
        if(entity_config.components.Animation)
        {
            entity.components.Animation =
                new CAnimation(
                    entity_config.components.Animation[0],
                    entity_config.components.Animation[1],
                )
        }
    }

}