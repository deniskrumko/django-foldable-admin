// Javascript code for "django-foldable-admin".
// Source: https://github.com/deniskrumko/django-foldable-admin

$(document).ready(function() {
  // Method to rotate element
  $.fn.rotate = function(degrees) {
    $(this).css({
      '-webkit-transform': 'rotate(' + degrees + 'deg)',
      '-moz-transform': 'rotate(' + degrees + 'deg)',
      '-ms-transform': 'rotate(' + degrees + 'deg)',
      'transform': 'rotate(' + degrees + 'deg)'
    });
    return $(this);
  };

  // Call JS only if user is on index page (index page has "content-related")
  if ($('#content-related').length) {

    // Collapse all elements at the page load
    // NOTE: You can remove it to make all sections expanded by default
    $('.tbody-collapse')
    .find('td, th')
    .wrapInner('<div />')
    .animate({
      'padding-top': '0px',
      'padding-bottom': '0px'
    })
    .children()
    .slideUp();

    // Button to expand/collapse all lines
    $(".collapse-button").on("click", function() {
      if ($('.collapse-button').html() == 'Expand all') {
        $('.tbody-collapse').show();
        $('.tbody-collapse')
          .find('td, th')
          .animate({
            'padding-top': '8px',
            'padding-bottom': '8px'
          })
          .children()
          .slideDown(250);
        $('.collapse-button').html('Collapse all');
        $('.collapse-icon').rotate(180);
      } else {
        $('.tbody-collapse')
          .find('td, th')
          .wrapInner('<div />')
          .animate({
            'padding-top': '0px',
            'padding-bottom': '0px'
          })
          .children()
          .slideUp(300, function() {
            $('.tbody-collapse').hide();
          });
        $('.collapse-button').html('Expand all');
        $('.collapse-icon').rotate(0);
      }
    });

    // Method to expand/collapse specified line
    $(".caption-collapse").on("click", function() {
      var $icon = $(this).children('.collapse-icon');
      var $tbody = $(this).nextAll(".tbody-collapse:first");
      console.log($tbody.is(':visible'));
      if ($tbody.is(':visible')) {
        $tbody
          .find('td, th')
          .wrapInner('<div />')
          .animate({
            'padding-top': '0px',
            'padding-bottom': '0px'
          })
          .children()
          .slideUp(300, function() {
            $tbody.hide();
          });
        $icon.rotate(0);
      } else {
        $tbody.show();
        $tbody
          .find('td, th')
          .animate({
            'padding-top': '8px',
            'padding-bottom': '8px'
          })
          .children()
          .slideDown(250);;
        $icon.rotate(180);
      }
    });
  }

});
