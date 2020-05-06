import React from "react"
import * as antd from "antd"

// import r from "@/directives"

import { connect } from "react-redux"
// import store from "@/store"
import Bar from './Bar'
// styles //////////////////////////////////////////////////////////////////////////////////////////////////////////////
import "./index.styl"

/**********************************************************************************************************************/

interface _props
{
    store_state:any,
}

class HUD extends React.Component<_props>
{
    render()
    {
        let view = null

        if(this.if_render)
        {
            view =
                <div id="hud">
                    <div className="top-region">
                        <div className="level-info">
                            <span>level</span>{   'level_name'   }
                            <div className="statistics">
                                <div className="time">
                                    <span>time</span>{   '00:00'   }
                                </div>
                                <div className="score">
                                    <span>score</span>{   '0'   }
                                </div>
                                <div className="kill">
                                    <span>kill</span>{   '0'   }
                                </div>
                            </div>
                        </div>
                        <div className="boss status">
                            {/* <bar :prop="{class: 'boss-health', desc:'boss-health', percent: 50}"></bar> */}
                        </div>
                    </div>
                    <div className="side-region">
                        {/* <el-progress type="circle" :percentage="100" :show-text="false" :width="36" :stroke-width="3" status="success"></el-progress>
                        <el-progress type="circle" :percentage="25"  :show-text="false" :width="36" :stroke-width="3"></el-progress>
                        <el-progress type="circle" :percentage="70"  :show-text="false" :width="36" :stroke-width="3" status="warning"></el-progress>
                        <el-progress type="circle" :percentage="50"  :show-text="false" :width="36" :stroke-width="3" status="exception"></el-progress> */}
                        {
                            //  type="circle" percent={100} showInfo={false} width={36} strokeWidth={8}
                        }
                        <antd.Progress {...this.p_progress} strokeColor="#f5222d"></antd.Progress>    {/* damage_scroll   */}
                        <antd.Progress {...this.p_progress} strokeColor="#fa8c16"></antd.Progress>    {/* defense_scroll  */}
                        <antd.Progress {...this.p_progress} strokeColor="#52c41a"></antd.Progress>    {/* health_scroll   */}
                        <antd.Progress {...this.p_progress} strokeColor="#1890ff"></antd.Progress>    {/* energy_scroll   */}
                        <antd.Progress {...this.p_progress} strokeColor="#722ed1"></antd.Progress>    {/* speed_scroll    */}
                        <antd.Progress {...this.p_progress} strokeColor="#666666"></antd.Progress>    {/* gravity_scroll  */}
                    </div>
                    <div className="bottom-region">
                        <Bar
                            class_name="player-health"
                            title="health"
                        ></Bar>
                        <Bar
                            class_name="player-energy"
                            title="energy"
                        ></Bar>
                        <div className="weapon">
                            <div className="img">weapon</div>
                        </div>
                        <div className="inventory">
                            <div className="slot">999</div>
                            <div className="slot">999</div>
                            <div className="slot">999</div>
                            <div className="slot">999</div>
                            <div className="slot">999</div>
                            <div className="slot">999</div>
                            <div className="slot">999</div>
                            <div className="slot">999</div>
                        </div>
                    </div>
                </div>
        }

        return view
    }

    // constructor(props:any)
    // {
    //     super(props)
    //     {

    //     }
    // }

    // data ------------------------------------------------------------------------------------------------------------
    // 0 //
    state =
    {
        
    }

    p_progress =
    {
        type: 'circle' as const,
        percent: 75,
        showInfo: false,
        width: 36,
        strokeWidth: 8,
    }
    // 1 //
    get if_render()
    {
        return this.props.store_state.Views._.using_view === 'canvas-game'
    }

    // methods ---------------------------------------------------------------------------------------------------------

    // lifecycles ------------------------------------------------------------------------------------------------------
    // componentDidMount()
    // {
    //     window.react_app.hud = this
    // }
}

const mapStateToProps = (state:any) =>
{
    return{
        store_state: state,
    }
}

/**********************************************************************************************************************/

export default connect(mapStateToProps)(HUD)