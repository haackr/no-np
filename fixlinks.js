function fixNpLinks(){
  var links = document.getElementsByTagName("a");
  Array.prototype.forEach.call(links, function(el){
    el.href = el.href.replace("np.","www.");
  });
}

function ready(fixNpLinks) {
  if (document.readyState != 'loading'){
    fixNpLinks();
  } else {
    document.addEventListener('DOMContentLoaded', fixNpLinks);
  }
}

ready(fixNpLinks);
