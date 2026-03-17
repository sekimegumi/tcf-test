jQuery.noConflict();
var $ = jQuery;
var $logo_svg;
var $anime_fill;
var $anime_stroke;
var $anime_base;
var anime_date;
var fill_offset = 300;
var stroke_offset = 500;
var anime_time;
var stroke_start = 0;
var stroke_duration = 1100; //線のアニメーション時間
var stroke_progress = 0;
var fill_start = stroke_duration - 100; //塗り開始タイミング
var fill_duration = 1300; //塗りのアニメーション時間
var fill_progress = 0;

function logo_anime_setup() {
  var logo_svg = document.getElementById('logo_svg').contentDocument;
  $logo_svg = $(logo_svg);
  $anime_fill = $logo_svg.find("#fill-stroke g > polyline,#fill-stroke g > line,#fill-stroke g > path");
  $anime_stroke = $logo_svg.find("#outline-stroke_1_ *");
  $anime_base = $logo_svg.find("#base");
  $anime_base.attr("style", "-webkit-transition: all 100ms cubic-bezier(0.250, 0.250, 0.750, 0.750);-moz-transition: all 100ms cubic-bezier(0.250, 0.250, 0.750, 0.750);  -o-transition: all 100ms cubic-bezier(0.250, 0.250, 0.750, 0.750); transition: all 100ms cubic-bezier(0.250, 0.250, 0.750, 0.750);");
  $anime_base.css("opacity", 0);
  $anime_fill.css({
    "stroke-width": 0,
    "stroke-dasharray": fill_offset,
    "stroke-dashoffset": fill_offset
  });
  $anime_stroke.css({
    "stroke-dasharray": stroke_offset,
    "stroke-dashoffset": stroke_offset
  });
  $(document).on('click', '.logo_svg_click', function () {
    logo_anime_start();
  });
  $('.logo_svg_hover').hover(function () {
    $anime_base.css("opacity", 1);
  }, function () {
    $anime_base.css("opacity", 0);
  });
}

function logo_anime_start() {
  logo_anime_setup();
  setTimeout(function () {
    anime_date = new Date();
    anime_time = anime_date.getTime();
    $("#logo_svg_wrap").css("opacity", 1);
    anime_logo_step();
  }, 100);
}

function anime_logo_step() {
  var anime_date = new Date();
  var anime_c = anime_date.getTime();
  var anime_d = anime_c - anime_time;
  fill_progress = anime_d - fill_start;
  if (fill_progress < 1) {
    fill_progress = 0;
  }
  fill_progress = fill_progress / fill_duration;
  if (fill_progress > 1) {
    fill_progress = 1;
  }
  $anime_fill.css({
    "stroke-width": 190 * fill_progress,
    "stroke-dashoffset": fill_offset - fill_offset * fill_progress * fill_progress
  });
  stroke_progress = anime_d - stroke_start;
  if (stroke_progress < 1) {
    stroke_progress = 0;
  }
  stroke_progress = stroke_progress / stroke_duration;
  if (stroke_progress > 1) {
    stroke_progress = 1;
  }
  $anime_stroke.css({
    "stroke-dashoffset": stroke_offset - stroke_offset * stroke_progress * stroke_progress
  });
  if (anime_d < 4000) {
    window.requestAnimationFrame(anime_logo_step);
  }
}