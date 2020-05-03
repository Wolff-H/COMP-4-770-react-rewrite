import React from "react"
import * as antd from "antd"

import r from "@/directives"

import { connect } from 'react-redux'
import store from '@/store'
// styles //////////////////////////////////////////////////////////////////////////////////////////////////////////////
import "./index.styl"

/**********************************************************************************************************************/

interface _props
{
    store_state:any,
}

class LoadingAssets extends React.Component<_props>
{
    render()
    {
        let view = null

        if(this.if_loading_assets)
        {
            view =
                <div id="loading-assets" className="view">
                    <div className="current-loading">
                        <div>loading:</div>
                        {
                            // render loaded assets list //
                            this.assets_loaded.map(
                                (item:string, index:number) =>
                                {
                                    return(
                                        <div
                                            key={index}
                                        >
                                            {item}
                                        </div>
                                    )
                                }
                            )
                        }
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
    get if_loading_assets()
    {
        return this.props.store_state._.if_loading_assets
    }
    get assets_loaded()
    {
        return this.props.store_state._.assets_loaded
    }

    // methods ---------------------------------------------------------------------------------------------------------

}

const mapStateToProps = (state:any) =>
{
    return{
        store_state: state,
    }
}

/**********************************************************************************************************************/

export default connect(mapStateToProps)(LoadingAssets)