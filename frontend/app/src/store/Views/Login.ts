import $my from '@/commons/my'

/**********************************************************************************************************************/

// actions /////////////////////////////////////////////////////////////////////////////////////////////////////////////
const MODULE_PATH = 'Login/'
const setServerMessage = `${MODULE_PATH}setServerMessage`
const setSecurityQuestion = `${MODULE_PATH}setSecurityQuestion`

// initial state ///////////////////////////////////////////////////////////////////////////////////////////////////////
const initial_state =
{
    server_message: 'server messages will show here',
    security_question: 'no info yet',
}

// reducer /////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default
function reducer(state = initial_state, action:store_d.Action)
{
    switch(action.type)
    {
        case setServerMessage:
            return logics.setServerMessage(state, action)
        case setSecurityQuestion:
            return logics.setSecurityQuestion(state, action)
        default:
            return state
    }
}

const logics =
{
    setServerMessage(state:any, action:store_d.Action)
    {
        let state_to_set = $my.deepCopy(state)
        state_to_set.server_message = state_to_set.server_message + '#'
        return state_to_set
    },
    setSecurityQuestion(state:any, action:store_d.Action)
    {
        let state_to_set = $my.deepCopy(state)
        state_to_set.security_question = state_to_set.security_question + '@'
        return state_to_set
    }
}
// action creators /////////////////////////////////////////////////////////////////////////////////////////////////////
// ...