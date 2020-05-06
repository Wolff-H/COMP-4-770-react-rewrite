import React from "react"
// import * as antd from "antd"

import r from "@/directives"

// import { connect } from "react-redux"
// import store from "@/store"
// styles //////////////////////////////////////////////////////////////////////////////////////////////////////////////
import "./Bar.styl"

/**********************************************************************************************************************/

interface _props
{
    class_name:string,
    title:string,
}

export default
class Bar extends React.Component<_props>
{
    render()
    {
        let view = null

        if(true)
        {
            view =
                <div className={"bar"+r.class_({[this.props.class_name]: true})}
                >
                    <div className="groove">
                        <span>
                            {   this.props.title   }
                        </span>
                        <div className="content"></div>
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


    // methods ---------------------------------------------------------------------------------------------------------

}

// const mapStateToProps = (state:any) =>
// {
//     return{
//         store_state: state,
//     }
// }

/**********************************************************************************************************************/

// export default connect(mapStateToProps)(Bar)