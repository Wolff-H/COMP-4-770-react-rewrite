/**
 * 笔记：
 *     在诸多尝试之后，还是采用通过store来变更HUD的元素
 *     但是出于性能考虑，将HUD的变更细分到其每一个项目，且
 *         由于sHUD()是每帧调用的，所以在每一帧，任何一个项目都要与其上一帧时的状态作比较，只有确实变化的情况下才向store发起更新
 */
import GameBasic from "../GameBasic"
import store from '@/store'

/**********************************************************************************************************************/

export default
class GamePlay extends GameBasic
{
    if_paused = false


    constructor(level_config:any)
    {
        super(level_config)
        console.log('game_play constructed')
        
    }

    // methods /////////////////////////////////////////////////////////////////////////////////////////////////////////
    // initialize()
    // {

    // }

    clearSideEffects()
    {
        // interval event //
        clearInterval(this.interval_event_id)
        // input listener //
        window.onkeydown = () => {}
        window.onkeyup = () => {}
        // canvas //
        // this.canvas2d.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    setInputListener()
    {
        // window.onkeydown = (event) =>
        // {
        //     switch(event.key)
        //     {
        //         case 'w':
        //             this.player.components.CInput.up = true
        //             break
        //         case 'a':
        //             this.player.components.CInput.left = true
        //             break
        //         case 's':
        //             this.player.components.CInput.down = true
        //             break
        //         case 'd':
        //             this.player.components.CInput.right = true
        //             break

        //         case 'c':
        //             this.player.components.CGrabber.active = true
        //             break

        //         default:
        //             break
        //     }
        // }

        window.onkeyup = (event:any) =>
        {
            switch(event.key)
            {
                // case 'w':
                //     this.player.components.CInput.up = false
                //     break
                // case 'a':
                //     this.player.components.CInput.left = false
                //     break
                // case 's':
                //     this.player.components.CInput.down = false
                //     break
                // case 'd':
                //     this.player.components.CInput.right = false
                //     break

                // case 'c':
                //     this.player.components.CGrabber.active = false
                //     break

                case 'p':
                    this.if_paused = !this.if_paused
                    store.dispatch({type: "Views/GamePauseModal/toggleModal"})
                    console.log('lift key p')
                    
                    break

                default:
                    break
            }
        }
    }


}