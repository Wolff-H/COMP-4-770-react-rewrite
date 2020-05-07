import EntityManager from '../EntityManager'
import Vec2 from '../Vec2'
// import Entity from '../Entity'
import loadLevel from './loadLevel'
import sRender from './sRender'
import GamePlay from '../GamePlay'

/**********************************************************************************************************************/

declare const loadLevel_: (this: GameBasic) => void
declare let loadLevel_here: () => void
// loadLevel_here = loadLevel_ // no error in TS 2.8-dev

export default
class GameBasic
{
    level_config:any            = null
    interval_event_id:number    = -1
    entity_manager              = new EntityManager()
    assets                      = window.game.game_engine.assets
    refresh_interval = 1000

    canvas:HTMLCanvasElement    = document.querySelector("#canvas") as HTMLCanvasElement
    canvas2d                    = this.canvas.getContext('2d') as CanvasRenderingContext2D
    player:any                  = null

    camera_offset:Vec2          = new Vec2(0, 0)

    constructor(level_config:any)
    {
        this.level_config = level_config

        // this.initialize()
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
        // console.log(this.entity_manager)
        
        // update entity manager //
        this.entity_manager.update()

        // call systems //
        // this.sLogSomething()
        // this.sRender()
    }

    // loadLevel//:Function = loadLevel
    loadLevel = loadLevel
    // systems ---------------------------------------------------------------------------------------------------------

    sRender = sRender
}