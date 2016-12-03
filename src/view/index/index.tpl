<div class="view-index">
    <div class="container" mc-style="scope.bg | bg">
        <div class="img-con">
            <img mc-src="(scope.img ? scope.img : '/images/img1.jpg')" alt="">
        </div>
        <div class="txt">
            <input type="text"
                class="input-con"
                mc-placeholder="scope.defaultTxt"
                mc-show="scope.showInput"
                autofocus="true"
                mc-on-blur="inputOnBlur">
            <div class="placeholder"
                mc-hide="scope.showInput">这是默认文字，默认文字大概这么长就好了吧</div>
        </div>
    </div>
    <div class="screenshots">
        <img mc-src="scope.screenshotsImg" alt="">
        <!-- <div class="download" mc-show="scope.screenshots">
            <a href="" download="test.jpg">下载</a>
        </div> -->
    </div>
    <div class="tag-bar">
        <div class="change-item change-bg"
            mc-on-click="changeBg">更换背景</div>
        <div class="change-item change-img"
            mc-on-click="changeImg">更换图片</div>
        <div class="change-item change-txt"
            mc-on-click="changeTxt">更换文字</div>
        <div class="change-item save"
            mc-on-click="save">保存截图</div>
    </div>
</div>
