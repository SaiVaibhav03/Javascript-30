const  allInputs = document.querySelectorAll('input');

function uiUpdate(){
    const suffix = this.dataset.sizing || ''; 
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`)

}

allInputs.forEach( (elements) => {
    elements.addEventListener('change', uiUpdate);
});