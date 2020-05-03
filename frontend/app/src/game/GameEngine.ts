import Assets from './Assets'
import assets_mapping from './config/assets_mapping'
// import entity_presets from './config/entity_presets.js'
// import GamePlay from './GamePlay.js'
// import GameEditor from './GameEditor.js'
// import TEST_level_config from './mocks/demo_level.js'

/**********************************************************************************************************************/

export default
class GameEngine
{
    assets = new Assets(assets_mapping.animation_mapping, assets_mapping.sound_mapping, assets_mapping.texture_mapping)
    // m_entity_presets = entity_presets
    // m_level = TEST_level_config
    // m_game_play = null
    // m_game_editor = null

    // custom_levels = null
    // account_levels = null

    constructor()
    {
        console.log('game engine constructed')
    }

    // initialize()
    // {
        
    // }

    // startLevel(level_config)
    // {
    //     // !!! TODO: get level_config from server //
    //     // for now I just use the level_id as a mock level config for newing GamePlay
    //     // let level_config = TEST_level_config

    //     console.log(level_config);
        
    //     this.m_game_play = new GamePlay(level_config)
    //     this.m_game_play.run()
    // }

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