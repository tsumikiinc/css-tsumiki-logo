(function($){
  var $el = $('#div');
  var $i = $('#i');
  var anime = function() {
    $el.velocity({
      top: '+=30',
      left: '+=30'
    }, {
      /* Velocity's default options: */
      duration: 1000,
      easing: 'easeInOutElastic',
      queue: '',
      begin: function(elements) { console.log(elements[0]); },
      progress: function(elements, percentComplete, timeRemaining, timeStart) {
        console.log( (percentComplete * 100) + '%' );
        console.log( timeRemaining + 'ms remaining!' );
      },
      complete: function(e){console.log(e);t();},
      loop: 1,
      delay: 500,
      display: false,
      mobileHA: true
    });

  };
// $.Velocity.Sequences.tete = function (element, options) {
//     var duration = options.duration || 750;
//     $.Velocity.animate(element,
//         { 
//             translateY: "-=10px",
//         }, { 
//             // Delay is relative to user-adjustable duration.
//             delay: duration * 0.033,
//             duration: duration,
//             loop: 3,
//             easing: "easeInOutSine"
//         });
// };
// $i.velocity("tete", { duration: 450 });
  $i
    .velocity({
      opacity: function() { return Math.random() },
      translateZ: 0,
      translateX: "+=200",
      rotateZ: "+=45"
    }, 1000);
    // .velocity({ width: 100 }, 1000);
   // Called immediately after. 
  // $i.velocity("stop", true);

var t = function() {
  $el.velocity('scroll', {
    duration: 3000,
    delay: 1000,
    easing: "spring"
  });
}
    // .function call">velocity({ opacity: 1 });

    var janime = function() {
      $el.animate({
        top: '+=30',
        left: '+=30'
      }, 1000)
      .animate({
      width: '+=300'
      }, 1000)
    };


  //Single object
  // $div.velocity({
  //   properties: { opacity: 1 },
  //   options: { duration: 500 }
  // });

  $('#startBtn').on('click', function(e) {
    anime();
  });
  $('#stopBtn').on('click', function(e) {
    janime();
  });
})(jQuery);