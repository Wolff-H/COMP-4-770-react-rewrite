import React from 'react'
import Home from '@/components/Home'
import Login from '@/components/Login'
import LoadingAssets from '@/components/LoadingAssets'
// import Campaign from '@/components/Campaign'
// import CustomLevels from '@/components/CustomLevels'
import Play from '@/components/Play'
import Editor from '@/components/Editor'
import GameInfo from '@/components/GameInfo'
import Settings from '@/components/Settings'
import Account from '@/components/Account'
import Shop from '@/components/Shop'
import CCanvas from '@/components/CCanvas'
import HUD from '@/components/HUD'
import GamePauseModal from '@/components/GamePauseModal'

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
                {/* <Campaign></Campaign> */}
                {/* <CustomLevels></CustomLevels> */}
                <Play></Play>
                <Editor></Editor>
                <GameInfo></GameInfo>
                <Settings></Settings>
                <Account></Account>
                <Shop></Shop>
                <CCanvas></CCanvas>
                <HUD></HUD>
                <GamePauseModal></GamePauseModal>
            </div>
        )
    }

    componentDidMount()
    {
        main()
    }
}

export default App
