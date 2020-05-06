import {
    CTransform,
    CBoundingBox,
    CAnimation,
    CInput,
    CState,
    CGravity,
    CHealth,
} from './Components'

interface Components
{
    Transform?:         CTransform,
    Input?:             CInput,
    BoundingBox?:       CBoundingBox,
    Animation?:         CAnimation,
    Gravity?:           CGravity,
    State?:             CState,
    Health?:            CHealth,
}

export default class Entity
{
    id = 0
    layer = 0
    tags:string[] = []
    if_alive = true
    components:Components = {}

    constructor(id:number, layer:number, tags:string[])
    {
        this.id = id
        this.layer = layer
        this.tags = tags
    }

    hasTag(tag:string) :boolean
    {
        for(let t of this.tags)
        {
            if(tag === t)
            {
                return true
            }
        }
        
        return false
    }

    destroy()
    {
        this.if_alive = false
    }

}