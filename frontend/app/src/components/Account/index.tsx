import React from "react"
import * as antd from "antd"
import * as icons from '@ant-design/icons'

// import r from "@/directives/index"

import { connect } from 'react-redux'
import store from '@/store'
// styles //////////////////////////////////////////////////////////////////////////////////////////////////////////////
import "./index.styl"

/**********************************************************************************************************************/

interface _props
{
    store_state:any,
}

class Account extends React.Component<_props>
{
    render()
    {
        let view = null

        if(this.if_render)
        {
            view =
                <div id="account" className="view">
                    <title>
                        Account
                        <antd.Button className="go-back"
                            onClick={()=>this.toView('home')}
                        >
                            <icons.CaretLeftFilled></icons.CaretLeftFilled>
                        </antd.Button>
                    </title>
                    <section>
                        welcome! {   'username'   } <br />
                        <antd.Button
                            type="primary"
                            onClick={()=>this.logout()}
                        >
                            logout
                        </antd.Button>
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
        return this.props.store_state.Views._.using_view === 'account'
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
    logout = () :void =>
    {
        this.toView('login')
    }
}

const mapStateToProps = (state:any) =>
{
    return{
        store_state: state,
    }
}

/**********************************************************************************************************************/

export default connect(mapStateToProps)(Account)