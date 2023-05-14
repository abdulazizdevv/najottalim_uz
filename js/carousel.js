

    $('.camment_videos').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1600,
      speed:500,
      
    prevArrow: ' <div class=" news_btn slider_btn slider_prev "><img class="news_indicator" src="./images/prev.svg" alt="" width="16"></div>',
    nextArrow: '<div class=" news_btn slider_btn slider_next "><img class="news_indicator" src="./images/next.svg" alt="" width="16" ></div>',
    arrows:true,
    responsive: [
  
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      arrows:true,
      }
    },
 
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:true,
      }
    },
    {
        breakpoint: 524,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:true,
        }
      }
    
    ]
    });
  
    