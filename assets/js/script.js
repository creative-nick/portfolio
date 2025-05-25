(function($) {
    var ost = 0;
    $(window).scroll(function() {
      var cOst = $(this).scrollTop();
      if(cOst > 50 && cOst > ost) {
         $('header').addClass('fixed').removeClass('default');
      }
      else {
         $('header').addClass('default').removeClass('fixed');
      }

      ost = cOst;
    });
  })(jQuery);

$(document).ready(function() {
        // Transition effect for navbar
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 100) {
              $('header').addClass('solid');
          } else {
              $('header').removeClass('solid');
          }
        });
});


(function($) {
    var aost = 0;
    $(window).scroll(function() {
      var cOste = $(this).scrollTop();
      if(cOste > 0 && cOste > aost) {
         $('.sm-footer').addClass('ftr-fixed').removeClass('ftr-default');
      }
      else {
         $('.sm-footer').addClass('ftr-default').removeClass('ftr-fixed');
      }

      aost = cOste;
    });
  })(jQuery);


$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
      return false;
    });
  });

$(function() {
    $('.portfolio').click (function() {
      $('html, body').animate({scrollTop: $('section.port').offset().top }, 'slow');
      return false;
    });
  });

$(function() {
    $('#hire').click (function() {
      $('html, body').animate({scrollTop: $('section.hire1').offset().top }, 'slow');
      return false;
    });
  });










// external js: isotope.pkgd.js


// init Isotope
var $grid = $('.isotop').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  getSortData: {
    category: '[data-category]',
    weight: function( itemElem ) {
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
  }
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// bind sort button click
$('#sorts').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });
});

$(function() {
    // Isotope stuff...
    $container.isotope({filter: '.design'});
    // more Isotope stuff...
});



$(window).load(function(){
var $grid = $('.isotop').isotope({
 itemSelector: '.element-item',
 layoutMode: 'fitRows',
 getSortData: {
   category: '[data-category]',
   weight: function( itemElem ) {
     var weight = $( itemElem ).find('.weight').text();
     return parseFloat( weight.replace( /[\(\)]/g, '') );
   }
 }
});
});
