/**
* 首页
*/
import $ from 'jquery'
import html2canvas from 'html2canvas'
// import canvas2images from 'file-saver'
// import canvas2images from 'vendor/canvas2images.js'

import Draggabilly from 'draggabilly'

import toBlob from 'vendor/canvas2blob'
console.log(toBlob)
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
            this.initUi()
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
        this.scope.showInput = false
        this.scope.txt = $(el).val()
        $('.placeholder').text(this.scope.txt)
    }

    dragEvent (e, el) {
        console.log(el)
    }

    initUi () {
        let drag = new Draggabilly('.img-con', {
            containment: '.view-index'
        })
    }

    save () {
        console.log('save')
        html2canvas(document.body, {
            onrendered: canvas => {
                let data = canvas.toDataURL()
                console.log(data)
                this.scope.screenshotsImg = data
                this.scope.screenshots = true
                // console.log(canvas.toBlob)
                // console.log(canvas2images.saveAs)
                // canvas.toBlob(blob => {
                //     canvas2images.saveAs(blob, 'pretty image.png')
                // })
                // canvas2images.saveAsPNG(canvas)
                // var image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
                // window.location.href = image
            }
        })
    }

    // download (url) {
    //     console.log('download...')
    //     let xhr = new XMLHttpRequest()
    //     console.log(xhr)
    //     xhr.open('GET', url, true)
    //     xhr.responseType = 'blob'
    //     xhr.onreadystatechange = () => {
    //         if (xhr.readyState === 4) {

    //         }
    //     }
    // }
}
