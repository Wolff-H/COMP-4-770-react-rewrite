import React from "react"
import * as antd from "antd"
import * as icons from '@ant-design/icons'

// import r from "@/directives/index"

import { connect } from 'react-redux'
import store from '@/store'
import campaign_levels from '@/game/campaign-levels'
// styles //////////////////////////////////////////////////////////////////////////////////////////////////////////////
import "./index.styl"

/**********************************************************************************************************************/

interface _props
{
    store_state:any,
}

class Campaign extends React.Component<_props>
{
    render()
    {
        let view = null

        if(this.if_render)
        {
            view =
                <div id="campaign" className="view">
                    <title>
                        Campaign
                        <antd.Button className="go-back"
                            onClick={()=>this.toView('home')}
                        >
                            <icons.CaretLeftFilled></icons.CaretLeftFilled>
                        </antd.Button>
                    </title>
                    <section>
                        {
                            campaign_levels.map(
                                (item, index) =>
                                {
                                    return(
                                        <antd.Button
                                            key={index}
                                        >
                                            
                                        </antd.Button>
                                    )
                                }
                            )
                        }
                    </section>
                </div>
        }

        return view
    }

    // state -----------------------------------------------------------------------------------------------------------
    // 0 //
    state =
    {
         
    }
    // 1 //
    get if_render()
    {
        return this.props.store_state.Views._.using_view === 'campaign'
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
}

const mapStateToProps = (state:any) =>
{
    return{
        store_state: state,
    }
}

/**********************************************************************************************************************/

export default connect(mapStateToProps)(Campaign)