var observer = new MutationObserver(function(){
  fixNpLinks();
});

var observerConfig = { attributes: true, childList: true, characterData: true};

function fixNpLinks(){
  //document.removeEventListener('DOMContentLoaded', fixNpLinks);
  var links = document.getElementsByTagName("a");
  Array.prototype.forEach.call(links, function(el){
    el.href = el.href.replace("np.","www.");
  });
}

function ready(fixNpLinks) {
  if (document.readyState != 'loading'){
    fixNpLinks();
    observer.observe(document.body.querySelector("#siteTable"), observerConfig);
  } else {
    document.addEventListener('DOMContentLoaded', function load(){
      document.removeEventListener('DOMContentLoaded', load);
      fixNpLinks();
      observer.observe(document.body.querySelector("#siteTable"), observerConfig);
    });
  }
}

ready(fixNpLinks);
