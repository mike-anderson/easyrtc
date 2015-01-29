(function (factory) {
  if (typeof define === 'function' && define.amd) {
    //RequireJS (AMD) build system
    define(['socket.io'], factory);
  } else if (typeof exports === 'object' && exports) {
    //CommonJS build system
    var io = require('socket.io');
    module.exports = factory(io);
  } else {
    //Vanilla JS, ensure dependencies are loaded correctly
    if (typeof window.io !== 'object' || !window.io) {
    	throw new Error("EasyRTC requires socket.io \n"
                        + "http://easyrtc.com/docs/guides/easyrtc_client_tutorial.php");
    }
    window.easyrtc = factory(window.io);
  }
})(function(io, undefined) {
  
/*{{ CONTENT }}*/
  
return new Easyrtc();
});