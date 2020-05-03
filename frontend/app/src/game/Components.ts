import Vec2 from './Vec2.js'

class Component
{
    constructor()
    {

    }
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

class CLifeSpan extends Component
{

}

class CInput extends Component
{

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

class CHealth extends Component
{

}

class CWeapon extends Component
{

}

class CWeaponEnemy extends Component
{

}

class CContactDamage extends Component
{

}

class CKillEffect extends Component
{

}

class CAnimation extends Component
{

}

class CGravity extends Component
{

}

class CState extends Component
{

}

class CGrabber extends Component
{

}

class CAI extends Component
{

}

export
{
    CTransform,
    CLifeSpan,
    CInput,
    CBoundingBox,
    CAnimation,
    CGravity,
    CState,
    CHealth,
    CWeapon,
    CKillEffect,
    CContactDamage,
    CGrabber,
    CWeaponEnemy,
    CAI,
}
