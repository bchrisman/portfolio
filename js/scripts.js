////////////////////////////////// 
// Author: Brandon Chrisman
// Filename: scripts.js
// Requirements: jQuery 2.1.1
////////////////////////////////// 
/*jslint browser: true*/
/*global $, jQuery, alert*/
//////////////////////////////////
//Global variable
var prefix;
//Animate the nav links
$(document).ready(function () {
  "use strict";
  $('a[href^="#"]').click(function () {
    var target = $(this.hash);
    if (target.length === 0) { target = $('a[name="' + this.hash.substr(1) + '"]'); }
    if (target.length === 0) { target = $('html'); }
    $('html, body').animate({ scrollTop: target.offset().top - 50 }, 800);
    return false;
  });
});
function magImgMain(newImg) {
  "use strict";
  var oldImgVal, thmbRep, oldImgThmb, newImgThmb, oldImg = document.getElementById('mainImg').innerHTML, thmbLst = document.getElementById('preImgLst').innerHTML;
  //Get name of the current image in main container
  oldImgVal = oldImg.substring(35, 45);
  oldImgThmb = "prv" + prefix + oldImgVal.substring(5, 6);
  //Replace thumb of newImg with thumb of current mainImg
  //Search Thumb list for newImg then replace with preview image of oldImg
  //Set new thumbnail path
  newImgThmb = "prv" + prefix + newImg.substring(5, 6);
  //Swap thumbnail images within string
  thmbRep = thmbLst.replace(newImgThmb, oldImgThmb);
  //Update link in thumbnail to match new thumbnail
  thmbRep = thmbRep.replace("magImgMain('" + newImg + "')", "magImgMain('" + oldImgVal + "')");
  //Set string as innerHTML
  document.getElementById('preImgLst').innerHTML = thmbRep;
  //Set new image in main container
  document.getElementById('mainImg').innerHTML = '<img class="outline" src="img/work/' + newImg + '" alt="Website Developed by Brandon Chrisman">';
}
function loadNewSlide(slideNumber) {
  "use strict";
  var dotSel, mainFade, lstFade, newLinks, i = 0, t1, t2, t3, t4, t5;
  dotSel = document.getElementById('workNav').getElementsByTagName('div');
  switch (slideNumber) {
  case 1:
    prefix = "AW";
    dotSel[0].className = "dotNav selected";
    dotSel[1].className = "dotNav";
    dotSel[2].className = "dotNav";
    dotSel[0].removeAttribute("onclick");
    dotSel[1].setAttribute("onclick", "loadNewSlide(2)");
    dotSel[2].setAttribute("onclick", "loadNewSlide(3)");
    break;
  case 2:
    prefix = "NU";
    dotSel[0].className = "dotNav";
    dotSel[1].className = "dotNav selected";
    dotSel[2].className = "dotNav";
    dotSel[0].setAttribute("onclick", "loadNewSlide(1)");
    dotSel[1].removeAttribute("onclick");
    dotSel[2].setAttribute("onclick", "loadNewSlide(3)");
    break;
  case 3:
    prefix = "RM";
    dotSel[0].className = "dotNav";
    dotSel[1].className = "dotNav";
    dotSel[2].className = "dotNav selected";
    dotSel[0].setAttribute("onclick", "loadNewSlide(1)");
    dotSel[1].setAttribute("onclick", "loadNewSlide(2)");
    dotSel[2].removeAttribute("onclick");
    break;
  default:
    prefix = "AW";
    dotSel[0].className = "dotNav selected";
    dotSel[1].className = "dotNav";
    dotSel[2].className = "dotNav";
    dotSel[0].removeAttribute("onclick");
    dotSel[1].setAttribute("onclick", "loadNewSlide(2)");
    dotSel[2].setAttribute("onclick", "loadNewSlide(3)");
    break;
  }
  newLinks = document.getElementsByClassName('magnify');
  mainFade = document.getElementById('mainImg').getElementsByTagName('img');
  mainFade[0].className = mainFade[0].className + " hiddenObj";
  lstFade = document.getElementById('preImgLst').getElementsByTagName('img');
  function addFader() {
    if (i >= 2) {
      clearInterval(t1);
    }
    lstFade[i].className = "hiddenObj";
    i = i + 1;
  }
  t1 = setInterval(function () { addFader(); }, 200);
  function loadNew() {
  //Change out image in the #mainImg div
    mainFade[0].src = "img/work/wrk" + prefix + "1.jpg";
  //Change out the images in the #preImgLst
    lstFade[0].src = "img/work/prv" + prefix + "2.jpg";
    lstFade[1].src = "img/work/prv" + prefix + "3.jpg";
    lstFade[2].src = "img/work/prv" + prefix + "4.jpg";
  //Change thumbnail image links
    newLinks[0].setAttribute('onclick', "magImgMain('wrk" + prefix + "2.jpg')");
    newLinks[1].setAttribute('onclick', "magImgMain('wrk" + prefix + "3.jpg')");
    newLinks[2].setAttribute('onclick', "magImgMain('wrk" + prefix + "4.jpg')");
  }
  setTimeout(function () { loadNew(); }, 1200);
  function fadeIn() {
    i = 2;
    function comeBack() {
      if (i === 0) {
        clearInterval(t2);
      }
      lstFade[i].removeAttribute("class");
      i = i - 1;
    }
    t2 = setInterval(function () { comeBack(); }, 200);
  }
  t3 = setTimeout(function () { fadeIn(); }, 1200);
  //Fade #mainImg back in
  t4 = setTimeout(function () { mainFade[0].setAttribute("class", "outline"); }, 2100);
  //Fade out #workTitle & #workDesc
  function changeWorkText() {
    switch (prefix) {
    case "AW":
      document.getElementById("workTitle").innerHTML = "Another Way";
      document.getElementById("workDesc").innerHTML = "Anotherway.co is about informing others of the posibility of living in a stateless society. The focus of this website is about starting a dialogue between people about how society could provide important services without the monopoly on vioelence and coercion that comes with the state.";
      document.getElementById("techList").innerHTML = "<li>Adobe Photoshop CS6</li><li>HTML 5</li><li>CSS 3</li><li>jQuery 2.1.1</li>";
      break;
    case "NU":
      document.getElementById("workTitle").innerHTML = "NuGateway";
      document.getElementById("workDesc").innerHTML = "NuGateway.com is a political forum where every group in the political spectrum can discuss their ideas through the weekdays, then on the weekends the forum opens up to allow all the groups to debate on selected topics. NuGateway is an interesting experiment into philosophy and politics.";
      document.getElementById("techList").innerHTML = "<li>HTML 5</li><li>CSS 3</li><li>JavaScript</li><li>jQuery 2.1.1</li><li>Bootstrap</li>";
      break;
    case "RM":
      document.getElementById("workTitle").innerHTML = "Ready To Master";
      document.getElementById("workDesc").innerHTML = "ReadyToMaster.com is a website designed by <a href='http://alidoesdesign.com'>Ali Nagy</a> and exists to help students retain more of the information they are learning with the goal of helping them get better grades. ReadyToMaster is a huge resource with a lot of educational material from tips on how to eat and sleep in order to retain the most amount of information.";
      document.getElementById("techList").innerHTML = "<li>HTML 5</li><li>CSS 3</li><li>jQuery 2.1.1</li>";
      break;
    default:
      document.getElementById("workTitle").innerHTML = "Another Way";
      document.getElementById("workDesc").innerHTML = "Anotherway.co is about informing others of the posibility of living in a stateless society. The focus of this website is about starting a dialogue between people about how society could provide important services without the monopoly on vioelence and coercion that comes with the state.";
      document.getElementById("techList").innerHTML = "<li>Adobe Photoshop CS6</li><li>HTML 5</li><li>CSS 3</li><li>jQuery 2.1.1</li>";
    }
  }
  t5 = setTimeout(function () { changeWorkText(); }, 1200);
}
// To do
/////////////
// Make thumbnail images not flash when they change.
// Not sure how to implement this yet. Hmm... :]
//
// Change out the text under the pictures