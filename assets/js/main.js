$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 100) {
        //clearHeader, not clearheader - caps H
        $(".header-menu").addClass("header-sticky");
    }else {
        $(".header-menu").removeClass("header-sticky");
    }
}); //missing );