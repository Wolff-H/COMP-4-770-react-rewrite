import Vec2 from "./Vec2"

/**********************************************************************************************************************/

export default
class Animation
{
    image:HTMLImageElement
    name = ''
    slides_total = 1
    play_interval = 0
    // if_repeat = true
    slide_size = new Vec2(0, 0)
    
    current_frame = 0
    if_done_one_play = false
    current_offset_x = 0

    constructor(image:HTMLImageElement, name:string, slides_total:number, play_interval:number/*, if_repeat:boolean = true*/)
    {
        this.image = image
        this.name = name
        this.slides_total = slides_total
        this.play_interval = play_interval
        // this.if_repeat = if_repeat
        
        this.slide_size = new Vec2(image.width/slides_total, image.height)
    }

    update()
    {
        // only an animation list is playable //
        if(this.slides_total > 1)
        {
            this.current_frame ++

            // loop slides //
            if(this.current_frame >= this.slides_total * this.play_interval)
            {
                this.current_frame = 0
                
                if(!this.if_done_one_play)
                {
                    this.if_done_one_play = true
                }
            }

            // switch slide by its slide_n //
            let slide_n = Math.floor(this.current_frame / this.play_interval)
            this.current_offset_x = slide_n * this.slide_size.x
        }
    }

}