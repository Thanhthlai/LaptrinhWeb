var images=document.querySelectorAll('#img img');
var prevButton= document.getElementById('PrevButton');
var nextButton=document.getElementById('NextButton');
var currentIndex=0;
function showImage(index){
    if(index<0){
        currentIndex=images.length -1;
    } else if(index >= images.lenght){
        currentIndex=0;
    }
    for(var i=0;i<images.length;i++){
        if(i=== currentIndex){
            images[i].computedStyleMap.display='block';
        }else{
            images[i].style.display='none';
        }
    }
}
function showPrevImage(){
    currentIndex --;
    showImage(currentIndex);
}
function showNextImage(){
    currentIndex ++;
    showImage(currentIndex);
}
prevButton.addEventListener('click',showPrevImage);
nextButton.addEventListener('click',showNextImage);

showImage(currentIndex);
