const futureDate = document.querySelector('.future-date'); //DATE INPUT UI Selector
const startButton = document.querySelector('.start-button') //START BUTTON UI Selector
//checkUpdateDate() Variable declarations:
let userYear;
let userMonth;
let userDay;
let userMinutes;
let userSeconds;
let countDownDateGetTime;

//currentDay() Variable Declarations:
let currDate;
let currDay;
let currMonth;

//startButton/interval Variable Declarations:
let daysCalc;
let hoursCalc;
let minutesCalc;
let secondsCalc;
let timeBetween;

function checkUpdatedDate() {
    userYear = Number(futureDate.innerHTML = futureDate.value.slice(0,4));
    userMonth = Number(futureDate.innerHTML = futureDate.value.slice(5,7));
    userDay = Number(futureDate.innerHTML = futureDate.value.slice(8));

    countDownDateGetTime = new Date(`${userMonth} ${userDay}, ${userYear}`).getTime();
    
    return countDownDateGetTime
}

function currentDay() {
    currDate = new Date();
    currDay = currDate.getDate();
    currMonth = currDate.getMonth() + 1;
    
    currDay < 10 ? currDay = '0' + currDay : currDay;
    currMonth < 10 ? currMonth = '0' + currMonth : currMonth;

    currDate = currDate.getTime();
    
    return currDate
}
const startCountdown = startButton.addEventListener('click', function() {
    startTimer = setInterval(function() {
        timeBetween = checkUpdatedDate() - currentDay();
        //console.log(timeBetween)
        daysCalc = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
        hoursCalc = Math.floor((timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutesCalc = Math.floor((timeBetween % (1000 * 60 * 60)) / (1000 * 60));
        secondsCalc = Math.floor((timeBetween % (1000 * 60)) / 1000);

        document.querySelector('.days-number').innerHTML = daysCalc;
        document.querySelector('.hours-number').innerHTML = hoursCalc;
        document.querySelector('.minutes-number').innerHTML = minutesCalc;
        document.querySelector('.seconds-number').innerHTML = secondsCalc;

    }, 1000);
}, false);






