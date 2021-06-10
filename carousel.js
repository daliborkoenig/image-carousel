import '@fortawesome/fontawesome-free/css/all.css'
import './style.scss'
import imagesFolder from './images/*.jpg';
import anime from 'animejs/lib/anime.es.js';


// automatic image database creation dependant on the number selected
// images must be in "images" folder and must be numbered as "image-1, image-2"
// vanilla js
const images = []
class Image{
  constructor(imgSrc, imgName){
    this.src = imgSrc;
    this.name = imgName
  }
  addImage(){
    images.push({imgSrc: this.src, imgName: this.name})
  }
}
// choose how many images to add to database
let numOfImages = 10 
for (let i = 1; i <= numOfImages ; i++) {
  let image = new Image(`./images/image-${i}.jpg`,`image-${i}`)
  image.addImage()
}
const dots = document.querySelector("#dots")
for (let i = 0; i < Object.keys(imagesFolder).length; i++) {
  const dot = document.createElement("i")
  dot.className = "fas fa-dot-circle"
  dots.appendChild(dot)
}

const dotsAll = dots.querySelectorAll("i")
dotsAll[0].style.color = "rgba(255,255,255,0.8)"


let image = 1
left.onclick = function() {
  const leftImg = document.querySelector(".leftImg")
  const centerImg = document.querySelector(".centerImg")
  const rightImg = document.querySelector(".rightImg")
  if(centerImg.src.includes("image-1") && !centerImg.src.includes("image-10")){
    anime({
      targets: ".img",
      translateX: 20,
      duration: 200,
      direction: "alternate",
      easing: 'easeInOutSine'
    })
  }
  else if(centerImg.src.includes("image-10")){
    anime({
      targets: ".img",
      translateX: 800,
      duration: 2000,
      easing: 'easeInOutSine',
      complete: function(anim) {
        leftImg.src = imagesFolder[`image-${image-2}`]
        leftImg.className = "leftImg img"
        centerImg.src = imagesFolder[`image-${image-1}`]
        centerImg.className = "centerImg img"
        rightImg.src = imagesFolder[`image-${image}`]
        rightImg.className = "rightImg img"
        image -=1
        dotsAll[image].style.color = "rgba(255,255,255,0.4)"
        dotsAll[image-1].style.color = "rgba(255,255,255,0.8)"
        anime({
          targets: ".img",
          translateX: 0,
          duration: 0,
        });      }
    });
  }
  else{
    anime({
      targets: ".img",
      translateX: 800,
      duration: 2000,
      easing: 'easeInOutSine',
      complete: function(anim) {
        leftImg.src = imagesFolder[`image-${image-2}`]
        leftImg.className = "leftImg img"
        centerImg.src = imagesFolder[`image-${image-1}`]
        centerImg.className = "centerImg img"
        rightImg.src = imagesFolder[`image-${image}`]
        rightImg.className = "rightImg img"
        image -=1
        dotsAll[image].style.color = "rgba(255,255,255,0.4)"
        dotsAll[image-1].style.color = "rgba(255,255,255,0.8)"
        anime({
          targets: ".img",
          translateX: 0,
          duration: 0,
        });      
      }
    });
  }
};

right.onclick = ()=> {
  const leftImg = document.querySelector(".leftImg")
  const centerImg = document.querySelector(".centerImg")
  const rightImg = document.querySelector(".rightImg")
  if(centerImg.src.includes("image-10")){
    anime({
      targets: ".img",
      translateX: -20,
      duration: 200,
      direction: "alternate",
      easing: 'easeInOutSine'
    });
  }
  else if(centerImg.src.includes("image-1")){
    anime({
      targets: ".img",
      translateX: -800,
      duration: 2000,
      easing: 'easeInOutSine',
      complete: function(anim) {
        leftImg.src = imagesFolder[`image-${image}`]
        leftImg.className = "leftImg img"
        centerImg.src = imagesFolder[`image-${image+1}`]
        centerImg.className = "centerImg img"
        rightImg.src = imagesFolder[`image-${image+2}`]
        rightImg.className = "rightImg img"
        dotsAll[image-1].style.color = "rgba(255,255,255,0.4)"
        dotsAll[image].style.color = "rgba(255,255,255,0.8)"
        image +=1
        anime({
          targets: ".img",
          translateX: 0,
          duration: 0,
        });      }
    });
  }
  else{
    anime({
      targets: ".img",
      translateX: -800,
      duration: 2000,
      easing: 'easeInOutSine',
      complete: function(anim) {
        leftImg.src = imagesFolder[`image-${image}`]
        leftImg.className = "leftImg img"
        centerImg.src = imagesFolder[`image-${image+1}`]
        centerImg.className = "centerImg img"
        rightImg.src = imagesFolder[`image-${image+2}`]
        rightImg.className = "rightImg img"
        dotsAll[image-1].style.color = "rgba(255,255,255,0.4)"
        dotsAll[image].style.color = "rgba(255,255,255,0.8)"
        image +=1
        anime({
          targets: ".img",
          translateX: 0,
          duration: 0,
        });      
      }
    });
  }
}


