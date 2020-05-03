import store from '@/store'
import Animation from './Animation'

/**********************************************************************************************************************/

// assets map specs //
interface AnimationMap
{
    [animation_name:string]:Animation
}

interface SoundMap
{
    [sound_name:string]:HTMLAudioElement
}

interface TextureMap
{
    [texture_name:string]:HTMLImageElement
}

// Assets class //
export default class Assets
{
    animation_map:AnimationMap = {}
    animation_amount_left = 0

    sound_map:SoundMap = {}
    sound_amount_left = 0

    texture_map:TextureMap = {}
    texture_amount_left = 0

    constructor(animation_mapping:any, sound_mapping:any, texture_mapping:any)
    {
        this.loadAnimations(animation_mapping)    // load animations
        this.loadSounds(sound_mapping)    // load sounds
        this.loadTextures(texture_mapping)    // load textures
    }

    // helpers /////////////////////////////////////////////////////////////////////////////////////////////////////////
    // load animations -------------------------------------------------------------------------------------------------
    loadAnimations(animation_mapping:any)
    {
        this.animation_amount_left = Object.keys(animation_mapping).length

        for(let animation_name in animation_mapping)
        {
            let img = new Image()
            
            img.name = animation_name

            img.onload =
                () =>
                {
                    this.handleLoadedImage(
                        img,
                        animation_mapping[animation_name][1],    // slides_total
                        animation_mapping[animation_name][2],    // play_interval
                        animation_mapping[animation_name][3],    // if_repeat
                    )
                }
            img.src = require(`./art-resource/animations/${animation_mapping[animation_name][0]}`)
        }
    }

    handleLoadedImage(image:HTMLImageElement, slides_total:number, play_interval:number, if_repeat:boolean)
    {
        this.animation_amount_left -= 1
        this.animation_map[image.name] = new Animation(image, image.name, slides_total, play_interval, if_repeat)

        store.dispatch(
            {
                type: "addJustLoaded",
                just_loaded: image.name,
            }
        )

        if(this.animation_amount_left === 0)
        {            
            store.dispatch(
                {
                    type: "addJustLoaded",
                    just_loaded: '=== All Animations Loaded ===',
                }
            )
        }
    }

    // load sounds -----------------------------------------------------------------------------------------------------
    loadSounds(sound_mapping:any)
    {
        this.sound_amount_left = Object.keys(sound_mapping).length

        for(let sound_name in sound_mapping)
        {
            let aud = new Audio()

            aud.onloadeddata =
                () =>
                {
                    this.handleLoadedAudio(sound_name, aud)
                }
            aud.src = require(`./art-resource/sounds/${sound_mapping[sound_name]}`)
        }
    }

    handleLoadedAudio(name:string, sound:HTMLAudioElement)
    {
        this.sound_amount_left -= 1
        this.sound_map[name] = sound

        store.dispatch(
            {
                type: "addJustLoaded",
                just_loaded: name,
            }
        )

        if(this.sound_amount_left === 0)
        {            
            store.dispatch(
                {
                    type: "addJustLoaded",
                    just_loaded: '=== All Sounds Loaded ===',
                }
            )
        }
    }

    // load textures ---------------------------------------------------------------------------------------------------
    loadTextures(texture_mapping:any)
    {
        this.texture_amount_left = Object.keys(texture_mapping).length

        for(let texture_name in texture_mapping)
        {
            let img = new Image()

            img.onload =
                () =>
                {
                    this.handleLoadedImage_texture(texture_name, img)
                }
            img.src = require(`./art-resource/textures/${texture_mapping[texture_name]}`)
        }
    }

    handleLoadedImage_texture(name:string, texture:HTMLImageElement)
    {
        this.texture_amount_left -= 1
        this.texture_map[name] = texture

        store.dispatch(
            {
                type: "addJustLoaded",
                just_loaded: name,
            }
        )

        if(this.texture_amount_left === 0)
        {
            store.dispatch(
                {
                    type: "addJustLoaded",
                    just_loaded: '=== All Textures Loaded ===',
                }
            )

            setTimeout
            (
                () => 
                {
                    store.dispatch({type: "loadedAssets"})
                },
                5000
            )
        }
    }
}