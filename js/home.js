var typed = new Typed('.animate', {
    strings: [
      "your apps",
      "Your Device",
      "Mobile Apps",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  });
  

window.onscroll = function() {headerFun()};

function headerFun() {

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").style.padding = "10px";
      document.getElementById("header").style.backgroundColor = "#1F65DB";

      document.getElementById("logo").style.display = "none";
      document.getElementById("logo2").style.display = "block";
    } 
    else {
        document.getElementById("header").style.padding = "30px 10px";
        document.getElementById("header").style.backgroundColor = "transparent";

      document.getElementById("logo").style.display = "block";
      document.getElementById("logo2").style.display = "none";

    }   
}

/* owl Slider Center Mode */
var owl = $('.first-owl');
owl.owlCarousel({
    items:5,
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:10000,
    dotsEach:true,
    
});
var owl = $('.second-owl');
owl.owlCarousel({
    items:2,
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:8000,
    dotsEach:true,
    
});