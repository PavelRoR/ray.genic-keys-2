//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js
//@prepros-prepend jquery.fancybox.min.js

$(document).ready(function () {
    $(function () {
        var check = $('.check', this),
            email = $('.input-mail', this),
            button = $('.button-form', this);
        $(".form").on("submit", function () {
            var check = $('.check', this),
                reNone = /.+/,
                email = $('.input-mail', this),
                button = $('.button-form', this);
            if (!email.val().match(reNone)) {
                button.css({
                    'fontSize': '16px',
                    'color': 'red'
                }).text('Введите email');
                return false;
            }
            if (!check.prop("checked")) {
                check.next().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                check.next().children().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                button.css({
                    'fontSize': '16px',
                    'color': 'red'
                }).text('Соглашение!');
                return false;
            }
            if (email.val() && check) {

                button.text('Отправляем...');
                setTimeout(function () {
                    button.text('Отправлено!');
                }, 500);
                return true
            }
        });
        email.click(function () {
            button.css({
                'fontSize': '28px',
                'color': 'rgb(42, 45, 62)'
            }).text('Записаться');
            // message.slideUp(500);
        });
        check.click(function () {
            check.next().css({
                "color": "#aaa",
                'transition': 'all .4s ease'
            });
            check.next().children().css({
                "color": "#aaa",
                'transition': 'all .4s ease'
            });
            button.css({
                'fontSize': '28px',
                'color': 'rgb(42, 45, 62)'
            }).text('Записаться');
        });
    });

    $(".video-wrapper-revs img").click(function () {
        var a = $(this).parent().attr("data-youtube");
        $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>');
    });
    $(function () {
        $('#video-revs-slider').on('slide.bs.carousel', function () {
            $('.video-wrapper-revs iframe').each(function () {
                var l = $(this).parent().attr('data-img');
                $(this).parent().html('<img class="video-rev-img" src="' + l + '" alt="Видео отзыв">');
            });
            $(".video-wrapper-revs img").click(function () {
                var a = $(this).parent().attr("data-youtube");
                $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>');
            });
        });
    });
    /*Конец документа*/
});