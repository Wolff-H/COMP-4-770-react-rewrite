import React from 'react'
import Home from '@/components/Home'
import Login from '@/components/Login'
import LoadingAssets from '@/components/LoadingAssets'
import Account from '@/components/Account'
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
                <Home {   ...p_Home   }></Home>
                <Login></Login>
                <LoadingAssets></LoadingAssets>
                <Account></Account>
            </div>
        )
    }

    componentDidMount()
    {
        main()
    }
}

export default App
