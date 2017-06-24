function check(){
    $('.hideme').each( function(){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object ){
            $(this).css("opacity", "1");
        }else if (bottom_of_window < $(this).offset().top){
            $(this).css("opacity", "0");
        }
    }); 
}

$(document).ready(check);
$(window).scroll(check);