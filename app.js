$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav:true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })

    $('#top-movies-slide').owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })

    $('.movies-slide').owlCarousel({
        items: 2,
        dots: false,
        nav:true,
        loop:true,
        navText: navText,
        margin: 15,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })

    $('.movies-slidep').owlCarousel({
        items: 2,
        dots: false,
        nav:true,
        loop:true,
        navText: navText,
        margin: 15,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })
})



$(document).ready(function() {
    $('#kgf').on('hidden.bs.modal', function() {
      var $this = $(this).find('iframe'),
        tempSrc = $this.attr('src');
      $this.attr('src', "");
      $this.attr('src', tempSrc);
    });
});

$(document).ready(function() {
    $('#beast').on('hidden.bs.modal', function() {
      var $this = $(this).find('iframe'),
        tempSrc = $this.attr('src');
      $this.attr('src', "");
      $this.attr('src', tempSrc);
    });
});

$(document).ready(function() {
    $('#valimai').on('hidden.bs.modal', function() {
      var $this = $(this).find('iframe'),
        tempSrc = $this.attr('src');
      $this.attr('src', "");
      $this.attr('src', tempSrc);
    });
});

$(document).ready(function() {
    $('#spider').on('hidden.bs.modal', function() {
      var $this = $(this).find('iframe'),
        tempSrc = $this.attr('src');
      $this.attr('src', "");
      $this.attr('src', tempSrc);
    });
});


//for online offline detection



// window.addEventListener("online",function(){
//     console.log("online");
//     alert ("online");
// });
// window.addEventListener("offline",function(){
//   alert('ofline')
// });
//  function check(e){
 
//  if (navigator.onLine==true){

//     console.log("online");
//  }else{

//     console.log("offline");
//  }

// }

//     var ustatus;
// ustatus=navigator.onLine;
// if(ustatus==true){

//     console.log("is online");
// }else{

//     console.log("offline");
// }
//}
