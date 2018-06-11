$(function () {

    $('#dowebok').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        menu: '#menu',
        afterLoad: function (anchorLink, index) {
            if (index == 6) {
                $('.down-btn').css('display', 'none')
            }
            if (index != 1 && index != 3) {
                $('#menu').addClass('bannerBackground');
            } else {
                $('#menu').removeClass('bannerBackground');
            }
        },
        onLeave: function (index, direction) {
            if (index == 6) {
                $('.down-btn').css('display', 'block')
            }
        }

    });

    $(window).resize(function () {
        autoScrolling();
    });
    $('.down-btn').click(function () {
        $.fn.fullpage.moveSectionDown();
    })

    // $.fn.fullpage.setAutoScrolling(false);

    function autoScrolling() {
        var $ww = $(window).width();
        var $hh = $(window).height();
        if ($ww < 1024 || $hh < 667 || (/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent))) {
            $.fn.fullpage.setAutoScrolling(false);
            $('.footer').css('max-height', '150px')
            $('container').css('marginTop', '0')
            $('.down-btn').css('display', 'none');
        } else {
            $.fn.fullpage.setAutoScrolling(true);
            $('.down-btn').css('display', 'block')
        }
    }
    autoScrolling();
});
var type = true;
setInterval(() => {
    if (type) {
        $(".down-btn").animate({
            bottom: '30px'
        });
    } else {
        $(".down-btn").animate({
            bottom: '20px'
        });
    }
    type = !type;
}, 500)
$('#rows').on('mouseover mouseout', '.col-md-4', function () {
    $(this).addClass('active').siblings().removeClass('active');
})
$('#row2').on('mouseover mouseout', '.imgs', function () {
    if ($(this).hasClass('active')) {
        return;
    }
    var section2Text = [
        'BTB是由BiT Brothers发行的全球通用积分，2亿BTB通用积分豪情送出，更可领限量礼包。',
        '平台不定期按用户持币数占总数的比例，空投项目糖果。',
        '点卡套餐购买成功后，用户可享有交易手续费低至5折的权益。',
        '点卡套餐购买成功后，用户享有投票（上币）以及其他产品投票权。',
        'BiT Brothers不定期举办活动，购买点卡套餐，专享活动参与权。',
        '专属客服、专属API……'
    ];
    $('.text').find('p').text(section2Text[$(this).data('id')]);
    $(this).addClass('active').siblings().removeClass('active');
    var oldSrc = $(this).find('img')[0].src;
    var newSrc = oldSrc.replace('.png', '_s.png');
    newSrc = newSrc.replace('.jpg', '_s.jpg');
    $(this).siblings().find('img').each(function (index, el) {
        el.src = el.src.replace('_s.', '.');
    });
    $(this).find('img').attr('src', newSrc);
})

function uaredirect(f) {
    try {
        if (document.getElementById("bdmark") != null) {
            return
        }
        var b = false;
        if (arguments[1]) {
            var e = window.location.host;
            var a = window.location.href;
            if (isSubdomain(arguments[1], e) == 1) {
                f = f + "/#m/" + a;
                b = true
            } else {
                if (isSubdomain(arguments[1], e) == 2) {
                    f = f + "/#m/" + a;
                    b = true
                } else {
                    f = a;
                    b = false
                }
            }
        } else {
            b = true
        }
        if (b) {
            var c = window.location.hash;
            if (!c.match("fromapp")) {
                if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|SymbianOS)/i))) {
                    location.replace(f)
                }
            }
        }
    } catch (d) {}
}