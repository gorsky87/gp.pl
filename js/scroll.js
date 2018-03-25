
"use strict";

const $ = require("jquery");
const moveTo = require("moveto");

$( document ).ready(function() {
  let moveToa = new moveTo();


  const trigger = document.getElementsByClassName('js-trigger')[0];

  moveToa.registerTrigger(trigger);

  $( "p" ).click(function() {
    const target = document.getElementById('aaa123');
    moveToa.move(target)
  });
});




