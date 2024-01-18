
function setDate(){
    const secondHand = document.querySelector('.sec-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
    const currentDate = new Date();
    
    const seconds = currentDate.getSeconds();
    const secondsDegree = ((seconds / 60) * 360 ) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    const mintues = currentDate.getMinutes();
    const mintuesDegree = ((mintues / 60) * 360 ) + 90; 
    minuteHand.style.transform = `rotate(${mintuesDegree}deg)`;

    const hours = currentDate.getHours();
    const hoursDegree = ((hours/12) * 360 ) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}
setInterval(setDate,1000)