(function (factory) {
  if (typeof define === 'function' && define.amd) {
    //RequireJS (AMD) build system
    define(['./easyrtc'], factory);
  } else if (typeof exports === 'object' && exports) {
    //CommonJS build system
    var easyrtc = require('./easyrtc');
    module.exports = factory(easyrtc);
  } else {
    //Vanilla JS, ensure dependencies are loaded correctly
    if (typeof window.easyrtc !== 'object' || !window.io) {
    	throw new Error("EasyRTC File Transfer requires EasyRTC \n"
                        + "http://easyrtc.com/docs/guides/easyrtc_client_tutorial.php");
    }
    window.easyrtc_ft = factory(window.easyrtc);
  }
})(function(easyrtc, undefined) {
  
/*{{ CONTENT }}*/
  
return easyrtc_ft;
});