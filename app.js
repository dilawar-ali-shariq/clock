const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const setTime = () =>{
    const currentDate = new Date();
    const sec = currentDate.getSeconds() / 60;
    const min = (sec + currentDate.getMinutes()) / 60;
    const hrs = (min + currentDate.getHours()) / 12;

    hours.style.setProperty("--rotation", hrs * 360);
    minutes.style.setProperty("--rotation", min * 360);
    seconds.style.setProperty("--rotation", sec * 360);
};

setInterval(setTime, 1000);


const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


const setDate = () =>{
const day = document.querySelector('.day');
const month = document.querySelector('.month');
const dayMonth = document.querySelector('.day-month');

const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

const currentDate = new Date();

day.innerText = week[currentDate.getDay()];
month.innerText = months[currentDate.getMonth()];
dayMonth.innerText = currentDate.getDate();

hour.innerText = currentDate.getHours().toString().padStart(2, "0");
minute.innerText = currentDate.getMinutes().toString().padStart(2, "0");
second.innerText = currentDate.getSeconds().toString().padStart(2, "0");
}

setInterval(setDate, 1000);

