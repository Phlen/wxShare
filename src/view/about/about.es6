/**
* [desc]
* @date 2016-11-29 17:03:22
* @author 
* @link 
*/

import View from 'view/base'

export default class About extends View {

    static get viewName() {
        return 'about'
    }

    run () {
        this.render(require('./about.tpl'))
    }
}
