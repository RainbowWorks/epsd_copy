$(function () {

    //스크롤이 됐을 때 header에 on을 붙인다.
    //스크롤이 0이면 header에서 on을 뗀다.
    //event : click, scroll, wheel, mouseenter, mouseleave, change

    $(window).on('scroll', function () {
        //스크롤 된 양을 구함.
        let sct = $(window).scrollTop();
        console.log(sct)

        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    });


});

$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 6000,
        speed: 1000,
    });


})

$(function () {
    const MNS = new Swiper('.main_news_slide', {/*옵션입력*/
        loop: true,
        slidesPerView: 4, /*swiperjs에서 받아왔음*/
        spaceBetween: 20, /*swiperjs에서 받아왔음*/
        autoplay: {
            delay: 0, /*0이면 머무르는 시간이 0초*/
            disableOnInteraction: false,
        }, /*swiperjs에서 받아왔음*/

        speed: 5000, /*2500은 2.5초이다*/
    });
});