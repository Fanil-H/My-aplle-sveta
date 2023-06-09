$(document).ready(function(){
    $('.bxslider3').bxSlider({
      auto: true,
      stopAutoOnClick: true,
      pager:false,
      bxSliderWidth:1100      
    });
  });
  const goBtn = document.querySelector(".go");
goBtn.addEventListener("click",go)
function go(){
  if(window.pageYOffset > 0){
    window.scrollBy(0, -75);
    setTimeout(go, 0);
  }
}