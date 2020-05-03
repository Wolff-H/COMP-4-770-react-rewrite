import {
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
} from './Components'

interface components
{
    Transform?:         CTransform,
    LifeSpan?:          CLifeSpan,
    Input?:             CInput,
    BoundingBox?:       CBoundingBox,
    Animation?:         CAnimation,
    Gravity?:           CGravity,
    State?:             CState,
    Health?:            CHealth,
    Weapon?:            CWeapon,
    KillEffect?:        CKillEffect,
    ContactDamage?:     CContactDamage,
    Grabber?:           CGrabber,
    WeaponEnemy?:       CWeaponEnemy,
    AI?:                CAI,
}

export default class Entity
{
    id = 0
    if_alive = true
    layer = 0
    tags:string[] = []
    components:components = {}

    constructor(id:number, tags:string[], layer:number)
    {
        this.id = id
        this.tags = tags
        this.layer = layer
    }

   hasTag(tag:string = '') :boolean
   {
       for(let t of this.tags)
       {
           if(tag == t){return true}
       }
       return false
   }

    destroy()
    {
        this.if_alive = false
    }

}