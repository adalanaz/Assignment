//------------------------------------------------------------------------------------------------------

// -
//   Modal
// -
function showModal() {
  var modal = document.querySelector(".modal").closest('ons-modal');
  modal.show();
}
//------------------------------------------------------------------------------------------------------

// -
// Close Model function
// -
function closeModel() {
  var modal = document.querySelector('ons-modal');
  modal.hide();
}
//------------------------------------------------------------------------------------------------------

// -
//   Modal
// -
function showCommentModel() {
  var modal = document.querySelector('#comment');
  modal.show();
}
//------------------------------------------------------------------------------------------------------
// -
// Comment function
// -
function comment() {
  var modal = document.querySelector('#comment');
  modal.hide();
}
//------------------------------------------------------------------------------------------------------

// -
// Close Model function
// -
function closeCommentModel() {
  var modal = document.querySelector('#comment');
  modal.hide();
}
//------------------------------------------------------------------------------------------------------

// -
//   Profile Model
// -
function showProfilePage() {
  var modal = document.querySelector('#profile');
  modal.show();
}
//------------------------------------------------------------------------------------------------------


function testClick() {
  console.log('click working');
}


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

   if (page.id === 'page3') {
     page.querySelector('#push-button').onclick = function() {
       document.querySelector('#myNavigator').pushPage('profile.html', {data: {title: 'Profile'}});
     };
   } else if (page.id === 'page4') {
     page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
   }

 });
