$(document).ready(function(){
    let slickBtnCodePr = '<button type="button" class="slick-btn slick-prev"></button>';
    let slickBtnCodeNx = '<button type="button" class="slick-btn slick-next"></button>';  
  
    $(".js_project-dropdown-button").on( "click", function() {
        let dropdown = $(this).parent();
        dropdown.hasClass('open') ? dropdown.removeClass('open') : dropdown.addClass('open')
      });

    $(".js_project-image-select").on( "click", function() {
        if($(this).hasClass('selected'))
            return;

        let imageContainer = $(this).parents('.js_project-image-slider').find('.js_project-selected-image')[0];
        let currentSelected = $(this).parent().children('.js_project-image-select.selected')
        $(this).addClass('selected');
        currentSelected.removeClass('selected');
        imageContainer.src = this.src;
      });

      $('.js_crsl').each(function() {
        var crslNavCont = $(this).parent();
        $(this).slick({
          slidesToShow: 4,
          slidesToScroll: 4,
          prevArrow: slickBtnCodePr,
          nextArrow: slickBtnCodeNx,
          appendArrows: crslNavCont,
          adaptiveHeight: false,
          centerMode: true,
          infinite: true,
          centerPadding: 0,
          dots: false,
          responsive: [
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                swipeToSlide: true,
                arrows: false,
              }
            },
            {
              breakpoint: 1003,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                swipeToSlide: true
              }
            },
            {
              breakpoint: 625,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                swipeToSlide: true
              }
            }
          ]
        });
      });
})

