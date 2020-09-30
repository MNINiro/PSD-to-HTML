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

// it initially load the index.html file then it will load the js file 
// it will connect with .container class of the portfolio section 

// following section is for scroll-behavior for IE/EDGE or Safari browser

$("a").on('click', function(event){
    if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            
        });
    }
});



// it will call myNav from mobile menu, which will overley (cover the whole visible area)
function openNav(){
    document.getElementById("myNav").style.width = "100%"; 
} 

// it will call myNav from mobile menu, which will overley (cover the whole visible area)
function closeNav(){
    document.getElementById("myNav").style.width = "0%"; 
}

//=========== Animated Circle java scripts =================

$('svg.radial-progress').each(function( index, value ) { 
    $(this).find($('circle.complete')).removeAttr( 'style' );
  });
  $(window).scroll(function(){
    $('svg.radial-progress').each(function( index, value ) { 
      // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
      if ( 
          $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
          $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
      ) {
          // Get percentage of progress
          percent = $(value).data('percentage');
          // Get radius of the svg's circle.complete
          radius = $(this).find($('circle.complete')).attr('r');
          // Get circumference (2πr)
          circumference = 2 * Math.PI * radius;
          // Get stroke-dashoffset value based on the percentage of the circumference
          strokeDashOffset = circumference - ((percent * circumference) / 100);
          // Transition progress for 1.25 seconds
          $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
      }
    });
  }).trigger('scroll');