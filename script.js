$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar no script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
});