// save the texts in an array for re-use
// $(document).ready(function() {
// var cnt=0, texts=[];
// $(".textContent").each(function() {
//   texts[cnt++]=$(this).text();
// });
// function slide() {
//   if (cnt>=texts.length) cnt=0;
//   $('#textMessage').html(texts[cnt++]);
//   $('#textMessage')
//     .fadeIn('slow').animate({
//       opacity: 1.0
//       }, 3000).fadeOut('slow',
//      function() {
//        return slide()
//      }
//   );
// }
// slide()
// console.log(slide());
// });

/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#ff330d',
    lineColor: '#3366cc'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);
