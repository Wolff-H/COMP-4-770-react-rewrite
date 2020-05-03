
import Vec2 from './Vec2.js'
import Entity from './Entity.js'

export default
class Physics
{
    constructor()
    {

    }

    static getOverlap(a:Entity, b:Entity)
    {
        let a_position = a.components.Transform!.position
        let b_position = b.components.Transform!.position
        let a_halfBB = a.components.BoundingBox!.half_size
        let b_halfBB = b.components.BoundingBox!.half_size
        let overlap_x = (a_halfBB.x + b_halfBB.x) - Math.abs(b_position.x - a_position.x)
        let overlap_y = (a_halfBB.y + b_halfBB.y) - Math.abs(b_position.y - a_position.y)

        return new Vec2(overlap_x, overlap_y)
    }

    static getPreviousOverlap(a:Entity, b:Entity)
    {
        let a_position = a.components.Transform!.prev_position
        let b_position = b.components.Transform!.prev_position
        let a_halfBB = a.components.BoundingBox!.half_size
        let b_halfBB = b.components.BoundingBox!.half_size
        let overlap_x = (a_halfBB.x + b_halfBB.x) - Math.abs(b_position.x - a_position.x)
        let overlap_y = (a_halfBB.y + b_halfBB.y) - Math.abs(b_position.y - a_position.y)

        return new Vec2(overlap_x, overlap_y)
    }

    // static lineIntersectEntity(a, b, entity)
    // {
    //     let pos = entity.components.CTransform.position
    //     let size = entity.components.CBoundingBox.size

    //     let left_top        = pos
    //     let left_bottom     = new Vec2(pos.x, pos.y + size.y)
    //     let right_top       = new Vec2(pos.x + size.x, pos.y)
    //     let right_bottom    = pos._("+", size)

    //     if(this.lineIntersect(a, b, left_top, right_top))        {return true}
    //     if(this.lineIntersect(a, b, right_top, right_bottom))    {return true}
    //     if(this.lineIntersect(a, b, right_bottom, left_bottom))  {return true}
    //     if(this.lineIntersect(a, b, left_bottom, left_top))      {return true}

    //     return false
    // }

    // static lineIntersect(a1, a2, b1, b2)
    // {
    //     let has_intersect = false

    //     let r = a2._("-", a1)
    //     let s = b2._("-", b1)

    //     let rs = r._("*v",s)
    //     let ba = b1._("-",a1)

    //     let t = ba._("*v", s) / rs
    //     let u = ba._("*v", r) / rs

    //     if (t >= 0 && t <= 1 && u >= 0 && u <= 1)
    //     {
    //         has_intersect = true;
    //     }
    //     return has_intersect
    // }

    // static getDist(a, b)
    // {
    //     let dist_x = Math.abs(a.components.CTransform.position.x - b.components.CTransform.position.x)
    //     let dist_y = Math.abs(a.components.CTransform.position.y - b.components.CTransform.position.y)
    //     return new Vec2(dist_x, dist_y)
    // }

    // static getDistVec_dir(a, b)
    // {
    //     let dist_x = (a.x - b.x)/64
    //     let dist_y = (a.y - b.y)/64
    //     return Math.sqrt(dist_x*dist_x + dist_y*dist_y)
    // }
}
