import CSStoJSON from './css2json'
// import $my from '@/commons/my'

const r =
{
    /**
     * 
     * @param if_display the variable that controls display attribute
     */
    show(if_display:boolean) :object
    {
        return if_display ? {display: ''} : {display: 'none'}
    },

    /**
     * @description 将纯css字串转为对象（驼峰形式的）
     * @param {string} css_string
     */
    css(css_string:string)
    {
        return (CSStoJSON as any)(css_string)['']
    },

    model: model,
}

/**
 * @description 响应式数据的双向绑定指令，注意：仅支持在state内的顶层属性
 * @param value 
 */
// function model(value:string) :string
// function model(value:string) :string
// {
//     if(typeof value === 'string')
//     {
        
//     }
// }
function model(component:any, value_name:string)
{
    return{
        value: component.state[value_name],
        onChange: (e:any) => 
        { 
            component.setState(
                {
                    [value_name]: e.target.value
                }
            )
        }
    }
}

export default r