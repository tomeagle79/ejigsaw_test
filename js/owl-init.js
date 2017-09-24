$('.owl-carousel').owlCarousel({
    //stagePadding: 40,
    loop:true,
    margin:10,
    autoplay: false,
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
