import {end, timeA} from "./elements.js";

export const timeRemaining = (endTime) => {
  const time = Date.parse(endTime) - new Date() - end;


  const days = Math.floor(time  / (1000 * 60 * 60 * 24));
  const hours = Math.floor(time  / (1000 * 60 * 60) % 24);
  const minutes = Math.floor((time  / 1000 / 60) % 60);
  const seconds = Math.floor((time  / 1000) % 60);

  return {
    time,
    days,
    hours,
    minutes,
    seconds,
  };
};
export const createTimer = () => {
  if (timeA <= 0) {
    return
  } else {
    const timerBlock = document.createElement('div');
    timerBlock.classList.add('timerBlock');
    timerBlock.style.cssText = `
    display: flex;
    gap: 15px;
    justify-content: center;
    width: 500px;
    height: 70px;
    margin: 0 auto;
    background-color: red;
  `;

    const days = document.createElement('p');
    days.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    `;
    const day = document.createElement('span');
    day.classList.add('day');
    const dayText = document.createElement('span');
    dayText.classList.add('dayText');
    days.append(day, dayText);

    const hours = document.createElement('p');
    hours.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    `;
    const hour = document.createElement('span');
    hour.classList.add('hour');
    const hourText = document.createElement('span');
    hourText.classList.add('hourText');
    hours.append(hour, hourText);

    const minutes = document.createElement('p');
    minutes.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    `;
    const minute = document.createElement('span');
    minute.classList.add('minute');
    const minuteText = document.createElement('span');
    minuteText.classList.add('minuteText');
    minutes.append(minute, minuteText);

    const seconds = document.createElement('p');
    seconds.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    `;
    const second = document.createElement('span');
    second.classList.add('second');
    const secondText = document.createElement('span');
    secondText.classList.add('secondText');
    seconds.append(second, secondText);

    timerBlock.append(days, hours, minutes, seconds);

    return timerBlock;
  }

};


export const declOfNum = (number, words) => {
  return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
};
