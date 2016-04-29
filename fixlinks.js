var observer = new MutationObserver(function () {
  fixNpLinks()
})

var observerConfig = { attributes: true, childList: true, characterData: true }

function fixNpLinks () {
  var links = document.getElementsByTagName('a')
  Array.prototype.forEach.call(links, function (el) {
    if (el.href.match(/(www\.)?np\./i)) {
      el.href = el.href.replace(/(www\.)?np\./i, 'www.')
    }
  })
}

function ready () {
  if (document.readyState !== 'loading') {
    fixNpLinks()
    observer.observe(document.body.querySelector('#siteTable'), observerConfig)
  } else {
    document.addEventListener('DOMContentLoaded', function load () {
      document.removeEventListener('DOMContentLoaded', load)
      fixNpLinks()
      observer.observe(document.body.querySelector('#siteTable'), observerConfig)
    })
  }
}

// On firefox, remove the observer when the addon is removed or disabled.
if (typeof (self.port) !== 'undefined') {
  self.port.on('detach', function () {
    observer.disconnect()
  })
}

ready()
