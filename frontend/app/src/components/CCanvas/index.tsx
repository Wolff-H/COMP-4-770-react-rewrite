import React from "react"
// import * as antd from "antd"

// import r from "@/directives"

import { connect } from "react-redux"
// import store from "@/store"
// styles //////////////////////////////////////////////////////////////////////////////////////////////////////////////
import "./index.styl"
import r from "@/directives"

/**********************************************************************************************************************/

interface _props
{
    store_state:any,
}

class CCanvas extends React.Component<_props>
{
    render()
    {
        let view = null

        if(true)
        {
            view =
                <canvas id="canvas"
                    width="1366"
                    height="768"
                    style={{...r.show(this.if_display)}}
                >
                    {/* game graphics will be rendered here */}
                </canvas>
        }

        return view
    }

    // data ------------------------------------------------------------------------------------------------------------
    // 0 //
    state =
    {
        
    }
    // 1 //
    get if_display()
    {
        return this.props.store_state.Views._.using_view === 'canvas-game' || this.props.store_state.Views._.using_view === 'canvas-editor'
    }

    // methods ---------------------------------------------------------------------------------------------------------
    // toView = (view_name:string) :void =>
    // {
    //     store.dispatch(
    //         {
    //             type: 'Views/useView',
    //             view_name: view_name,
    //         }
    //     )
    // }

}

const mapStateToProps = (state:any) =>
{
    return{
        store_state: state,
    }
}

/**********************************************************************************************************************/

export default connect(mapStateToProps)(CCanvas)