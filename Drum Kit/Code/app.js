function playsound(event){
    const audio =  document.querySelector(`audio[data-key="${event.keyCode}"]`)
    if(!audio){
      return;
    }
    audio.currentTime = 0;
    audio.play();
    const  outline = document.querySelector(`div[id="${event.keyCode}"]`)
    outline.classList.add('playing');
 //    setTimeout(()=>{
 //     outline.classList.remove('playing');
 //    },3500);
}

function removefunc(e){
    if(e.propertyName !== 'transform') return
    this.classList.remove('playing');
}

window.addEventListener('keydown', playsound);
const alloutline = document.querySelectorAll('.outline');
alloutline.forEach( element => element.addEventListener('transitionend', removefunc));
