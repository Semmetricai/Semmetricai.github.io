$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky")
        }else{
            $(".navbar").removeClass("sticky")    
        }
    });

    // toggle menu/navbar 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });

    // coole typ animatie 
    var typed = new Typed(".typing", {
        strings: ["Developer", "Student", "Placeholder"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true

    })
});
