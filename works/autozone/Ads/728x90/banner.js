FORGE.init = function() {
  var width = FORGE.utils.getAdSizeFromMeta().width;
  var height = FORGE.utils.getAdSizeFromMeta().height;
  var banner = FORGE.createElement({id: "forge-banner", backgroundColor: "#333", width: width, height: height, cursor: "pointer", overflow: "hidden", parent: document.body});
  var ctaActive = false;

  var images = [
  "CTA.png",
  "BoshLogo.png", 
  "Fr1-bg.jpg",
  "Fr2-bg.jpg",
  "txt1.png",
  "txt2.png",
  "txt3.png",
  "Wiper.png",
  "AutoZone-Logo.png",
  "ElementBar.png"
  ];

  FORGE.preloadImages(images, true, function() {

    /* Create elements
    ================================================= */
    var Fr1 = FORGE.createElement({backgroundImage: "Fr1-bg.jpg", width: 728, height: 90, parent: banner});
    var txt_1 = FORGE.createElement({backgroundImage: "txt1.png", width: 728, height: 90, parent: banner});

    var Fr2 = FORGE.createElement({width: 728, height: 90, parent: banner});
    var Fr2_bg = FORGE.createElement({backgroundImage: "Fr2-bg.jpg", width: 728, height: 90, parent: Fr2});


    var txt_2 = FORGE.createElement({width: 728, height: 90, parent: banner});
    var txt_2_bg = FORGE.createElement({backgroundImage: "txt2.png", width: 728, height: 90, parent: txt_2});




    var elementBar = FORGE.createElement({width: 728, height: 90, parent: banner});
    var elementBar_bg = FORGE.createElement({backgroundImage: "ElementBar.png", parent: elementBar});



    var Wiper = FORGE.createElement({backgroundImage: "Wiper.png", width: 728, height: 90, left: 0, top: 0, parent: banner});


    var txt_3 = FORGE.createElement({backgroundImage: "txt3.png", width: 728, height: 90, parent: banner});

    var AutoZoneLogo = FORGE.createElement({backgroundImage: "AutoZone-Logo.png", width: 728, height: 90, parent: banner});

    var CTA = FORGE.createElement({backgroundImage: "CTA.png", left: 319, top: 45, width: 171, height: 30, retina: true, parent: banner});
    var BoshLogo = FORGE.createElement({backgroundImage: "BoshLogo.png", width: 728, height: 90, parent: banner});


    /* Create additional elements
    ============================================ */
   // var imageWipeMask = createImageWipeMask();
    var border = FORGE.createElement({border: "solid 1px #000", boxSizing: "border-box", width: width, height: height, parent: banner});

    /* Animations
    ============================================ */

    Wiper.set({transformOrigin:'right bottom'});


    function fadeInLeft(obj) {
      return new FORGE.Timeline()
      .from(obj, 1, {opacity: 0, x: 30, ease: Power3.easeOut});
    }


    function slideOutLeft(obj) {
      return new FORGE.Timeline()
      .to(obj, 1.5, { x: -728, ease: Power3.easeOut});
    }


    function fadeOut(obj) {
      return new FORGE.Timeline()
      .to(obj, 1, {opacity: 0, ease: Power3.easeOut});
    }






    function fadein(obj) {
      return new FORGE.Timeline()
        .from(obj, 1, {opacity: 0, ease: Power3.easeOut})
    }


    function slideInUp(obj) {
      return new FORGE.Timeline()
      .from(obj, 1, { y: 90, ease: Power3.easeOut});
    }


    function slideInLeft(obj) {
      return new FORGE.Timeline()
      .from(obj, 1.5, { x: 728, ease: Power3.easeOut});
    }


    Wiper.in = new FORGE.Timeline()
      .fromTo(Wiper, 1.5, {x: -728, ease: Power2.easeInOut}, { x: 40})
    ;
    var rectMaskIn = function(obj) {
      return new FORGE.Timeline()
        .fromTo(obj, 1.5, {clip: 'clip:"rect(0px 0px 90px 0px)', ease: Power2.easeIn}, {clip: 'clip:"rect(0px 728px 728px 0px)'});
    }





    elementBar.in = new FORGE.Timeline()
      .add(rectMaskIn(elementBar))
      .from(elementBar_bg, 3, {left: 0, ease: Sine.easeOut})

    Fr2.in = new FORGE.Timeline()
      .add(rectMaskIn(Fr2))
      .from(Fr2_bg, 3, {left: 0, ease: Sine.easeOut})


    txt_2.in = new FORGE.Timeline()
      .add(rectMaskIn(txt_2))
      .from(txt_2_bg, 3, {left: 0, ease: Sine.easeOut})



    /* Timeline
    ============================================ */
    var main_tl = new FORGE.Timeline()
      .offset(0.25)


      .add(fadeInLeft(txt_1))
      .offset(2)

      .add(Wiper.in)
      .add(elementBar.in)
      .add(Fr2.in)
      .add(txt_2.in)

      .offset(4.5)
      .add(fadeOut(txt_2))
      .add(slideOutLeft(elementBar))
      .offset(0.7)
      .add(fadein(txt_3))
      .add(slideInLeft(BoshLogo))
      .offset(0.5)
      .add(slideInUp(AutoZoneLogo))
      .add(slideInUp(CTA))


    /* Helpers
    ============================================ */
  
/*
    function createImageWipeMask() {
      var ctx = canvas.getContext("2d");
      var cx = width;
      var cy = 728;
      var radius = 305;

      canvas.startAngle = 1 * Math.PI;
      canvas.endAngle = 1.5 * Math.PI;
      
      canvas.start = function() {
        canvas.renderInterval = setInterval(canvas.render, 30);
      };

      canvas.stop = function() {
        clearInterval(canvas.renderInterval);
      };

      canvas.render = function() {
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.moveTo(cx,cy);
        ctx.arc(cx, cy, radius, canvas.startAngle, canvas.endAngle);
        ctx.closePath();
        ctx.fill();

        ctx.globalCompositeOperation = "source-in";

        ctx.drawImage(Fr2, 0, 0, width, height);

        ctx.globalCompositeOperation = "source-over";
      }

      canvas.render();




      canvas.foil = new FORGE.Timeline()
        .add(function() { canvas.start(); })
        .chain()
        .from(canvas, 1.5, {endAngle: 1 * Math.PI, ease: Power2.easeInOut})
        .chain()
        .to(canvas, 1.5, {endAngle: 2 * Math.PI})
        .chain()
        .add(function() { canvas.stop(); });

      return canvas;
    }

*/


    /* Interactions
    ============================================ */
    banner.onmouseenter = function() {
          TweenMax.to(CTA, 0.3, {scale: 1.02, force3D: false, rotation: 0.01, ease: Power3.easeOut})
    }

    banner.onmouseleave = function() {
          TweenMax.to(CTA, 0.3, {scale: 1, force3D: false, rotation: 0.01, ease: Power3.easeOut})
    }



  });
};
