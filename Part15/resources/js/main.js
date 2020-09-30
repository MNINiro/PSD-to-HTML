$(document).ready(function(){
    // sticky menu 
    // js--services-section is refering service menu
    // nav is the main menu

    $ (".js--services-section").waypoint(function(direction){
        if (direction == "down"){
            $("nav").addClass("sticky"); // sticky will work
        } else {
            $("nav").removeClass("sticky"); // sticky will not work
        }
    });

    // mixitup used in portfolio section
    var mixer = mixitup('.container');
});

/* it initially load the index.html file then it will load the js file */
  /* it will connect with .container class of the portfolio section */
 