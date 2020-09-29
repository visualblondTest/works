
//PRELOAD DE IMG
this.addEventListener("DOMContentLoaded", preloadImages, true);

var loadedImages = 0;
//ACA HAY QUE CARGAR LAS IMAGENES QUE SE USEN
var imageArray = new Array(
    "img/BG.jpg",
    "img/Eyes-Bottom.png",
    "img/Eyes-Top.png",
    "img/Text-1.png",
    "img/Text-2.png",
    "img/CTA.png",
    "img/Logo.png"
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
if(navigator.userAgent.indexOf('MSIE')!==-1
|| navigator.appVersion.indexOf('Trident/') > 0){
  
}


// VARIABLES GLOBALES
var _tt = new TimelineMax();
    _tt
    .from("[id*='contbg']", 3, {ease: Expo.easeOut, x: 50}, 0)
    //.from("[id*='Eyes-'] img", 3, {ease: Expo.easeOut, x: 50}, 0)

    .to("[id*='contbg']", 5, {ease: Expo.easeOut, scale: 0.66, x: 110, y: 30, force3D:false, rotation:0.01}, 2)
    .from("[id*='Logo']", 2, {ease: Expo.easeOut, autoAlpha: 0}, 2.2)
    .staggerFrom("[id*='Text-1'], [id*='Text-2']", 1, {ease: Expo.easeOut, x: -100, autoAlpha: 0}, 0.4, 2.8)
    .from("[id*='CTA']", 1, {ease: Back.easeOut.config(0.5), y: 200}, 3.5)

    ;


var _tt_eyes = new TimelineMax();
    _tt_eyes
    .to("[id*='Eyes-Top'] img", 0.2, {y: 6, repeat: 1, yoyo: true}, 1)
    .to("[id*='Eyes-Bottom'] img", 0.2, {y: -6, repeat: 1, yoyo: true}, 1)
    ;



function initAnimations(){
    _tt.timeScale(1); 
    _tt_eyes.timeScale(1); 

}


//HANDLERS
function initHandlers() {

var clicktag = document.getElementById('clickTag');
var cta = document.getElementById('CTA');

    clicktag.addEventListener('mouseup', function(event) {
        
        Enabler.exit('clicktag', window.clickTag); 
    })

    cta.addEventListener('mouseup', function(event) {
        
        Enabler.exit('cta', window.clickTag); 
    })

/*

    cta.addEventListener('mouseover', function(event) {
    TweenMax.fromTo("[id*='CTA']", 0.5, {ease: Expo.easeOut, scale: 1, force3D:false, rotation:0.00}, {scale: 1.1, force3D:false, rotation:0.01})
    TweenMax.fromTo("[id*='Eyes-Top'] img", 0.2, {y: 0, repeat: 1, yoyo: true}, {y: 6, repeat: 1, yoyo: true}, 1)
    TweenMax.fromTo("[id*='Eyes-Bottom'] img", 0.2, {y: 0, repeat: 1, yoyo: true}, {y: -6, repeat: 1, yoyo: true}, 1)
    })

    cta.addEventListener('mouseout', function(event) {
    TweenMax.fromTo("[id*='CTA']", 0.5, {ease: Expo.easeOut, scale: 1.1, force3D:false, rotation:0.01}, {scale: 1, force3D:false, rotation:0.00})
    })
*/

    setTimeout(function(){

    clicktag.addEventListener('mouseover', function(event) {
    TweenMax.fromTo("[id*='CTA']", 0.5, {ease: Expo.easeOut, scale: 1, force3D:false, rotation:0.00}, {scale: 1.1, force3D:false, rotation:0.01})
    TweenMax.fromTo("[id*='Eyes-Top'] img", 0.2, {y: 0, repeat: 1, yoyo: true}, {y: 6, repeat: 1, yoyo: true}, 1)
    TweenMax.fromTo("[id*='Eyes-Bottom'] img", 0.2, {y: 0, repeat: 1, yoyo: true}, {y: -6, repeat: 1, yoyo: true}, 1)
    })

    clicktag.addEventListener('mouseout', function(event) {
    TweenMax.fromTo("[id*='CTA']", 0.5, {ease: Expo.easeOut, scale: 1.1, force3D:false, rotation:0.01}, {scale: 1, force3D:false, rotation:0.00})
    })

      }, 4000)  






}



