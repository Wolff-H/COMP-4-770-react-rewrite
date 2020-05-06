import GameBasicSystems from './GameBasicSystems'

/**********************************************************************************************************************/

export default
class GameBasic
{
    level_config:any = null
    interval_event_id:number = -1

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
        console.log('game running: one update')
        this.sLogSomething()
    }

    // systems ---------------------------------------------------------------------------------------------------------
    sLogSomething = GameBasicSystems.sLogSomething
}