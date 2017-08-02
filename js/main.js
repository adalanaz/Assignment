ons.platform.select('android');

// -
//   Modal
// -
function showModal() {
  var modal = document.querySelector('ons-modal');
  modal.show();
}
//------------------------------------------------------------------------------------------------------

// Comment function
function comment() {
  var modal = document.querySelector('ons-modal');
  modal.hide();
}

//------------------------------------------------------------------------------------------------------

// Close Model function
function closeModel() {
  var modal = document.querySelector('ons-modal');
  modal.hide();
}

//------------------------------------------------------------------------------------------------------


// -
// Page One Event Listeners
// -
document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'page1') {
      page.querySelector('#push-button').onclick = function() {
      document.querySelector('#myNavigator').pushPage('posts.html', {data: {title: 'Posts'}});
    };
  }

  if (page.id === 'page2') {
    page.querySelector('#push-button').onclick = function() {
      document.querySelector('#myNavigator').pushPage('content.html', {data: {title: 'Content'}});
    };
  } else if (page.id === 'page3') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});
//------------------------------------------------------------------------------------------------------

window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};
