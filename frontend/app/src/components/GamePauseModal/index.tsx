import React from "react"
import * as antd from "antd"
import * as icons from "@ant-design/icons"

// import r from "@/directives"

import { connect } from "react-redux"
import store from "@/store"
// styles //////////////////////////////////////////////////////////////////////////////////////////////////////////////
import "./index.styl"
import r from "@/directives"

/**********************************************************************************************************************/

interface _props
{
    store_state:any,
}

class GamePauseModal extends React.Component<_props>
{
    render()
    {
        let view = null

        if(this.if_render)
        {
            view =
                <div id="game-pause-modal" className="view"
                    style={{...r.show(this.if_display)}}
                >
                    <div className="title">
                        Game Paused
                    </div>
                    <div className="content">
                        <antd.Button className="button home info"
                            title="home"
                            onClick={()=>this.toHome()}
                        >
                            <icons.HomeFilled></icons.HomeFilled>
                        </antd.Button>
                        <antd.Button className="button level-select info"
                            title="level select"
                            onClick={()=>this.toLevelSelect()}
                        >
                            <icons.UnorderedListOutlined></icons.UnorderedListOutlined>
                        </antd.Button>
                        <div className="switch">
                            <span>music</span>
                            <antd.Switch
                                // :value="if_using_bgm"
                                // @change="toggleBGM()"
                            ></antd.Switch>
                        </div>
                        <div className="switch">
                            <span>sound</span>
                            <antd.Switch
                                // v-model="if_sound_on"
                                // @change="toggleGamePlaySFX()"
                            ></antd.Switch>
                        </div>
                        <antd.Button className="button restart warning"
                            title="this will restart the whole game"
                            onClick={()=>this.restart()}
                        >
                            restart
                        </antd.Button>
                        <antd.Button className="button resume"
                            type="primary"
                            title="you can also press p to resume"
                            onClick={()=>this.resume()}
                        >
                            resume
                        </antd.Button>
                    </div>
                </div>
        }

        return view
    }

    // data ------------------------------------------------------------------------------------------------------------
    // 0 //
    state =
    {
        
    }
    // 1 //
    get if_render()
    {
        return this.props.store_state.Views._.using_view === 'canvas-game' || this.props.store_state.Views._.using_view === 'canvas-editor'
    }

    get if_display()
    {
        return this.props.store_state.Views.GamePauseModal.if_display
    }


    // methods ---------------------------------------------------------------------------------------------------------
    toView = (view_name:string) :void =>
    {
        store.dispatch(
            {
                type: 'Views/useView',
                view_name: view_name,
            }
        )
    }

    toHome = () =>
    {
        window.game.game_engine.destroyGamePlay()
        store.dispatch({type: "Views/GamePauseModal/toggleModal"})
        this.toView('home')
    }

    toLevelSelect = () =>
    {
        window.game.game_engine.destroyGamePlay()
        store.dispatch({type: "Views/GamePauseModal/toggleModal"})
        this.toView('play')
    }

    restart = () =>
    {
        window.game.game_engine.destroyGamePlay()
        store.dispatch({type: "Views/GamePauseModal/toggleModal"})
        this.toView('shop')
    }

    resume = () =>
    {
        window.game.game_engine.game_play.if_paused = false
        store.dispatch({type: "Views/GamePauseModal/toggleModal"})
    }

}

const mapStateToProps = (state:any) =>
{
    return{
        store_state: state,
    }
}

/**********************************************************************************************************************/

export default connect(mapStateToProps)(GamePauseModal)