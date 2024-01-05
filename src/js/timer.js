document.addEventListener('DOMContentLoaded', function () {
  // конечная дата, например 1 июля 2021
  const deadline = new Date(2024, 2, 1, 8, 0, 0);
  // id таймера
  let timerId = null;
  // склонение числительных
  function declensionNum(num, words) {
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  }
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    $days.dataset.title = declensionNum(days, ['день', 'дні', 'днів']);
    $hours.dataset.title = declensionNum(hours, ['година', 'години', 'годин']);
    $minutes.dataset.title = declensionNum(minutes, [
      'хвилина',
      'хвилини',
      'хвилин',
    ]);
    $seconds.dataset.title = declensionNum(seconds, [
      'секунда',
      'секунди',
      'секунд',
    ]);
  }

  // получаем элементы, содержащие компоненты даты
  const $days = document.querySelector('.timer__days');
  const $hours = document.querySelector('.timer__hours');
  const $minutes = document.querySelector('.timer__minutes');
  const $seconds = document.querySelector('.timer__seconds');
  // вызываем функцию countdownTimer
  countdownTimer();

  function countdownTimerTwo() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const daysTwo = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hoursTwo = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutesTwo = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const secondsTwo = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $daysTwo.textContent = daysTwo < 10 ? '0' + daysTwo : daysTwo;
    $hoursTwo.textContent = hoursTwo < 10 ? '0' + hoursTwo : hoursTwo;
    $minutesTwo.textContent = minutesTwo < 10 ? '0' + minutesTwo : minutesTwo;
    $secondsTwo.textContent = secondsTwo < 10 ? '0' + secondsTwo : secondsTwo;
    $daysTwo.dataset.title = declensionNum(daysTwo, ['день', 'дні', 'днів']);
    $hoursTwo.dataset.title = declensionNum(hoursTwo, [
      'година',
      'години',
      'годин',
    ]);
    $minutesTwo.dataset.title = declensionNum(minutesTwo, [
      'хвилина',
      'хвилини',
      'хвилин',
    ]);
    $secondsTwo.dataset.title = declensionNum(secondsTwo, [
      'секунда',
      'секунди',
      'секунд',
    ]);
  }

  const $daysTwo = document.querySelector('.timer__daysTwo');
  const $hoursTwo = document.querySelector('.timer__hoursTwo');
  const $minutesTwo = document.querySelector('.timer__minutesTwo');
  const $secondsTwo = document.querySelector('.timer__secondsTwo');

  countdownTimerTwo();

  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
  timerId = setInterval(countdownTimerTwo, 1000);
});

// $days.dataset.title = declensionNum(days, ['день', 'дні', 'днів']);
// $hours.dataset.title = declensionNum(hours, ['година', 'години', 'годин']);
// $minutes.dataset.title = declensionNum(minutes, [
//   'хвилина',
//   'хвилини',
//   'хвилин',
// ]);
// $seconds.dataset.title = declensionNum(seconds, [
//   'секунда',
//   'секунди',
//   'секунд',
// ]);

// $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
// $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
// $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
// $seconds.dataset.title = declensionNum(seconds, [
//   'секунд',
//   'секунды',
//   'секунд',
// ]);
