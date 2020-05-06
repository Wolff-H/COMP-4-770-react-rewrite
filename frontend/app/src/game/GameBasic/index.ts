import EntityManager from '../EntityManager'
import sLogSomething from './sLogSomething'
import loadLevel from './loadLevel'

/**********************************************************************************************************************/

export default
class GameBasic
{
    level_config:any            = null
    interval_event_id:number    = -1
    entity_manager              = new EntityManager()
    assets                      = window.game.game_engine.assets

    refresh_interval = 1000

    constructor(level_config:any)
    {
        this.level_config = level_config
        
        this.initialize()
    }

    // methods /////////////////////////////////////////////////////////////////////////////////////////////////////////
    // functions -------------------------------------------------------------------------------------------------------
    initialize()
    {
        console.log('game initialize')
        
        this.loadLevel()
        this.setInputListener()
    }

    setInputListener()
    {

    }

    clearSideEffects()
    {
        // interval event //
        clearInterval(this.interval_event_id)
    }
    
    run()
    {
        console.log('game runs')
        console.log(this.level_config)

        this.interval_event_id = window.setInterval(
            () => 
            {
                this.update()
            },
            this.refresh_interval
        )
    }

    update()
    {
        console.log('game running: update 1 frame')
        console.log(this.entity_manager)
        
        // update entity manager //
        this.entity_manager.update()

        // call systems //
        this.sLogSomething()
    }

    loadLevel = loadLevel

    // systems ---------------------------------------------------------------------------------------------------------
    sLogSomething = sLogSomething
}