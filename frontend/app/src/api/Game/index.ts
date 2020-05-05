import demo_level_list from '@/game/mocks/demo_level_list'
import demo_level from '@/game/mocks/demo_level'

/**********************************************************************************************************************/

function fetchLevelList()
{
    console.log('fetch level list')
    
    return demo_level_list
}

function fetchLevel(level_id:number)
{
    console.log(level_id)

    return demo_level
    
}

export default
{
    fetchLevelList,
    fetchLevel,
}