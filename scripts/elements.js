export const date = new Date();
export const dateDifference= date.getTimezoneOffset() - 240 * 60 * 1000;
export const end = Math.abs(dateDifference);

export const timer = document.querySelector('.timer');
export const endDiscount = timer.getAttribute('data-deadline');
export const timeA = Date.parse(endDiscount) - new Date() - end;
