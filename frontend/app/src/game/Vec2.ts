export default
class Vec2
{
    x = 0
    y = 0

    constructor(x:number, y:number)
    {
        this.x = x
        this.y = y
    }

    // _(operator:string, rhs:Vec2) :Vec2|void
    _(operator:string, rhs:any)
    {
        switch(operator)
        {
            case '+':
                return new Vec2(this.x + rhs.x, this.y + rhs.y)
            case '-':
                return new Vec2(this.x - rhs.x, this.y - rhs.y)
            case '*':
                return new Vec2(this.x * rhs, this.y * rhs)
            case '*v':
                return this.x * rhs.y - this.y * rhs.x
            case '/':
                return new Vec2(this.x / rhs, this.y / rhs)
            case '==':
                return this.x === rhs.x && this.y === rhs.y
            case '!=':
                return this.x !== rhs.x || this.y !== rhs.y
            case '+=':
                this.x += rhs.x
                this.y += rhs.y
                break
            case '-=':
                this.x -= rhs.x
                this.y -= rhs.y
                break
            case '*=':
                this.x *= rhs
                this.y *= rhs
                break
            case '/=':
                this.x /= rhs
                this.y /= rhs
                break
            default:
                break
        }
    }

    dist(rhs:Vec2) :number
    {
        return Math.sqrt((this.x - rhs.x)*(this.x - rhs.x) + (this.y - rhs.y)*(this.y - rhs.y))
    }

    abs() :Vec2
    {
        return new Vec2(this.x < 0 ? -this.x : this.x, this.y < 0 ? -this.y : this.y)
    }

    normalize() :Vec2
    {
        let length = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
        
        return new Vec2(this.x / length, this.y / length)
    }
}