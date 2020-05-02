import React from 'react'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Account from '@/components/Account'

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
            <Login></Login>
            <Account></Account>
        </div>
    )
}

export default App
