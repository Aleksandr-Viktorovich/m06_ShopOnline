import {endDiscount, timer} from "./elements.js";
import {createTimer} from "./createTimer.js";
import {startTimer} from "./createElements.js";


{
  const init = () => {
    if (endDiscount) {
      timer.append(createTimer());
    }



    startTimer();
    setInterval(startTimer, 1000);
  };
  window.shopInit = init;
}






