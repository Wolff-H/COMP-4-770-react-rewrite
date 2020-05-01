import React from 'react'
import Home from '@/components/Home/index'
// style ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
import './antd.css'
import './App.styl'

/**********************************************************************************************************************/



function App()
{
    let p_Home =
    {
        // title: 'home component',
        message: '测试传prop',
    }

    return(
        <div id="app">
            <Home {   ...p_Home   }></Home>
        </div>
    )
}

export default App
