//------------------------------------------------------------------------------------------------------

// -
//   Modal
// -
function model() {
  var modal = document.querySelector('ons-modal');
  modal.toggle();
}
//------------------------------------------------------------------------------------------------------

// -
// Comment function
// -
function comment() {
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
