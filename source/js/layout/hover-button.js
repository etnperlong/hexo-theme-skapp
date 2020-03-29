window.addEventListener('load', function() {
    // 回到顶部
    (function() {
        var 
            backTopEle = document.getElementById('back-top'),
            packBackTop = new Pack(backTopEle);

        if (backTopEle) {
            packBackTop.transfrom('back-top--hidden').base('js-hidden').lastStart();

            function toggleBackTop() {
                var 
                    scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop,
                    isHidden = backTopEle.classList.contains('back-top--hidden') && backTopEle.classList.contains('js-hidden');

                if ((scrollTop > 350 && isHidden) || (scrollTop < 350 && !isHidden)) {
                    packBackTop.toggle();
                }
            }

            toggleBackTop();
            document.addEventListener('scroll', toggleBackTop);

            backTopEle.addEventListener('click', function() {
                var backTopAmt = new Amt();

                backTopAmt
                    .from({
                        top: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
                    })
                    .to({
                        top: 0
                    })
                    .transition(1000)
                    .on('frame', function(data) {
                        window.scrollTo(0, data.top);
                    })
                    .start();
            });
        }

        zhTransEle = document.getElementById('zh-trans');
        zhTransText = document.getElementById('zh-trans-text');

        if (zhTransEle) {
            zh_expires = 7;

            // 动态修改按钮文字
            if (getCookie('zh_choose') && getCookie('zh_choose') == "t") {
                zh_choose = "t"
                zhTransText.innerHTML = "繁";
            } else {
                zh_choose = "s"
                zhTransText.innerHTML = "简";
            }

            //监听点击事件
            zhTransEle.addEventListener('click', function() {
                if (zh_choose == "t") {
                    // 繁转简
                    zh_tran("s")
                    zh_choose = "s"
                    zhTransText.innerHTML = "简";
                } else {
                    // 简转繁
                    zh_tran("t")
                    zh_choose = "t"
                    zhTransText.innerHTML = "繁";
                }
            })
        }
    })();
});
