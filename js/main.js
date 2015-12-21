$(function(){
  $('.contact-page').hide();
  $('.about-page').hide();
  $('.logo').center(true);
})

jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
    return this;
}

$('.contact-link').click(function(){
    $('.home-page').hide();
    $('.about-page').hide();

    $('.contact-page').fadeIn("slow");
    initialize();
})
$('.home-link').click(function(){
    $('.contact-page').hide();
    $('.about-page').hide();
    $('.home-page').fadeIn("slow");
})
$('.about-link').click(function(){
    $('.contact-page').hide();
    $('.home-page').hide();
    $('.about-page').fadeIn("slow");;
})
    function initialize() {
        var mapOptions = {
            zoom: 18,
            center: new google.maps.LatLng(46.0567653,14.5051862),
            scrollwheel: false,
            disableDoubleClickZoom: true,
            mapTypeId:  google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(46.0567653,14.5051862),
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Odvetnica Andreja Medved"
        });
        function toggleBounce() {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        }
        google.maps.event.addListener(marker, 'click', toggleBounce);
        google.maps.event.addDomListener(window, 'load', initialize);
    }
