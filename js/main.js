
// to active animate 
new WOW().init();



// nav
$(document).ready(function(){

    /* to hide scroll */
    $('#scrollUp').fadeOut();
    // to change the backegroung of nav and hide and show the buuton which making scroll up
    $(window).scroll(function() {
        let height = $(window).scrollTop();
        if (height > 50) {
            $('.navbar').css({backgroundColor: "rgba(238, 237, 237, 0.856)"})
            $('#scrollUp').fadeIn(1000);
        } else {
            $('.navbar').css({backgroundColor: "transparent"})
            $('#scrollUp').fadeOut();
        }
        
    });


    /* to scroll up */
    $('#scrollUp').click(function() {
        $(window).scrollTop(0);
    })



    // in the phone to change color 
    $('.navbar-toggler').click(function() {
        $('#collapsibleNavbar').fadeToggle()
    })

    $('.navbar').click(function(e) {
        if (e.target.classList.contains('hidenave')) {
            $('#collapsibleNavbar').fadeToggle()
        }
        
    })

    // to change any link after click and to show for us what is the link clicked 
    $('.navbar-nav li a').click(function(e) {
        // $('.navbar-nav li a').attr("class","colorlink")
        if (e.target.classList.contains('changeclickedlink')) {
            $('.navbar-nav li a').removeClass('colorlink')
            e.target.classList.add("colorlink")
            // $('.navbar-nav li a').addClass('colorlink')
        }
    })




    // collapseeeee
    $('#FAQ .col-md-8 .hidecoll').hide()
    $('#FAQ .col-md-8 .div_1').show()


    $('#FAQ ul li').click(function(e) {
        if (e.target.classList.contains('form-control')) {
            $('#FAQ .col-md-4 ul li').removeClass('clickedul');
            e.target.classList.add('clickedul')

        }else if (e.target.classList.contains('fa-angle-right')) {
            $('#FAQ .col-md-4 ul li').removeClass('clickedul');
            e.target.parent().classList.add('clickedul')
        }

        
    })

    $('#FAQ ul li:nth-child(1)').click(function(e) {
        $('#FAQ .col-md-8 .hidecoll').hide()
        $('#FAQ .col-md-8 .div_1').show()

    })

    $('#FAQ ul li:nth-child(2)').click(function(e) {
        $('#FAQ .col-md-8 .hidecoll').hide()
        $('#FAQ .col-md-8 .div_2').show()

    })

    $('#FAQ ul li:nth-child(3)').click(function(e) {
        $('#FAQ .col-md-8 .hidecoll').hide()
        $('#FAQ .col-md-8 .div_3').show()

    })
    $('#FAQ ul li:nth-child(4)').click(function(e) {
        $('#FAQ .col-md-8 .hidecoll').hide()
        $('#FAQ .col-md-8 .div_4').show()

    })
    $('#FAQ ul li:nth-child(5)').click(function(e) {
        $('#FAQ .col-md-8 .hidecoll').hide()
        $('#FAQ .col-md-8 .div_5').show()

    })
    $('#FAQ ul li:nth-child(6)').click(function(e) {
        $('#FAQ .col-md-8 .hidecoll').hide()
        $('#FAQ .col-md-8 .div_6').show()

    })





});








