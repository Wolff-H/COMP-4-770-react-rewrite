import CSStoJSON from './css2json'

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
    }
}

export default r