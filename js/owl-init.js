$('.owl-carousel').owlCarousel({
    //stagePadding: 40,
    loop:true,
    autoplay: false,
    stagePadding: 40,
    margin: 42,
    items:1,
    nav:true,
    navText: [
      '<span class="icon fa fa-angle-left">',
      '<span class="icon fa fa-angle-right">'
      ],
    responsive:{
        0:{

        },
        320:{

        },
        768:{
          nav: true,
        }
    }
})
