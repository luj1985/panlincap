(function($, flux) {

  flux.transitions.split = function(fluxslider, opts) {
    return new flux.transition(fluxslider, $.extend({
      barWidth: 60,
      setup: function() {
        
      },
      execute: function() {

      }
    }, opts));  
  }
})(jQuery, flux);