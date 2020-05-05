import React from "react"
import * as antd from "antd"
import * as icons from '@ant-design/icons'

// import r from "@/directives/index"

import $my from '@/commons/my'
import { connect } from 'react-redux'
import store from '@/store'
import equipments from '@/game/config/equipments'
// styles //////////////////////////////////////////////////////////////////////////////////////////////////////////////
import "./index.styl"

/**********************************************************************************************************************/

interface _props
{
    store_state:any,
}

interface equipments
{
    double_health:  number
    double_energy:  number
    damage_scroll:  number
    defense_scroll: number
    health_scroll:  number
    energy_scroll:  number
    speed_scroll:   number
    gravity_scroll: number
    health_potion:  number
    energy_potion:  number
}

class Shop extends React.Component<_props>
{
    render()
    {
        let view = null

        if(this.if_render)
        {
            view =
                <div id="shop" className="view">
                    <title>
                        Shop
                        <antd.Button className="go-back"
                            onClick={()=>this.toView('play')}
                        >
                            <icons.CaretLeftFilled></icons.CaretLeftFilled>
                        </antd.Button>
                    </title>
                    <section>
                        <div className="title">
                            You are about to enter level <b>{   this.using_level_config.name || ''   }</b>. <br />
                            Buy some equipments before you start. <br />
                            For this level you can use following equipments. <br />
                            Good luck! <br />
                        </div>
                        <div className="account-financial-info">
                            <b>My money: {'<infinity>'}</b>
                        </div>
                        <div className="shelf">
                            {
                                Object.entries(equipments).map(
                                    ([key,value]) =>
                                    {
                                        if(
                                            this.using_level_config !== {} &&
                                            this.using_level_config.available_equipments[key] &&
                                            this.using_level_config.available_equipments[key] !== 0
                                        )
                                        {
                                            return(
                                                <antd.Card className="item card"
                                                    title={value.title}
                                                    extra={this.showItemBoughtAmount(key)}
                                                    hoverable
                                                    key={key}
                                                    onClick={()=>this.buyItem(key)}
                                                >
                                                    {value.description}
                                                </antd.Card>
                                            )
                                        }
                                        return null
                                    }
                                )
                            }
                        </div>
                        <antd.Button className="start"
                            type="primary"
                            onClick={()=>this.startLevel()}
                        >
                            Start
                        </antd.Button>
                    </section>
                </div>
        }

        return view
    }

    // state -----------------------------------------------------------------------------------------------------------
    // 0 //
    state:any =
    {
        items_bought:
        {
            double_health:       0,
            double_energy:       0,
            damage_scroll:       0,
            defense_scroll:      0,
            health_scroll:       0,
            energy_scroll:       0,
            speed_scroll:        0,
            gravity_scroll:      0,
            health_potion:       0,
            energy_potion:       0,
        }
    }
    // 1 //
    get if_render()
    {
        return this.props.store_state.Views._.using_view === 'shop'
    }

    get using_level_config()
    {
        return window.game.game_engine.level_config
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

    showItemBoughtAmount = (item_name:string) =>
    {
        let amount = `
            ${this.state.items_bought[item_name]}
            / ${this.using_level_config.available_equipments[item_name] === -1 ? 'N' : this.using_level_config.available_equipments[item_name]}
        `
        return amount
    }

    buyItem = (item_name:string) =>
    {
        this.setState((state) => {
            let state_to_set = $my.deepCopy(state)
            
            if(
                this.using_level_config.available_equipments[item_name] < 0 ||
                state_to_set.items_bought[item_name] < this.using_level_config.available_equipments[item_name]
            )
            {
                state_to_set.items_bought[item_name] += 1
            }

            return state_to_set
        })
    }

    startLevel = () =>
    {
        console.log('start level')
        
        this.toView('canvas-game')
    }

}

const mapStateToProps = (state:any) =>
{
    return{
        store_state: state,
    }
}

/**********************************************************************************************************************/

export default connect(mapStateToProps)(Shop)