var self = require("sdk/self");
var pageMod = require("sdk/page-mod")

pageMod.PageMod({
  include: [
    "*.reddit.com"
  ],
  contentScriptFile: [
    self.data.url("../fixlinks.js")
  ],
  contentScriptWhen: "ready"
});
