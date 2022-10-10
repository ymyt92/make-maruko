!function () {
    var duration = 40
    $('.btn').on('click', 'button', function () {
        $(this).css('font-weight', 'bold').siblings().css('font-weight', 'normal')
        var speed = $(this).attr('speed')
        switch (speed) {
            case 'slow':
                duration = 64
                break;
            case 'normal':
                duration = 36
                break;
            case 'fast':
                duration = 8
                break;
        }
    })

    function writeCode(code) {
        var codeCt = document.querySelector('#code')
        var styleTag = document.querySelector('#styleTag')
        var n = 0
        var clock

        clock = setTimeout(function run() {
            n++

            codeCt.innerText = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            codeCt.scrollTop = codeCt.scrollHeight
            if (n < code.length) {
                setTimeout(run, duration)
            }
        }, duration)
    }

    var code = `
    /*设置皮肤*/
            .preview-ct {
                background: #ffef5e;
            }
            /*头发*/
            .hairs {
                background: #152131;
                width: 190px;
                height: 250px;
                border-radius: 50% 50% 0 0;
                position: absolute;
                overflow: hidden;
            }
            .hairs:after {
                content: "";
                position: absolute;
                width: 300px;
                height: 200px;
                background: #ffef5e;
                top: 120px;
            }
            /*脸*/
            .face {
                background: #fbdac7;
                width: 130px;
                height: 100px;
                position: absolute;
                top: 50px;
                left: 30px;
                border-radius: 20px 20px 50px 50px;
                border: 1px solid #152131;
            }
            /*刘海*/
            .hairs .hair {
                width: 35px;
                height: 45px;
                background: #152131;
                position: absolute;
                z-index: 1;
                transform: rotate(70deg) scale(1) skew(44deg) translate(8px);
            }
            .hairs .hair.hair1 {
                top: 17px;
                left: 27px;
            }
            .hairs .hair.hair2 {
                top: 8px;
                left: 52px;
            }
            .hairs .hair.hair3 {
                top: 4px;
                left: 73px;
            }
            .hairs .hair.hair4 {
                top: 0;
                left: 90px;
            }
            .hairs .hair.hair5 {
                top: 4px;
                left: 108px;
            }
            .hairs .hair.hair6 {
                top: 8px;
                left: 125px;
            }

            .hairs .hair.hair7 {
                top: 17px;
                right: 17px;
            }
            .face .brow {
                width: 42px;
                height: 10px;
                background: #152131;
                position: absolute;
                top: 26px;
                border-radius: 50%;
            }
            .face .brow:after {
                content: "";
                background: #fbdac7;
                position: absolute;
                width: 50px;
                height: 10px;
                top: 1px;
                border-radius: 50%;
            }
            /*左眉毛*/
            .face .brow.left-brow {
                left: 18px;
                transform: rotate(-10deg);
            }
            /*右眉毛*/
            .face .brow.right-brow {
                right: 14px;
                transform: rotate(10deg);
            }
            .face .eye {
                width: 14px;
                height: 14px;
                border-radius: 50%;
                background: #000;
                position: absolute;
                top: 40px;
                z-index: 2;
            }
            /*左眼*/
            .face .eye.left-eye {
                left: 32%;
            }
            /*油烟*/
            .face .eye.right-eye {
                right: 32%;
            }
            /*红脸蛋*/
            .face .blusher {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: #f79c99;
                position: absolute;
                top: 70px;
            }
            .face .blusher.left-blusher {
                left: 8px;
            }
            .face .blusher.right-blusher {
                right: 8px;
            }
            /*嘴巴*/
            .face .mouth {
                border: 1px solid #152131;
                z-index: 1;
                width: 30px;
                height: 30px;
                background: #d96b6e;
                position: absolute;
                top: 50px;
                left: 50px;
                border-radius: 50%;
            }
            .face .mouth:after {
                content: "";
                width: 60px;
                height: 30px;
                background: #fbdac7;
                position: absolute;
                top: -10px;
                left: -20px;
                border-radius: 30%;
            }
            .face .ear {
                width: 10px;
                height: 20px;
                background: #fbdac7;
                position: absolute;
                top: 30px;
                z-index: 2;
            }
            /*左耳*/
            .face .ear.left-ear {
                left: -11px;
                border-radius: 5px 0 0 10px;
            }
            /*右耳*/
            .face .ear.right-ear {
                right: -11px;
                border-radius: 0 5px 10px 0;
            }
    /*OK!Done*/
    `
    writeCode(code)

}()