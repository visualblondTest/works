FORGE.init = function() {
  var width = FORGE.utils.getAdSizeFromMeta().width;
  var height = FORGE.utils.getAdSizeFromMeta().height;
  var banner = FORGE.createElement({id: "forge-banner", backgroundColor: "#333", width: width, height: height, cursor: "pointer", overflow: "hidden", parent: document.body});
  var ctaActive = false;

  var images = ["CTA.png", "BoshLogo.png", "txt1-1.png", "txt1-2.png", "txt1-3.png", "txt1-4.png",
    "Fr1-bg.jpg", "Fr2-bg.jpg", "Fr6-bg.jpg", "Wiper.png", "txt4.png", "AutoZone-Logo.png", "ElementBar.png"
  ];

  FORGE.preloadImages(images, true, function() {

    /* Create elements
    ================================================= */
    var Fr1 = FORGE.createElement({backgroundImage: "Fr1-bg.jpg", width: 320, height: 480, parent: banner});
    var txt1 = FORGE.createElement({ width: 320, height: 480, parent: banner});

    var txt1_1 = FORGE.createElement({backgroundImage: "txt1-1.png", width: 320, height: 480, parent: txt1});
    var txt1_2 = FORGE.createElement({backgroundImage: "txt1-2.png", width: 320, height: 480, parent: txt1});
    var txt1_3 = FORGE.createElement({backgroundImage: "txt1-3.png", width: 320, height: 480, parent: txt1});
    var txt1_4 = FORGE.createElement({backgroundImage: "txt1-4.png", width: 320, height: 480, parent: txt1});

    var Fr2 = FORGE.imageCache["Fr2-bg.jpg"];

    var canvas = FORGE.createElement({type: "canvas", width: 320, height: 480, parent: banner});

    var Wiper = FORGE.createElement({backgroundImage: "Wiper.png", width: 300, height: 650, left: 0, top: -80, parent: banner});




    var Fr6 = FORGE.createElement({backgroundImage: "Fr6-bg.jpg", width: 320, height: 480, parent: banner});
    var txt4 = FORGE.createElement({backgroundImage: "txt4.png", width: 320, height: 480, parent: Fr6});
    var AutoZoneLogo = FORGE.createElement({backgroundImage: "AutoZone-Logo.png", width: 320, height: 480, parent: Fr6});
    var elementBar = FORGE.createElement({backgroundImage: "ElementBar.png", width: 320, height: 480, parent: Fr6});

    var CTA = FORGE.createElement({backgroundImage: "CTA.png", left: 31, top: 382, width: 96, height: 29, retina: true, parent: Fr6});
    var contCTA = FORGE.createElement({width: 320, height: 480, parent: banner});
    var BoshLogo = FORGE.createElement({backgroundImage: "BoshLogo.png", width: 320, height: 480, parent: contCTA});

   // var txt3 = FORGE.imageCache["txt3.png"];

   // var txt3 = FORGE.createElement({backgroundImage: "txt3.png", width: 300, height: 480, parent: banner});

    /* Create additional elements
    ============================================ */
   // var imageWipeMask = createImageWipeMask();
    var border = FORGE.createElement({border: "solid 1px #000", boxSizing: "border-box", width: width, height: height, parent: banner});

    /* Animations
    ============================================ */

    Wiper.set({transformOrigin:'150px 606px 0px'});




    function slideText(obj) {
      return new FORGE.Timeline()
      .from(obj, 1, {opacity: 0, x: 30, ease: Power3.easeOut});
    }





    canvas.in = new FORGE.Timeline()
      .from(canvas, 0.3, {opacity: 0, ease: Power3.easeOut, delay: 0.2})
    ;

    Wiper.in = new FORGE.Timeline()
      .fromTo(Wiper, 3.4, {rotation: -95, x: 0, ease: Power0.easeNone}, {rotation: 105, x: 0})
    ;


    function fadeBg(obj) {
      return new FORGE.Timeline()
        .from(obj, 1, {opacity: 0, ease: Power3.easeOut})
    }


    Fr6.in = new FORGE.Timeline()
      .from(Fr6, 1, {x: -320, ease: Power3.easeOut})
    ;

    CTA.in = new FORGE.Timeline()
      .from(CTA, 1, {opacity: 0, ease: Power3.easeOut})
    ;

    contCTA.in = new FORGE.Timeline()
      .from(contCTA, 1, {x: 320, ease: Power3.easeOut})
    ;    

    /* Timeline
    ============================================ */
    var main_tl = new FORGE.Timeline()
      .offset(0.25)

      .add(slideText(txt1_1))
      .offset(0.2)
      .add(slideText(txt1_2))
      .offset(0.2)
      .add(slideText(txt1_3))
      .offset(0.2)
      .add(slideText(txt1_4))
      .offset(2)

      .add(createImageWipeMask)
      .add(canvas.in)
      .offset(0.02)

      .add(Wiper.in)
      .offset(4)

      .add(Fr6.in)
      .offset(0.5)
      .add(contCTA.in)
      .offset(0.2)
      .add(CTA.in)

     /* .add(elementBar.in)
      .offset(0)*/


    /* Helpers
    ============================================ */
    function createImageWipeMask() {
      var ctx = canvas.getContext("2d");
      var cx = 150;
      var cy = 480;
      var radius = 405;

      canvas.startAngle = 1 * Math.PI;
      canvas.endAngle = 1.57 * Math.PI;
      
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
        .from(canvas, 1, {endAngle: 1 * Math.PI, ease: Power0.easeNone})
        .chain()
        .to(canvas, 1, {endAngle: 2.1 * Math.PI, ease: Power0.easeNone})
        .chain()
        .add(function() { canvas.stop(); });

      return canvas;
    }




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
