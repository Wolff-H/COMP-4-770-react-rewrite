/**
 * 笔记：
 *     在诸多尝试之后，还是采用通过store来变更HUD的元素
 *     但是出于性能考虑，将HUD的变更细分到其每一个项目，且
 *         由于sHUD()是每帧调用的，所以在每一帧，任何一个项目都要与其上一帧时的状态作比较，只有确实变化的情况下才向store发起更新
 */
import GameBasic from "../GameBasic"
import Vec2 from '../Vec2'
import store from '@/store'
import loadLevel from './loadLevel'
import sRender from './sRender'

/**********************************************************************************************************************/

export default
class GamePlay extends GameBasic
{
    if_paused = false
    this_instance = this

    constructor(level_config:any)
    {
        super(level_config)
        console.log('game_play constructed')

    }


    

    // methods /////////////////////////////////////////////////////////////////////////////////////////////////////////
    // functions -------------------------------------------------------------------------------------------------------
    /**
     * initialize() cannot be put in the constructor,
     * as the play_ properties are setup after the whole instance is constructed,
     * or you cannot access some properties at constructing time,
     * since they are not existing yet!
     */
    initialize()
    {
        console.log('game initialize')
        
        this.play_loadLevel()
        this.setInputListener()
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
        
        // update entity manager //
        this.entity_manager.update()

        // call systems //
        this.play_sRender()
    }

    clearSideEffects()
    {
        // interval event //
        clearInterval(this.interval_event_id)
        // input listener //
        window.onkeydown = () => {}
        window.onkeyup = () => {}
        // canvas //
        this.canvas2d.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    setInputListener()
    {
        window.onkeyup = (event:any) =>
        {
            switch(event.key)
            {
                case 'p':
                    this.if_paused = !this.if_paused
                    store.dispatch({type: "Views/GamePauseModal/toggleModal"})
                    break
                default:
                    break
            }
        }
    }

    play_loadLevel = loadLevel
    // // systems ---------------------------------------------------------------------------------------------------------

    play_sRender = sRender










    

    


}