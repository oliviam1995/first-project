jQuery(function($){
    $(window).scroll(function() {
  var $window = $(window),

      $box2 = $("box2");
      $bars = $("bars");

      var scroll = $window.scrollTop() + ($window.height() / 2);

      $box2.each(function () {
        var $this = $(this);
        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          $bars.addClass("imagewipe");
        }
      });
    }).scroll();
});