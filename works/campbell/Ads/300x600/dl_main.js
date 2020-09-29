//PRELOAD DE IMG
this.addEventListener("DOMContentLoaded", preloadImages, true);

var loadedImages = 0;
//ACA HAY QUE CARGAR LAS IMAGENES QUE SE USEN
var imageArray = new Array(
    "img/img-1.jpg", "img/product.png", "img/bar-1.png", "img/bar-2.png", 
    "img/bar-3.png", "img/smoke.png", "img/cta.png", "img/cta-arrow.png", "img/txt-1.png", "img/txt-2.png", "img/txt-3.png", "img/txt-4.png", "img/img-2.jpg", "img/img-3.jpg"

);

function preloadImages(e) {
    for (var i = 0; i < imageArray.length; i++) {
        var tempImage = new Image();

        tempImage.addEventListener("load", trackProgress, true);
        tempImage.src = imageArray[i];
    }
}

function trackProgress() {
    loadedImages++;

    if (loadedImages == imageArray.length) {
        imagesLoaded();
    }
}

function imagesLoaded() {

    document.getElementById('loader-container').style.display = 'none';
    document.getElementById('banner_content').style.display = 'block';



    initHandlers();
    initAnimations();

}

/* PARA DETECTAR SI ES IOs */
var is_Mac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (is_Mac == true || iOS == true) {

}



/* PARA DETECTAR SI ES IE */
if (navigator.userAgent.indexOf('MSIE') !== -1 ||
    navigator.appVersion.indexOf('Trident/') > 0) {

}


// VARIABLES GLOBALES
var _tt_globalSmoke = new TimelineMax({repeat: -1});
var checkCta = 0;


function initAnimations() {


var multitimeline = new TimelineMax();
    multitimeline
    .add(fr1(), 0)
    .add(fr2(), 3)
    .add(fr3(), 6)
    .add(endFrame(), 9.5);



function fr1(){
    var _tt_fr1 = new TimelineMax();
    _tt_fr1
    .from("#fr-1", 1.5 , { scale: 1.1, rotation: 0.01, ease: Power4.easeOut }, 0)
    .from("#product", 1.5 , { y: 100, ease: Power4.easeOut }, 0)
    .from("#bar-1", 1 , { y: -100, rotation: 0.01, ease: Power4.easeOut }, 0.2)


return _tt_fr1
}

function fr2(){
    var _tt_fr2 = new TimelineMax({});
    _tt_fr2
    .to("#fr-1", 1 , { x:-10, opacity: 0, ease: Power4.easeOut }, 0)
    .from("#fr-2", 1.5 , { scale: 1.1, opacity: 0, rotation: 0.01, ease: Power4.easeOut }, 0)

    .from("#bar-2", 1 , { y: -100, rotation: 0.01, ease: Power4.easeOut }, 0.2)


return _tt_fr2
}

function fr3(){

    var _tt_fr3 = new TimelineMax({});
    _tt_fr3
    .to("#fr-2", 1 , { x:10, opacity: 0, ease: Power4.easeOut }, 0)
    .from("#fr-3", 1.5 , { scale: 1.1, opacity: 0, rotation: 0.01, ease: Power4.easeOut }, 0)

    .to("#img-3-spoon", 1.5 , { x: -5, repeat: -1, yoyo: true, ease: Linear.easeNone }, 0)
    .from("#bar-3", 1 , { y: -100, rotation: 0.01, ease: Power4.easeOut }, 0.2)

return _tt_fr3
}


function endFrame(){

    var _tt_endFrame = new TimelineMax({});
    _tt_endFrame
    .set("[id*='txt-']", {clip: "rect(0px 300px 600px 0px"})
    .from("#txt-1", 1 , { clip: "rect(0px 0px 600px 0px", ease: Power4.easeOut }, 0)
    .from("#txt-2", 1 , { clip: "rect(0px 300px 600px 300px", ease: Power4.easeOut }, 0.3)
    .from("#txt-3", 1 , { clip: "rect(0px 0px 600px 0px", ease: Power4.easeOut }, 0.6)
    .from("#txt-4", 1 , { clip: "rect(0px 300px 600px 300px", ease: Power4.easeOut }, 0.9)
    .from("#txt-5", 1 , { clip: "rect(0px 0px 600px 0px", ease: Power4.easeOut }, 1.2)
    .from("#txt-6", 1 , { clip: "rect(0px 300px 600px 300px", ease: Power4.easeOut }, 1.5)


return _tt_endFrame
}



    _tt_globalSmoke
    .staggerFromTo("[id*='smoke-1-']", 5 , { opacity: 0 }, { opacity: 0.5, scale: 1.05, y: -800, repeat: -1, ease: Linear.easeNone }, 0.5, 0)
    .staggerFromTo("[id*='smoke-2-']", 5 , { opacity: 0 }, { opacity: 0.5, scale: 1.05, y: -800, repeat: -1, ease: Linear.easeNone }, 0.5, 0)
    .staggerFromTo("[id*='smoke-3-']", 5 , {x: 0, y: 60, opacity: 0 }, { x: -60, opacity: 0.5, scale: 1.15, y: -800, repeat: -1, ease: Linear.easeNone }, 0.5, 0)



  setTimeout(function(){
  _tt_globalSmoke.pause();
  multitimeline.pause();
  }, 15000)


}


//var tl_BallAnim = smokes("[id*='smoke-1-a']");




//HANDLERS
function initHandlers() {

    var clicktag = document.getElementById('clickTag');
    var bg_cta = document.getElementById('bg_cta');
    clickTAGvalue = dhtml.getVar('clickTAG', 'https://google.com');
    landingpagetarget = dhtml.getVar('landingPageTarget', '_blank');


    clicktag.addEventListener('mouseup', function(event) {
     window.open(clickTAGvalue,landingpagetarget);
    })


/*-------*/

    clicktag.addEventListener('mouseover', function(event) {
            TweenMax.to("#cta-arrow", 0.2 , { x: 2.5, repeat: -1, yoyo: true, ease: Linear.easeNone }, 0)
            TweenMax.to("#cta", 0.2 , { opacity: 0, ease: Linear.easeNone }, 0)

                })
    
    clicktag.addEventListener('mouseout', function(event) {
            TweenMax.to("#cta-arrow", 0.2 , { x: 0, ease: Linear.easeNone }, 0)
            TweenMax.to("#cta", 0.2 , { opacity: 1, ease: Linear.easeNone }, 0)

    })



  setTimeout(function(){

    clicktag.addEventListener('mouseover', function(event) {
            TweenMax.to("#cta-arrow", 0.2 , { x: 2.5, repeat: -1, yoyo: true, ease: Linear.easeNone }, 0)
            TweenMax.to("#cta", 0.2 , { opacity: 0, ease: Linear.easeNone }, 0)

    _tt_globalSmoke.play();
    })

    clicktag.addEventListener('mouseout', function(event) {
            TweenMax.to("#cta-arrow", 0.2 , { x: 0, ease: Linear.easeNone }, 0)
            TweenMax.to("#cta", 0.2 , { opacity: 1, ease: Linear.easeNone }, 0)

    _tt_globalSmoke.pause();

    })

  }, 15000)


}