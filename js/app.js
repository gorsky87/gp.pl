

"use strict";


const $ = require("jquery");
const moveTo = require("moveto");




$( document ).ready(function() {
 let moveToa = new moveTo();
  $( "p" ).click(function() {
    const target = document.getElementById('section-5');
    moveToa.move(target)
  });
});




