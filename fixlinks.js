var observer = new MutationObserver(function () {
  fixNpLinks();
})

var observerConfig = { attributes: true, childList: true, characterData: true, subtree: true, attributeFilter: ['href'] }

function fixNpLinks () {
  var links = document.getElementsByTagName('a');
  Array.prototype.forEach.call(links, function (el) {
    if (el.href.match(/(www\.)?np\./i)) {
      el.href = el.href.replace(/(www\.)?np\./i, 'www.');
    }
  })
}

function ready () {
  if (document.readyState !== 'loading') {
    fixNpLinks();
    observer.observe(document.body, observerConfig);
  } else {
    document.addEventListener('DOMContentLoaded', function load () {
      document.removeEventListener('DOMContentLoaded', load);
      fixNpLinks();
      observer.observe(document.body, observerConfig);
    })
  }
}

// On firefox, remove the observer when the addon is removed or disabled.
if (typeof (self.port) !== 'undefined') {
  self.port.on('detach', function () {
    observer.disconnect();
  })
}

ready();
