import React from "react"
import * as antd from "antd"

import r from "@/directives/index"
// styles //////////////////////////////////////////////////////////////////////////////////////////////////////////////
import "./index.styl"

/**********************************************************************************************************************/
interface _props
{
    title:string,
    message:string,
}

export default
class Home extends React.Component<_props>
{
    render()
    {
        let view = null

        if(this.state.if_render)
        {
            view =
                <div id="home" className="view"
                    style={   {...r.show(this.state.if_display)}   }
                    title={   this.props.title   }
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

    // 0 //
    // default props ///////////////////////////////////////////////////////////////////////////////////////////////////
    static defaultProps =
    {
        title: 'default title',
    }
    // state ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    state =
    {
        if_render: true,
        if_display: true,
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

    // methods /////////////////////////////////////////////////////////////////////////////////////////////////////////
    triggerHiddenEgg = () =>
    {
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
}