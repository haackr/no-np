var self = require('sdk/self');
var pageMod = require('sdk/page-mod')

pageMod.PageMod({
  include: [
    "*.reddit.com"
  ],
  contentScriptFile: [
    self.data.url("../jquery-2.1.4.min.js"),
    self.data.url("../fixlinks.js")
  ],
  contentScriptWhen: "start"
});
