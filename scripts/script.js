const daysText = document.querySelector('#days');
const hoursText = document.querySelector('#hours');
const minutesText = document.querySelector("#minutes");
const secondsText = document.querySelector("#seconds");
const modalOverlay = document.querySelector('.modal-overlay');
const closeModal = document.querySelector('.close-modal');
const buttonSubscribe = document.querySelector("#btnSubscrible");
const buttonCancel = document.querySelector(".btn_cancelar");

const departureDate = new Date('31 Dec 2023');

setInterval(countDown, 1000);

function countDown(){
    const {days, hours, minutes, seconds} = processCountDown();
    renderCountdown({ days, hours, minutes, seconds })
}

function processCountDown(){
    const currentDate = new Date();

    let secondsTotal  = (departureDate - currentDate)/1000;
    let days = Math.floor((secondsTotal / 3600) /  24);
    let hours = Math.floor((secondsTotal / 3600) %  24);
    let minutes = Math.floor((secondsTotal / 60) % 60);
    let seconds = Math.floor(secondsTotal % 60);
 

    return { days, hours, minutes, seconds }
}

function format(value){
    return value < 10 ? `0${value}`: value;
}

function renderCountdown(data){
    const {days, hours, minutes, seconds} = data;
    daysText.textContent = `${format(days)}:`;
    hoursText.textContent = `${format(hours)}:`;
    minutesText.textContent = `${format(minutes)}:`;
    secondsText.textContent = `${format(seconds)}`;
}

closeModal.addEventListener("click", ()=>{
    modalOverlay.classList.toggle('active');
});

buttonSubscribe.addEventListener("click", ()=>{
    modalOverlay.classList.toggle('active');
});

buttonCancel.addEventListener("click",()=>{
    modalOverlay.classList.toggle('active');
})


