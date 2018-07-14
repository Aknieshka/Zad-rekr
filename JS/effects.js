new WOW().init();

$(function(){
    $("a.smooth-scroll").click(
        function(event){
            event.preventDefault();
            var element = $(this).attr("href");

            $('html, body').animate({
                scrollTop: $(element).offset().top
            }, 1000);
        });
});