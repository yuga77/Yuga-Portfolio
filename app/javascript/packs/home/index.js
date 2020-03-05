document.addEventListener('DOMContentLoaded', () => {
  $('#page, #page1, #page2, #page3, #page4').on('click', function (e) {
    e.preventDefault();
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, 300);
    return false;
  });

  $('#js-pageTop').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300);
    return false;
  });

});
