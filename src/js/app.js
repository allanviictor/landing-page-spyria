var $hamburger = $(".hamburger");

$hamburger.on("click", function (e) {

    $hamburger.toggleClass("is-active");
    
});


var owl = $('.owl-carousel').owlCarousel({
    margin:10,
    nav:true,
    dots: false,
    navText: ["<img style='transform: scale(-1)' src='./assets/ic-arrow-carrousel.svg'>", "<img src='./assets/ic-arrow-carrousel.svg'>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        768:{
            items:2
        },
        1000:{
            items:3
        }
    }
})




owl.owlcarousel2_filter('.recife')
$("a[data-owl-filter='.recife']").addClass('current')


$( '.owl-filter-bar' ).on( 'click', '.item', function(e) {
    
    e.preventDefault();
    var $item = $(this);
    var filter = $item.data( 'owl-filter' )
    console.log(this)

    $item.addClass( 'current' ).siblings().removeClass( 'current' );

    owl.owlcarousel2_filter(filter);

})