import GameBasic from './GameBasic'

/**********************************************************************************************************************/

function sLogSomething(this:GameBasic)
{
    console.log(this.refresh_interval + '#' + this.interval_event_id)
    
}

/**********************************************************************************************************************/

export default
{
    sLogSomething,
}