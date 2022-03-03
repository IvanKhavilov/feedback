$(function () {
  // $(".fancybox-button").fancybox({
  //   prevEffect: "none",
  //   nextEffect: "none",
  //   closeBtn: false,
  //   helpers: {
  //     title: { type: "inside" },
  //     buttons: {},
  //   },
  // });

  $(".feedback__slider").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    nextArrow: '<button type="button" class="slick-next"><img src="image/arrow-next.svg" alt="icon-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="image/arrow-prev.svg" alt="icon-prev"></button>',
    speed: 500,
    fade: true,
    cssEase: "linear",
  });

  $(".show__btn").click(function () {
    $(".hide__btn").css("display", "inline-block");
    $(".show__btn").css("display", "none");
    $(".item-descr--hide").css("display", "block");
  });
  $(".hide__btn").click(function () {
    $(".hide__btn").css("display", "none");
    $(".show__btn").css("display", "inline-block");
    $(".item-descr--hide").css("display", "none");
  });
});

$(document).ready(function () {
  $(".fancybox-button").fancybox({
    prevEffect: "none",
    nextEffect: "none",
    closeBtn: false,
    helpers: {
      title: { type: "inside" },
      buttons: {},
    },
  });
});
