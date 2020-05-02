import React from "react"
import * as antd from "antd"

import r from "@/directives/index"

import { connect } from 'react-redux'
import store from '@/store'

import * as icons from '@ant-design/icons'
// styles //////////////////////////////////////////////////////////////////////////////////////////////////////////////
import "./index.styl"

/**********************************************************************************************************************/

interface _props
{
    store_state:any,
}

// export default
class Login extends React.Component<_props>
{
    render()
    {
        let view = null

        if(this.if_render)
        {
            view =
                <div id="login" className="view">
                    <div className="login panel">
                        <antd.Button className="button home"
                            style={{...r.show(this.state.using_mode !== 'login')}}
                            onClick={()=>this.toHome()}
                        >
                            <icons.HomeFilled></icons.HomeFilled>
                        </antd.Button>
                        <div className="title">
                            Bounty
                        </div>
                        <antd.Input className="input"
                            placeholder="username"
                            value={this.state.username}
                            onChange={(e)=>this.setState({username: e.target.value})}
                        ></antd.Input>
                        <antd.Input className="input"
                            placeholder="password"
                            {...r.model(this, 'password')}
                        ></antd.Input>
                        <div className="account-operations">
                            <section className="register"
                                style={{...r.show(this.state.using_mode === 'register')}}
                            >
                                <antd.Input className="input"
                                    placeholder="set your security question"
                                    {...r.model(this, 'user_setting_security_question')}
                                ></antd.Input>
                                <antd.Input className="input"
                                    placeholder="set your answer for security question"
                                    {...r.model(this, 'user_setting_security_answer')}
                                ></antd.Input>
                                <antd.Button className="button"
                                    type="primary"
                                    // @click="register()"
                                >
                                    register
                                </antd.Button>
                            </section>
                            <section className="reset-password"
                                style={{...r.show(this.state.using_mode === 'reset_password')}}
                            >
                                <antd.Button className="button info"
                                    // @click="getMySecurityQuestion()"
                                >
                                    get my security question
                                </antd.Button>
                                <div className="sq-title">
                                    My security question:
                                </div>
                                <div className="sq-content">
                                    {   this.security_question   }
                                </div>
                                <antd.Input className="input"
                                    placeholder="your answer for the security question"
                                    {...r.model(this, 'security_answer')}
                                ></antd.Input>
                                <antd.Button className="button"
                                    type="primary"
                                    // @click="resetPassword()"
                                >
                                    reset password
                                </antd.Button>
                            </section>
                        </div>
                        <div className="action">
                            <antd.Button className="button"
                                type="primary"
                                style={{...r.show(this.state.using_mode === 'login')}}
                                onClick={() => this.login()}
                            >
                                login
                            </antd.Button>
                            <div className="wrapper"
                                style={{...r.show(this.state.using_mode === 'login')}}
                            >
                                <span className="register"
                                    onClick={() => this.toRegister()}
                                >
                                    register for account
                                </span>
                                <span className="reset-password"
                                    onClick={() => this.toResetPassword()}
                                >
                                    forgot password
                                </span>
                            </div>
                        </div>
                        <div className="server-message">
                            {   this.server_message   }
                        </div>
                    </div>
                </div>
        }

        return view
    }

    // data ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 0 //
    state =
    {
        using_mode: 'login',
        username: '',
        password: '',
        user_setting_security_question: '',
        user_setting_security_answer: '',
        security_answer: '',
        
    }
    // 1 //
    get if_render() :boolean
    {
        return this.props.store_state.Views._.using_view === 'login'
    }
    get server_message() :string
    {
        return this.props.store_state.Views.Login.server_message
    }
    get security_question() :string
    {
        return this.props.store_state.Views.Login.security_question
    }

    // methods /////////////////////////////////////////////////////////////////////////////////////////////////////////
    login = () :void =>
    {
        store.dispatch(
            {
                type: 'Views/useView',
                view_name: 'home',
            }
        )
    }
    toRegister = () :void =>
    {
        this.setState({   using_mode: 'register'   })
    }
    toHome = () :void =>
    {
        this.setState({   using_mode: 'login'   })
    }
    getMySecurityQuestion = () :void =>
    {
        // 
    }
    toResetPassword = () :void =>
    {
        this.setState({   using_mode: 'reset_password'   })
    }
    register = () :void =>
    {
        // 
    }
    resetPassword = () :void =>
    {
        // 
    }

}

const mapStateToProps = (state:any) =>
{
    return{
        store_state: state,
    }
}

/**********************************************************************************************************************/

export default connect(mapStateToProps)(Login)