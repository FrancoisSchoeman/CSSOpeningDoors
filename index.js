
$(document).ready( function () {
    $('.frame').hover( function () {
      $(this).closest('.frame').find('.door').toggleClass('open');
    });

    $('.frame-2').hover( function () {
        $(this).closest('.frame-2').find('.door').toggleClass('open-2');
      });
});
