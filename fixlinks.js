$(document).ready(function(){
  $("a[href*='np.reddit.com']").each(function(){
    this.href = this.href.replace("np.","www.");
  });
});
