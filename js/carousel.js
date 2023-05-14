$('.camment_videos').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1600,
  speed:500,
  
prevArrow: ' <div class=" news_btn slider_btn slider_prev "><img class="news_indicator" src="./images/prev.svg" alt="" width="16"></div>',
nextArrow: '<div class=" news_btn slider_btn slider_next "><img class="news_indicator" src="./images/next.svg" alt="" width="16" ></div>',
responsive: [

{
  breakpoint: 1024,
  settings: {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
  arrows:true,
  }
},

{
  breakpoint: 768,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:true,
  }
},
{
    breakpoint: 524,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:true,
    }
  }

]
});

const allVideos =document.querySelector(".camment_videos") 
const video1 =document.querySelector(".video1")
const video2 =document.querySelector(".video2")
const video3 =document.querySelector(".video3")
const video4 =document.querySelector(".video4")

console.log("video1",video1);
console.log("video2",video2);
console.log("video3",video3);
console.log("video4",video4);

allVideos.addEventListener("click" ,(evt)=>{
evt.preventDefault()
if(evt.target.matches(".video_area1")){
document.querySelector(".play1").classList.add("video_play")
document.querySelector(".play1").classList.remove("reviews__item-icon--pause")
document.querySelector(".video_area1").style.display="none"
video1.play()
console.log("1" ,document.querySelector(".play1"));

}else{
document.querySelector(".play1").classList.remove("video_play")
document.querySelector(".play1").classList.add("reviews__item-icon--pause")
video1.pause()
document.querySelector(".video_area1").style.display="block"
}
if(evt.target.matches(".video_area2")){

document.querySelector(".play2").classList.add("video_play")
document.querySelector(".play2").classList.remove("reviews__item-icon--pause")
document.querySelector(".video_area2").style.display="none"
video2.play()
}else{
document.querySelector(".play2").classList.remove("video_play")
document.querySelector(".play2").classList.add("reviews__item-icon--pause")
document.querySelector(".video_area2").style.display="block"
video2.pause()
}
if(evt.target.matches(".video_area3")){
document.querySelector(".play3").classList.add("video_play")
document.querySelector(".play3").classList.remove("reviews__item-icon--pause")
document.querySelector(".video_area3").style.display="none"
video3.play()

}else{
document.querySelector(".play3").classList.remove("video_play")
document.querySelector(".play3").classList.add("reviews__item-icon--pause")
document.querySelector(".video_area3").style.display="block"
video3.pause()
}
if(evt.target.matches(".video_area4")){
document.querySelector(".play4").classList.add("video_play")
document.querySelector(".play4").classList.remove("reviews__item-icon--pause")
document.querySelector(".video_area4").style.display="none"
video4.play()
}else{
document.querySelector(".play4").classList.remove("video_play")
document.querySelector(".play4").classList.add("reviews__item-icon--pause")
document.querySelector(".video_area4").style.display="block"
video4.pause()
}




})