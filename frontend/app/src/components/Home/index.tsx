import React from "react"
import * as antd from "antd"

import r from "@/directives/index"

import { connect } from 'react-redux'
import store from '@/store'
// styles //////////////////////////////////////////////////////////////////////////////////////////////////////////////
import "./index.styl"

/**********************************************************************************************************************/

interface _props
{
    title:string,
    message:string,
    store_state:any,
}

// export default
class Home extends React.Component<_props>
{
    render()
    {
        let view = null

        if(this.state.if_render)
        {
            view =
                <div id="home" className="view"
                    style={   {...r.show(this.if_display)}   }
                    // title={   this.props.title   }
                >
                    <div className="title">
                        GameName {   this.menu_items_amount   /* !!! for-test: use computed property */}
                    </div>
                    {
                        // render buttons //
                        this.state.menu_config.map(
                            (route, index) =>
                            {
                                return(
                                    <antd.Button className="entry"
                                        key={   index   }
                                        type="primary"
                                        onClick={()=>this.toView(route[1])}
                                    >
                                        {   route[0]   }
                                    </antd.Button>
                                )
                            }
                        )
                    }
                    <div className="version"
                        style={   {...r.css('color: blue; background-color: coral;')}   }
                        onClick={   () => this.triggerHiddenEgg()    }
                    >
                        version 0.3.0 {   this.props.message   }
                    </div>
                </div>
        }

        return view
    }

    // default props ---------------------------------------------------------------------------------------------------
    // 0 //
    static defaultProps =
    {
        title: 'default title',
    }
    // state -----------------------------------------------------------------------------------------------------------
    state =
    {
        if_render: true,
        // if_display: true,
        menu_config:
        [
            ['play campaign', 'campaign'],
            ['play custom levels', 'custom-levels'],
            ['level editor', 'editor'],
            ['game information', 'game-info'],
            ['settings', 'settings'],
            ['my account', 'account'],
        ],
        
    }
    // 1 //
    get menu_items_amount()
    {
        return Object.keys(this.state.menu_config).length    // !!! for-test: test class getter function
    }
    get if_display()
    {
        return this.props.store_state.Views._.using_view === 'home'
    }
    // methods ---------------------------------------------------------------------------------------------------------
    triggerHiddenEgg = () =>
    {
        store.dispatch(
            {
                type: 'loadedAssets',
            }
        )
        
        this.setState((state, props) => {
            let state_to_set =
            {
                menu_config:
                [
                    ['hidden egg', 'hidden-egg'],
                ],
            }
            return state_to_set
        })
    }
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

export default connect(mapStateToProps)(Home)