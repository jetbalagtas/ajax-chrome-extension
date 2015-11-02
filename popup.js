$(document).ready(function () {
  page.init();
  $('body').on('click', 'a', function(){
     chrome.tabs.create({url: $(this).attr('href')});
     return false;
   });
});

var page = {
  url: 'https://www.reddit.com/r/guns.json',
  init: function () {
    page.initStyling();
  },

  initStyling: function () {
    page.gunReddits();
  },

  gunReddits: function (event) {
  $.ajax({
    url: page.url,
    method: 'GET',
    success: function (gunRedditsArr) {
      gunRedditsArr.data.children.forEach(function (el) {
        $('.gun-reddits').append('<p><a href="' + el.data.url + '">' + el.data.title + '</a></p>');
      });
    }
  });
}
};
