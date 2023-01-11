const slide = document.getElementById("slide");
const msgbox = document.getElementById("mb");
const msg = document.getElementById("msg");
const bar = document.querySelector(".progress-bar");

const images = [
"img/img1.jpg",
"img/img2.jpg",
"img/img3.jpg",
"img/img4.jpg",
"img/img5.jpg",
"img/img6.jpg"];

var aktuellerIndex = 0;

var actualSlide = 1;
var allSlides = images.length;
updateBar();

document.addEventListener("keydown", keyDown);
showSlide(aktuellerIndex);
msgbox.classList.remove("active");

function switchSlideNumber(count){
    const neuerIndex = aktuellerIndex + count;
    showSlide(neuerIndex);
}

function showSlide(neuerIndex){
    slideImage = document.getElementById("image");

    if(neuerIndex > images.length -1){
        msg.innerText = "Die Slideshow ist beendet.";
        msgbox.classList.add("active");
        showSlide(0);
    }else if(neuerIndex < 0){
        msg.innerText = "Dies ist die erste Folie.";
        msgbox.classList.add("active");
        showSlide(0);
    }else{
        slideImage.src = images[neuerIndex];
        slide.classList.add("active");
        aktuellerIndex = neuerIndex;
    }
    actualSlide = aktuellerIndex + 1;
    updateBar();

}
function removeMsgBox(){
    msgbox.classList.remove("active");
}
function toggleFullScreen(){
    var doc = window.document;
    var docEl = slide;
    var requestFullscreen = docEl.requestFullscreen;
    requestFullscreen.call(docEl);
}
function keyDown(e){
    if(e.keyCode == 37){
        switchSlideNumber(-1);
    }
    if(e.keyCode == 39){
        switchSlideNumber(1);
    }
}
function updateBar(){
    bar.style.width = `${(actualSlide / allSlides) *100}%`;
}
function extras(n_type){
    if(n_type == 1){
        window.location.href = "mailto:benni09.kra@outlook.de";
    }
    else if(n_type == 2){
        window.location.href = "C:/Users/user/Documents/Beni/Java/slideshow/img";
    }

}



