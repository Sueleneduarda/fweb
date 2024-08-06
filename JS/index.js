var banner=["./img/ANN.png","./img/anne.png"];

var bannerAtual=0;
function trocaBanner(){
    bannerAtual=(bannerAtual+1)%2;
    document.querySelector('.destaque img').src=banner[bannerAtual];

}

setInterval(trocaBanner,3000);

const audioP=document.querySelector('#audioplay');

 const inputRange=document.querySelector('#input-range');

 const ButtonPlay=document.querySelector('#Play');

 inputRange.addEventListener("input",()=> { audioP.volume=inputRange.value;});

 ButtonPlay.addEventListener("click",()=>{
    audioP.play();
 });