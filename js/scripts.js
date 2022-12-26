// $(document).ready(function(){

//     $('.owl-carousel').owlCarousel({
//         loop:true,
//         margin:0,
//         autoplay:true,
//         nav: false,
//         dots:false,
//         navText: [ '', ' ' ],

//         responsive:{
//             0:{
//                 items:1
//             },
//             1030:{
//                 items:1
//             }
//         }
//     });

// });

$('.toggle').click(function(e) {
    e.preventDefault();

  let $this = $(this);

  if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
  } else {
      $this.parent().parent().find('.inner').removeClass('show');
      $this.parent().parent().find('.inner').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
  }
});

// Прозрачные буквы
// $(document).ready(function(){
//     var mouseX, mouseY;
//     var ww = $( window ).width();
//     var wh = $( window ).height();
//     var traX, traY;
//     $(document).mousemove(function(e){
//       mouseX = e.pageX;
//       mouseY = e.pageY;
//       traX = ((4 * mouseX) / 570) + 40;
//       traY = ((4 * mouseY) / 570) + 50;
//       console.log(traX);
//       $(".title").css({"background-position": traX + "%" + traY + "%"});
//     });
//   });

//?    search Letter

function searchDogs(){
    let input, filter, ul, li, a, i;
    input = document.getElementById('inputSearchDogs');
    filter = input.value.toUpperCase();
    ul = document.getElementById('letter');
    li = document.getElementsByTagName('li');

    for(i=0; i<li.length; i++){
        a =li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        }
        else{
            li[i].style.display = "none";
        }
    }
}