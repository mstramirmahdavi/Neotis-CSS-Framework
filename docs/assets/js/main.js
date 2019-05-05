if (navigator.serviceWorker) {
    
  // Register SW
  navigator.serviceWorker.register('./sw.js').catch(console.error);
  
  // Giphy cache clean
  function giphyCacheClean(giphys) {

      // Get service worker registration
      navigator.serviceWorker.getRegistration().then(function(reg){

          // Only post message to active SW
          if( reg.active ) reg.active.postMessage({ action: 'cleanGiphyCache', giphys:giphys });
      });
  }
}