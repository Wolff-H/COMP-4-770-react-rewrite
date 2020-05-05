import React from "react"
import * as antd from "antd"
import * as icons from '@ant-design/icons'

// import r from "@/directives/index"

import { connect } from 'react-redux'
import store from '@/store'

import { columns } from '@/game/config/level-table.tsx'
// import demo_level_list from '@/game/mocks/demo_level_list'

import API from '@/api'
// styles //////////////////////////////////////////////////////////////////////////////////////////////////////////////
import "./index.styl"

/**********************************************************************************************************************/

interface _props
{
    store_state:any,
}

class Play extends React.Component<_props>
{
    render()
    {
        let view = null

        if(this.if_render)
        {
            view =
                <div id="play" className="view">
                    <title>
                        Play
                        <antd.Button className="go-back"
                            onClick={()=>this.toView('home')}
                        >
                            <icons.CaretLeftFilled></icons.CaretLeftFilled>
                        </antd.Button>
                    </title>
                    <section>
                        <antd.Table id="browse-levels"
                            columns={columns}
                            // dataSource={demo_level_list}
                            dataSource={this.fetchLevelList()}
                            rowKey="id"
                            pagination={false}
                            scroll={{y:450}}
                            onRow={(record)=>this.selectRow(record)}
                            rowClassName={(record)=>this.setRowClassName(record)}
                        ></antd.Table>
                        <div className="level-selected">
                            <b>Select Level: </b>
                            <span>
                                {this.state.selected_level_name+' '}
                            </span>
                            #{this.state.selected_level_id}
                        </div>
                        <div className="description">
                            {this.state.selected_level_description}
                        </div>
                        <antd.Button className="play button"
                            type="primary"
                            onClick={()=>this.playLevel()}
                        >
                            Play
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
        selected_level_name: '',
        selected_level_id: '',
        selected_level_description: '',
    }
    // 1 //
    get if_render()
    {
        return this.props.store_state.Views._.using_view === 'play'
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

    selectRow = (record:any) =>
    {
        return{
            onClick: (/*event:any*/) =>
            {
                console.log(record)
                this.setState(
                    {
                        selected_level_name: record.name,
                        selected_level_id: record.id,
                        selected_level_description: record.description,
                    }
                )
            }
        }
    }

    fetchLevelList = () =>
    {
        return API.Game.fetchLevelList()
    }

    playLevel = () =>
    {
        if(this.state.selected_level_id !== '')
        {
            // fetch level config //
            let level_config = API.Game.fetchLevel(parseInt(this.state.selected_level_id))
    
            // set game engine to use the level //
            window.game.game_engine.level_config = level_config
    
            // jump to shop //
            this.toView('shop')

        }
        else
        {
            antd.message.warning('select a level to play')
        }
    }

    setRowClassName = (record:any) =>
    {
        return record.id === this.state.selected_level_id ? 'selected' : ''
    }
}

const mapStateToProps = (state:any) =>
{
    return{
        store_state: state,
    }
}

/**********************************************************************************************************************/

export default connect(mapStateToProps)(Play)