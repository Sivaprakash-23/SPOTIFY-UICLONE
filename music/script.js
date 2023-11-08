window.addEventListener("DOMContentLoaded", function () {
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");
  
    // Set the default banner image and text
    banner.style.backgroundImage = "url(images/banner1.svg)";
    bannerImage.setAttribute("src", "images/tamilsong.jpeg");
    bannerHeading.textContent = "TAMIL-MELODIES";
    bannerText.textContent = "Keep your focus and enjoy the serenity";
  });
  
function playAll(songNumber){
    var audioElement= document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    var songFileName = "music/"+songNumber+".mp3";
    var currentRow= document.getElementById("song"+songNumber);
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");

    if(audioElement.getAttribute("src")==songFileName && !audioElement.paused){
        audioElement.pause();
        playBtn.innerHTML='<img src="images/play-button.svg">';
        
        banner.style.backgroundImage = "url(images/banner1.svg)";
        bannerImage.setAttribute("src", "images/tamilsong.jpeg");
        bannerHeading.textContent = "TAMIL-MELODIES";
        bannerText.textContent = "Keep your focus and enjoy the serenity";
    }
    else{
        audioElement.setAttribute("src",songFileName);
        audioElement.play();
        playBtn.innerHTML='<img src="images/pause-button.svg">';
       
        if (songNumber == 1) {
            banner.style.backgroundImage = "url(images/b01.png)";
            bannerImage.setAttribute("src", "images/adipenne.jpeg");
            bannerHeading.textContent = "Adi-penne cover song";
            bannerText.textContent = "By Stephen Zechariah ";
        } else if (songNumber === 2) {
            banner.style.backgroundImage = "url(images/b01.png)";
            bannerImage.setAttribute("src", "images/im2.jpeg");
            bannerHeading.textContent = "Karuppu-Perazhaga";
            bannerText.textContent = "By S.Thaman";
        }
        else if (songNumber === 3) {
            banner.style.backgroundImage = "url(images/b01.png)";
            bannerImage.setAttribute("src", "images/roja.jpeg");
            bannerHeading.textContent = "Roja Kadal";
            bannerText.textContent = "By Harris Jairaj";
        }
        else if (songNumber === 4) {
            banner.style.backgroundImage = "url(images/b01.png)";
            bannerImage.setAttribute("src", "images/kanja.jpeg");
            bannerHeading.textContent = "Kanja-Poovu-Kannala";
            bannerText.textContent = "By Yuvan Shankar Raja";
        }
        else if (songNumber === 5) {
            banner.style.backgroundImage = "url(images/b01.png)";
            bannerImage.setAttribute("src", "images/f.jpeg");
            bannerHeading.textContent = "Once Upon A Time";
            bannerText.textContent = "By Anirudh Ravichandran";
        }
        else if (songNumber === 6) {
            banner.style.backgroundImage = "url(images/b01.png)";
            bannerImage.setAttribute("src", "images/oru.jpeg");
            bannerHeading.textContent = "Oru Maalai)";
            bannerText.textContent = "By Harris Jairaj";
        }
        else if (songNumber === 7) {
            banner.style.backgroundImage = "url(images/b01.png)";
            bannerImage.setAttribute("src", "images/sat.jpeg");
            bannerHeading.textContent = "Satakli";
            bannerText.textContent = "By Sukhwinder Singh";
        }
        else if (songNumber === 8) {
            banner.style.backgroundImage = "url(images/b01.png)";
            bannerImage.setAttribute("src", "images/muga.jpeg");
            bannerHeading.textContent = "Fall in Love";
            bannerText.textContent = "By Krishna";
        }
        else if (songNumber === 9) {
            banner.style.backgroundImage = "url(images/b01.png)";
            bannerImage.setAttribute("src", "images/munbe-va.jpeg");
            bannerHeading.textContent = "Munbe-Va En-Va";
            bannerText.textContent = "By A.R.Rahman";
        }
        else if (songNumber === 10) {
            banner.style.backgroundImage = "url(images/b01.png)";
            bannerImage.setAttribute("src", "images/suttum.jpeg");
            bannerHeading.textContent = "Suttum-Vizhi";
            bannerText.textContent = "By Harris Jairaj";
        }
    }
}

function playaudio(){
    var audio=document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    if(audio.paused){
        audio.play();
        playBtn.innerHTML='<img src="images/pause-button.svg">';
    }
    else{
        audio.pause();
        playBtn.innerHTML='<img src="images/play-button.svg">';
    }
}