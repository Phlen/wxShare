/**
* 首页
*/
import $ from 'jquery'
import html2canvas from 'html2canvas'
import canvas2images from 'vendor/canvas2images.js'

console.log(canvas2images)

import View from 'view/base'
import './index.scss'

export default class Index extends View {

    static get viewName () {
        return 'index'
    }

    run () {
        this.changeBgItem = ['/images/bg/bg2.jpeg', '/images/bg/bg1.jpeg']
        this.changeImgItem = ['/images/img2.jpg', '/images/img1.jpg']
        this.render(require('./index.tpl'), {
            changeBg: false,
            changeImg: false,
            showInput: false,
            bg: this.changeBgItem[1]
        }).then(() => {
        })
    }

    changeBg () {
        this.scope.changeBg = !this.scope.changeBg
        if (!this.scope.changeBg) {
            this.scope.bg = this.changeBgItem[1]
        } else {
            this.scope.bg = this.changeBgItem[0]
        }
    }

    changeImg () {
        console.log('changeImg')
        this.scope.changeImg = !this.scope.changeImg
        if (!this.scope.changeImg) {
            this.scope.img = this.changeImgItem[1]
        } else {
            this.scope.img = this.changeImgItem[0]
        }
    }

    changeTxt () {
        let defaultTxt = $('.placeholder').text()
        this.scope.defaultTxt = defaultTxt
        this.scope.showInput = !this.scope.showInput
    }

    inputOnBlur (e, el) {
        console.log(e)
        this.scope.showInput = false
        this.scope.txt = $(el).val()
        $('.placeholder').text(this.scope.txt)
    }

    save () {
        console.log('save')
        html2canvas(document.body, {
            onrendered: canvas => {
                let data = canvas2images.saveAsJPEG(canvas)
                console.log(data)
            }
        })
    }
}
