
const selectElement= (element)=> document.querySelector (element);

selectElement ('.menu-icons').addEventListener('click',()=>{
    selectElement('nav').classList.toggle('active');

})





const responsive = {
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}

$(document).ready(function () {
    $("nav div").click(function() {
        $("ul").slideToggle();
        $("ul ul").css("display", "none");
    });
    $("ul li").click(function() {
        $("ul ul").slideUp();
        $(this).find('ul').slideToggle();
    });

    $(window).resize(function() {
        if($(window).width() > 768) {
              $("ul").removeAttr('style');
        }
    });

    /*Owl carousel for blog*/
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText: [$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
        responsive:responsive

    });

    /* Click to scroll*/
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0
        },1000);
    })

    /*Animation on Scroll*/
    AOS.init();

    // Auto-selection when clicked
    $(".comment_box").click(function() {
        $(".comment_box").css('color', 'black');
    });
    
    // Text turns gray again when not typing
    $(".comment_box").blur(function() {
    $(".comment_box").css('color', '#7A7A7A');
    });

    // Post a comment... dissapears when field is clicked
    $('.comment_box').focus(function() {
    if ($(this).val() === 'Post a comment...') {
        return $(this).val('');
    }
    });
    
    // Post a comment... reappears when field is not in focus anymore
    $('.comment_box').blur(function() {
    if ($(this).val() === '') {
        return $(this).val('Post a comment...');
    }
    });

 });