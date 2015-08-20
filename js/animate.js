/*jslint browser: true*/
/*global $, jQuery, alert*/
//Animate the nav links
$(document).ready(function () {
  "use strict";
  $('a[href^="#"]').click(function () {
    var target = $(this.hash);
    if (target.length === 0) {
      target = $('a[name="' + this.hash.substr(1) + '"]');
    }
    if (target.length === 0) {
      target = $('html');
      $('html, body').animate({ scrollTop: target.offset().top - 50 }, 800);
      return false;
    }
  });