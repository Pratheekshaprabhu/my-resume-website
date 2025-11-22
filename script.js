$(document).ready(function(){
    $("nav a").click(function(e){
        var target = $(this).attr("href");
        if (target.includes("#")) {
            e.preventDefault();
            $("html, body").animate({
                scrollTop: $(target).offset().top
            }, 800);
        }
    });
});
