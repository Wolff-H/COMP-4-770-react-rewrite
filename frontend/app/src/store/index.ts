import { createStore, combineReducers } from 'redux'

// import $my from '@/commons/my'
import Views from './Views'

/**********************************************************************************************************************/


// actions /////////////////////////////////////////////////////////////////////////////////////////////////////////////
const MODULE_PATH = ''
const loadedAssets = `${MODULE_PATH}loadedAssets`
const addJustLoaded = `${MODULE_PATH}addJustLoaded`

// initial state ///////////////////////////////////////////////////////////////////////////////////////////////////////
const initial_state =
{
    username: '',
    if_user_logged_in: false,
    if_loading_assets: true,
    assets_loaded: [],
    using_level_name: '',

    custom_levels: [],
    using_level: null,

    account_levels: [],

    if_using_bgm: true,
}

// reducer /////////////////////////////////////////////////////////////////////////////////////////////////////////////
function reducer(state = initial_state, action:store_d.Action)
{
    switch(action.type)
    {
        case loadedAssets:
            return logics.loadedAssets(state)
        case addJustLoaded:
            return logics.addJustLoaded(state, action)
        default:
            return state
    }
}

const logics =
{
    loadedAssets(state:any)
    {
        // state.if_loading_assets = false
        console.log('loadedAssets')
        return state
    },
    addJustLoaded(state:any, action:store_d.Action)
    {
        // state.loaded.push(payload.just_loaded)
        console.log('addJustLoaded')
        return state
    },

}

/**********************************************************************************************************************/

let store = createStore(
    combineReducers(
        {
            _: reducer,
            Views: Views,
        }
    )
)

store.subscribe(
    () => console.log(store.getState())
)

export default store