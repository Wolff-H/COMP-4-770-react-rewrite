import CSStoJSON from './css2json'
// import $my from '@/commons/my'

/**
 * 
 * @param if_display the variable that controls display attribute
 */
function show(if_display:boolean) :object
{
    return if_display ? {display: ''} : {display: 'none'}
}

/**
 * 
 * @description 将纯css字串转为对象（驼峰形式的）
 */
function css(css_string:string)
{
    return (CSStoJSON as any)(css_string)['']
}

/**
 * 
 * @description 响应式数据的双向绑定指令，注意：仅支持在state内的顶层属性
 */
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

/**
 * 
 * @description 传入一个对象，形式为{类名：真假值}
 * @returns 转换后的类名字串
 */
function class_(x_class:any) :string
{
    let class_string = ''

    for(let key in x_class)
    {
        if(x_class[key])
        {
            class_string += ' '+key
        }
    }

    return class_string
}

const r =
{
    show,
    class_,
    css,
    model,
}

/**********************************************************************************************************************/

export default r