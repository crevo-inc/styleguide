/* boxer */

$(".boxer").boxer();





/* wow */

new WOW().init();





/* scrollin */

$(document).ready(function() {
  $('.scroll').scrollInTurn({
    selector: '.scroll-content',
    fadeInSpeed : 750
  });
});





/* scroll-nav */

var $window = $(window), //ウィンドウを指定
$content = $(".archive-01"), //トリガー部分
$chenge = $(".scroll-nav"), //表示部分
topContent = $content.offset().top; //トリガーの位置を取得
 
var sticky = false;
 
 $window.on("scroll", function () {
      if ($window.scrollTop() > topContent) {　//scroll位置がトリガーの上にある場合
           if ( sticky === false ){
                $chenge.fadeIn();　//トリガー部分が上がる。
                sticky = true;
           }
      } else {
           if ( sticky === true ){　//scroll位置が下にある場合
                $chenge.fadeOut();//トリガー部分が降りてくる。
                sticky = false;
           }
      }
 });
 $window.trigger("scroll");
