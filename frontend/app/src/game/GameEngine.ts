import Assets from './Assets'
import assets_mapping from './config/assets_mapping'
import GamePlay from './GamePlay'
// import entity_presets from './config/entity_presets.js'
// import GamePlay from './GamePlay.js'
// import GameEditor from './GameEditor.js'
// import TEST_level_config from './mocks/demo_level.js'

/**********************************************************************************************************************/

export default
class GameEngine
{
    assets = new Assets(assets_mapping.animation_mapping, assets_mapping.sound_mapping, assets_mapping.texture_mapping)
    
    using_level_config:any = {}
    using_purchase:any = {}
    
    game_play:any = null
    game_editor:any = null

    constructor()
    {
        console.log('game engine constructed')
    }

    // methods /////////////////////////////////////////////////////////////////////////////////////////////////////////
    // game play -------------------------------------------------------------------------------------------------------
    startLevel()
    {
        let level_config = this.applyPurchase(this.using_level_config, this.using_purchase)
        
        this.game_play = new GamePlay(level_config)
        this.game_play.initialize()
        this.game_play.run()
    }
    destroyGamePlay()
    {
        this.game_play.clearSideEffects()
        this.game_play = null

        console.log('destroyed gameplay')
        
    }
    // game editor -----------------------------------------------------------------------------------------------------
    startEditor()
    {
        // let level_config = this.applyPurchase(this.using_level_config, this.using_purchase)
        
        // this.game_play = new GamePlay(level_config)
        // this.game_play.run()
    }
    destroyGameEditor()
    {
        // this.game_play.clearSideEffects()
        // this.game_play = null
    }

    // helpers /////////////////////////////////////////////////////////////////////////////////////////////////////////
    applyPurchase(level_config:any, purchase:any)
    {
        // apply purchase to level config //
        // 组合构造一个独立对象 //
        return level_config
    }

    // // startLevel(/*level_config*/)
    // // {
    // //     // !!! TODO: get level_config from server //
    // //     // for now I just use the level_id as a mock level config for newing GamePlay
    // //     let level_config = TEST_level_config

    // //     console.log(level_config);
        
    // //     this.m_game_play = new GamePlay(level_config)
    // //     this.m_game_play.run()
    // // }

    // destroyGamePlay()
    // {
    //     this.m_game_play.clearSideEffects()
    //     this.m_game_play = null
    // }

    // startEditor(level_config)
    // {
    //     /**
    //      * !!! todo:
    //      * here starts a game editor
    //      */
    //     // let level_config = TEST_level_config

    //     this.m_game_editor = new GameEditor(level_config)
    //     this.m_game_editor.run()
    // }

    // // startEditor()
    // // {
    // //     /**
    // //      * !!! todo:
    // //      * here starts a game editor
    // //      */
    // //     let level_config = TEST_level_config

    // //     this.m_game_editor = new GameEditor(level_config)
    // //     this.m_game_editor.run()
    // // }

    // destroyGameEditor()
    // {
    //     this.m_game_editor.clearSideEffects()
    //     this.m_game_editor = null
    // }
}