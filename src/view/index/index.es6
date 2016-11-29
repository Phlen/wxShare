/**
* 首页
*/

import View from 'view/base'
import './index.scss'

export default class Index extends View {

    static get viewName () {
        return 'index'
    }

    run () {
        this.render(require('./index.tpl')).then(()=>{

        })
    }
}
