//The user clicks the next button and views the next image
//The user clicks the back button and views the previous image
//The image are reset or ongoing so that the carousel does not end ( it only resets)

let rotation = 0;

let imgs = ['img/vegan1.jpeg', 'img/vegan2.jpeg', 'img/vegan3.jpeg', 'img/vegan9.jpeg', 'img/vegan5.jpeg', 'img/vegan6.jpeg', 'img/vegan7.jpeg', 'img/vegan8.jpeg', 'img/vegan10.jpeg', 'img/vegan11.jpeg']
//burger, cookies, frenchfries, hotdog, macaroni, pancake, salmon, spaghetti

function swap(){
  $('section.vegan img').attr('src', imgs[rotation])
}

$("#vegannext").on('click', function(){
  rotation += 1;
 if (rotation >= imgs.length) {
   rotation = imgs.length
 }
 swap()
})

$("#veganback").on('click', function(){
  rotation -= 1;
  if (rotation <= 0) {
  rotation = 0
  }
  swap()
})
