$(document).ready(function(){

  // Animate $red background and $green progress bar until page loads
  $(window).load(function(){
    $('#progress-bar').animate({
      right: '-100%'
    }, {
      duration: 1000,
      easing: 'easeOutCirc'
    });
    $('#progress-bg').animate({
      opacity: 0,
      right: '-100%',
      zIndex: -9999
    }, {
      duration: 1000,
      easing: 'easeOutCirc'
    });
  });

  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  // If window width is > 580px set section#about height too 100%
  var divSize = $('#about-content').height();
  if (windowWidth > 580) {
    $('#about').css('height', windowHeight);
    $('#about-content').css('padding-top', (windowHeight - divSize + 100) / 2);
  }

  // Make header sticky after scroll 50px down
  var header = document.querySelector('header');
  var origOffsetY = header.offsetTop;

  function scroll() {
    if ($(window).scrollTop() >= origOffsetY) {
      $('header').addClass('sticky');
    } else {
      $('header').removeClass('sticky');
    }
  }

  document.onscroll = scroll;

  // Scroll and nav click functions
  var openNav = false;

  function giveAuto() {
    $('body').css({'overflow': 'auto', 'overflow-x': 'hidden'});
  }

  $('#menu-icon').click(function(){
    if (openNav == false){
      $('body').transition({overflow: 'hidden'});
      $('nav').transition({marginLeft: '200px'}, 100, 'out');
      $('#main').transition({marginLeft: '200px'}, 100, 'out');
      $('#menu-icon').transition({backgroundColor: 'rgba(0, 0, 0, 0.2'});

      openNav = true;
    } else {
      $('nav').transition({marginLeft: '0px'}, 100, 'out');
      $('#main').transition({marginLeft: '0px'}, 100, 'out');
      $('#menu-icon').transition({backgroundColor: 'transparent'});

      openNav = false;

      setTimeout(giveAuto, 100);
    }
  });

  $('#nav-home-button, #footer-home-button').click(function(){
    $('nav').transition({marginLeft: '0px'}, 100, 'out');
    $('#main').transition({marginLeft: '0px'}, 100, 'out');
    $('#menu-icon').transition({backgroundColor: 'transparent'});

    openNav = false;

    setTimeout(giveAuto, 100);

    $('body, html').animate({
      scrollTop: $('html').offset().top - 50
    },  {
      duration: 500,
      easing: 'swing'
    });
  });

  $('#nav-profile-button, #footer-profile-button, #about-button-ph').click(function(){
    $('nav').transition({marginLeft: '0px'}, 100, 'out');
    $('#main').transition({marginLeft: '0px'}, 100, 'out');
    $('#menu-icon').transition({backgroundColor: 'transparent'});

    openNav = false;

    setTimeout(giveAuto, 100);

    $('body, html').animate({
      scrollTop: $('#profile').offset().top - 50
    },  {
      duration: 500,
      easing: 'swing'
    });
  });

  $('#nav-projects-button, #footer-projects-button').click(function(){
    $('nav').transition({marginLeft: '0px'}, 100, 'out');
    $('#main').transition({marginLeft: '0px'}, 100, 'out');
    $('#menu-icon').transition({backgroundColor: 'transparent'});

    openNav = false;

    setTimeout(giveAuto, 100);

    $('body, html').animate({
      scrollTop: $('#projects').offset().top - 50
    },  {
      duration: 500,
      easing: 'swing'
    });
  });

  $('#nav-contact-button, #footer-contact-button').click(function(){
    $('nav').transition({marginLeft: '0px'}, 100, 'out');
    $('#main').transition({marginLeft: '0px'}, 100, 'out');
    $('#menu-icon').transition({backgroundColor: 'transparent'});

    openNav = false;

    setTimeout(giveAuto, 100);

    $('body, html').animate({
      scrollTop: $('#contact').offset().top - 50
    },  {
      duration: 500,
      easing: 'swing'
    });
  });

  // Profile image animation
  var imageRotate = false;

  $('#profile-image').click(function(){
    if (!imageRotate) {
      $('#image-inner').css({'-webkit-transform': 'rotate3d(0, 1, 0, 0deg)',
      /* Transform */   '-moz-transform': 'rotate3d(0, 1, 0, 0deg)',
      '-ms-transform': 'rotate3d(0, 1, 0, 0deg)',
      'transform': 'rotate3d(0, 1, 0, 0deg)',
      /* Animation */   '-webkit-animation': 'pulse 1s linear infinite',
      '-moz-animation': 'pulse 1s linear infinite',
      '-o-animation': 'pulse 1s linear infinite',
      'animation': 'pulse 1s linear infinite'
    });
    $('#second-inner').css({'-webkit-transform': 'rotate3d(0, 1, 0, -180deg)',
    /* Transform */   '-moz-transform': 'rotate3d(0, 1, 0, -180deg)',
    '-ms-transform': 'rotate3d(0, 1, 0, -180deg)',
    'transform': 'rotate3d(0, 1, 0, -180deg)',
    /* Animation */   '-webkit-animation': 'none',
    '-moz-animation': 'none',
    '-o-animation': 'none',
    'animation': 'none'
  });

  imageRotate = true;
} else {
  $('#image-inner').css({'-webkit-transform': 'rotate3d(0, 1, 0, 180deg)',
  /* Transform */   '-moz-transform': 'rotate3d(0, 1, 0, 180deg)',
  '-ms-transform': 'rotate3d(0, 1, 0, 180deg)',
  'transform': 'rotate3d(0, 1, 0, 180deg)',
  /* Animation */   '-webkit-animation': 'none',
  '-moz-animation': 'none',
  '-o-animation': 'none',
  'animation': 'none'
});
$('#second-inner').css({'-webkit-transform': 'rotate3d(0, 1, 0, 0deg)',
/* Transform */   '-moz-transform': 'rotate3d(0, 1, 0, 0deg)',
'-ms-transform': 'rotate3d(0, 1, 0, 0deg)',
'transform': 'rotate3d(0, 1, 0, 0deg)',
/* Animation */   '-webkit-animation': 'pulse 1s linear infinite',
'-moz-animation': 'pulse 1s linear infinite',
'-o-animation': 'pulse 1s linear infinite',
'animation': 'pulse 1s linear infinite'
});

imageRotate = false;
}
});
});
