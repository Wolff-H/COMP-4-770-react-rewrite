import React from 'react'
import Home from '@/components/Home'
import Login from '@/components/Login'
import LoadingAssets from '@/components/LoadingAssets'
import Campaign from '@/components/Campaign'
import CustomLevels from '@/components/CustomLevels'
import Editor from '@/components/Editor'
import GameInfo from '@/components/GameInfo'
import Settings from '@/components/Settings'
import Account from '@/components/Account'
import Shop from '@/components/Shop'

import main from '@/game/main'

// style ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
import './antd.css'
import './App.styl'

/**********************************************************************************************************************/

// function App()
// {
//     let p_Home =
//     {
//         // title: 'home component',
//         message: '测试传prop',
//     }

//     return(
//         <div id="app">
//             <Home {   ...p_Home   }></Home>
//             <Login></Login>
//             <LoadingAssets></LoadingAssets>
//             <Account></Account>
//         </div>
//     )
// }

class App extends React.Component
{
    render()
    {
        let p_Home =
        {
            // title: 'home component',
            message: '测试传prop',
        }

        return(
            <div id="app">
                <Login></Login>
                <LoadingAssets></LoadingAssets>
                <Home {   ...p_Home   }></Home>
                <Campaign></Campaign>
                <CustomLevels></CustomLevels>
                <Editor></Editor>
                <GameInfo></GameInfo>
                <Settings></Settings>
                <Account></Account>
                <Shop></Shop>
            </div>
        )
    }

    componentDidMount()
    {
        main()
    }
}

export default App
