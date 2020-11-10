var _loadedImages=0,tt,tt2, tt_2,video,endcard = false,
    _imageArray=[
    'logos.png',
    'replay.png'
];

this.addEventListener('DOMContentLoaded',function(){
        for (var i = 0; i < _imageArray.length; i++) {
        var _tempImage = new Image();
        _tempImage.addEventListener('load',function(){
            _loadedImages++;             
            if(_loadedImages == _imageArray.length) loadCss();
        });
        _tempImage.src = 'img/'+_imageArray[i];
    }
});


function loadCss(){
    var css = document.createElement('link');
    css.setAttribute('rel','stylesheet');
    css.setAttribute('type','text/css');
    css.setAttribute('href',Enabler.getUrl('css/style.css'));
    document.getElementsByTagName('head')[0].appendChild(css);
    css.onload = loadGsap;
}

function loadGsap(){
    var js = document.createElement('script');
    js.setAttribute('type','text/javascript');
    js.setAttribute('src',"https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TweenMax.min.js");
    document.getElementsByTagName('head')[0].appendChild(js);
    js.onload = init;
}


function init(){

    creatingEndCard();

    TweenMax.fromTo('#cta',1, {opacity: 0}, {opacity:1, delay: 5});


    tt = new TimelineMax();

      tt

     // .from("#monja-container", 2, {ease:Power2.easeInOut, scale: 1.1, transformOrigin:"50% 50%"}, 0)
      .to("#soga", 1.8, {ease:Power1.easeInOut, rotation: -3, repeat: 4, yoyo: true}, 0)
      .to("#arm", 1.8, {ease:Power1.easeInOut, rotation: 3, scaleY: 0.95, repeat: 4, yoyo: true}, 0)
      .to("#cruz", 1.5, {ease:Power1.easeInOut, rotation: 4, repeat: 4, yoyo: true}, 0)
      .to("#habit", 1.5, {ease:Power1.easeInOut, rotation: -2, scaleY: 1.05, repeat: 3, yoyo: true}, 0)

      .fromTo("#clouds", 8, {x: -200}, {ease:Power0.none, rotation: -15, y: -100, x: 0}, 0)
      .to("#fogint2", 8, {ease:Power1.easeInOut, y: -150}, 0.4)
      .to("#fogint", 8, {ease:Power1.easeInOut, y: -150},0)
      .fromTo("#dust img", 8, {y: 100, x: 0}, {ease:Linear.easeNone, y: 0, x: -315},0)

      .to("#woman", 3, {ease:Power1.easeInOut, scale: 1.01, repeat: 2, yoyo: true, onComplete:()=>{
        document.getElementById('btn-exit').addEventListener('mouseover',timelineOver);
        document.getElementById('btn-exit').addEventListener('mouseout',timelineOut);
        document.addEventListener('mouseover',timelineOver);
        document.addEventListener('mouseout',timelineOut);
    }
},0)


function timelineOver(e){
    console.log('over')
    
    tt.reverse();
    document.getElementById('btn-exit').addEventListener('mouseover',timelineOver);
}


function timelineOut(e){
    console.log('out')
    
    tt.play();
    document.getElementById('btn-exit').addEventListener('mouseout',timelineOut);
}


    video = document.getElementById('video'); 

    video.addEventListener("timeupdate",update);

    document.getElementById('sound-on').addEventListener('click',function(e){
        video.muted = true;
        e.target.style.display='none';
        document.getElementById('sound-off').style.display='block'
        Enabler.counter('WDTV24817906 : Video 1 Mute Ctr');
    });

    document.getElementById('sound-off').addEventListener('click',function(e){
        video.muted = false;
        e.target.style.display='none';
        document.getElementById('sound-on').style.display='block';
        Enabler.counter('WDTV24817906 : Video 1 Unmute Ctr');
    });

    document.getElementById('play-btn').addEventListener('click',playVideo);
    document.getElementById('btn-exit').addEventListener('click',function(){
        if(!video.paused){
            video.pause();
            showingEndcard();
            document.getElementById('replay-btn').style.display='block';
            Enabler.exit('WDTV24817906 : Name Exit');

        }else{
            Enabler.exit('WDTV24817906 : Name Exit');
        }
        
    });
    document.getElementById('replay-btn').addEventListener('click', function(e){
        Enabler.counter('WDTV24817906 : Video 1 Replay Ctr');
        playVideo(e);
    });

    document.getElementById('replay-btn').addEventListener('mouseover',spinReplay);

    function spinReplay(e){
        TweenMax.to(this,1,{rotation:360,onComplete:function(){
            document.getElementById('replay-btn').addEventListener('mouseover',spinReplay);
        }})
        TweenMax.set(this,{rotation:0,delay:3})
        e.target.removeEventListener('mouseover',spinReplay)
    }

    video.addEventListener('ended',function(){
        document.getElementById('replay-btn').style.display='block';
        Enabler.counter('WDTV24817906 : Engaged Video View Complete Ctr');


    });



    TweenMax.to('#fog', 1, {opacity: 0, delay: 14})

    tt2 = new TimelineMax();

    tt2
      //  .staggerTo('.monja',.4,{opacity:1},.2)
    ;
    tt2.seek(0);
    tt2.pause();
}

function initEvent(){
    document.getElementById('btn-exit').addEventListener('mouseover',over);
    document.getElementById('play-btn').addEventListener('mouseover',over);
    console.log('initEvent')
}

initEvent();

function update(){
    if(this.currentTime > 14.7 && endcard==false){
        showingEndcard();
    }
}

function showingEndcard(){
    endcard=true;
    document.getElementById('card').style.display='block';
    document.getElementById('sound-off').style.display='none';
    document.getElementById('sound-on').style.display='none';
    //TweenMax.set('.monja',{opacity:0});
    TweenMax.to('#card',1,{opacity:1});
    TweenMax.to('#fog',.5,{opacity:0.8});
    TweenMax.to('#fog',2,{opacity:0, delay: 0});
    TweenMax.to('#logos-end_1',1,{opacity:1});
    TweenMax.to("#blur1 feGaussianBlur",1,{attr:{stdDeviation:"0 0"}, delay: 0});

    TweenMax.to('#logos-end_2',1,{opacity:1, delay: 0});
    TweenMax.to("#blur2 feGaussianBlur",1,{attr:{stdDeviation:"0 0"}, delay:0});

    TweenMax.to('#logos-end_3',1,{opacity:1, delay: 0});
    TweenMax.to("#blur3 feGaussianBlur",1,{attr:{stdDeviation:"0 0"}, delay: 0});

    TweenMax.to('#logos-end_4',1,{opacity:1, delay: 0});
    TweenMax.to("#blur4 feGaussianBlur",1,{attr:{stdDeviation:"0 0"}, delay: 0});
    TweenMax.fromTo('#cta',1, {opacity: 0}, {opacity:1, delay: 5});

    tt2.reverse();
    setTimeout( function(){
        tt2.play();
    }, 2500);
    setTimeout( function(){
        tt2.reverse();
    }, 5000);
    setTimeout( function(){
        tt2.play();
    }, 7500);

tt.restart();
  //  TweenMax.to('#cta',.01,{opacity:0});


}

function over(e){
    console.log('over')
    tt2.play();
    setTimeout(()=>{
            tt2.reverse();
    },6800)
    e.target.addEventListener('mouseover',over);

          TweenMax.to("#cta img", 0.3, {ease:Power0.none, scale: 1.05, repeat: 1, yoyo: true})

}



function playVideo(e){
    video.play();
    video.muted = false;
    endcard = false;
    TweenMax.to('#card',.5,{opacity:0});
    document.getElementById('card').style.display='none';
    document.getElementById('logos').style.display='none';
    TweenMax.to('.logos-end',.5,{opacity:0})
    document.getElementById('replay-btn').style.display='none';
    TweenMax.to('#fog',.1,{opacity:0});
    TweenMax.to('#logos-end_1',.1,{opacity:0});
    TweenMax.to("#blur1 feGaussianBlur",.1,{attr:{stdDeviation:"5 5"}});
    TweenMax.to('#logos-end_2',.1,{opacity:0});
    TweenMax.to("#blur2 feGaussianBlur",.1,{attr:{stdDeviation:"5 5"}});
    TweenMax.to('#logos-end_3',.1,{opacity:0});
    TweenMax.to("#blur3 feGaussianBlur",.1,{attr:{stdDeviation:"5 5"}});
    TweenMax.to('#logos-end_4',.1,{opacity:0});
    TweenMax.to("#blur4 feGaussianBlur",.1,{attr:{stdDeviation:"5 5"}});
  //  TweenMax.fromTo('#cta',1, {opacity: 0}, {opacity:1, delay: 5});

    



    document.getElementById('btn-exit').style.display='block';
    document.getElementById('sound-on').style.display='block';
    e.target.style.display='none';
    video.addEventListener("timeupdate",update);

    Enabler.counter('WDTV24817906 : Video 1 Start Ctr');
};

function creatingEndCard(){
   /* for(var i=1;i<23;i++){
        var monja = document.createElement('div');
            monja.className = 'monja';
            monja.style.background = 'url(img/sequence/monja'+i+'.jpg) no-repeat';
            monja.style.backgroundSize = 'contain';
        document.querySelector('#monja-container').appendChild(monja);
    }

    */
}

