import Vec2 from './Vec2'

class Component
{

}

class CTransform extends Component
{
    position        = new Vec2(0,0)
    prev_position   = new Vec2(0,0)
    velocity        = new Vec2(0,0)
    scale           = new Vec2(1,1)
    angle           = new Vec2(0,0)

    constructor(position:Vec2)
    {
        super()
        this.position.x = position.x
        this.position.y = position.y
        this.prev_position.x = position.x
        this.prev_position.y = position.y
    }
}

class CBoundingBox extends Component
{
    size:Vec2
    half_size:Vec2

    constructor(size:Vec2)
    {
        super()
        this.size = size
        this.half_size = size._('/',2) as Vec2
    }
}

class CInput extends Component
{
    up      = false
    down    = false
    left    = false
    right   = false
}

class CAnimation extends Component
{
    animation = null
    if_repeat = true

    constructor(animation_name:string, if_repeat = true)
    {
        super()

        let animation_temp = window.game.game_engine.assets.animation_map[animation_name]
        this.animation = Object.assign( Object.create( Object.getPrototypeOf(animation_temp)), animation_temp)
        this.if_repeat = if_repeat
    }
}

class CGravity extends Component
{
    gravity = 0

    constructor(gravity:number)
    {
        super()

        this.gravity = gravity
    }
}

class CState extends Component
{
    state = ''
    if_on_ground = false

    constructor(state_name:string)
    {
        super()
        
        this.state = state_name
    }
}

class CHealth extends Component
{
    health = 100
    health_limit = 100

    constructor(health:number, health_limit:number)
    {
        super()
        
        this.health = health
        this.health_limit = health_limit
    }
}

export
{
    CTransform,
    CInput,
    CBoundingBox,
    CAnimation,
    CGravity,
    CState,
    CHealth,
}
