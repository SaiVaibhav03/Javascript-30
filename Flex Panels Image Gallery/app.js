const allPanels = document.querySelectorAll('.panel');
function opentoggle(){
    this.classList.toggle('open');
    // this.classList.toggle('open-active');
}
function activetoggle(e){
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}
allPanels.forEach( eachPanel => {
    eachPanel.addEventListener('click',opentoggle);
    eachPanel.addEventListener('transitionend', activetoggle);
});


