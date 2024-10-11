const timer = document.querySelector('.timer')
const btnStart = document.querySelector('.btn-start')

// 因為作用域，所以在外面先宣告
let timeoutId;

// 對 timer 新增監聽器
btnStart.addEventListener('click', () => {
    // setInterval
    timeoutId = setInterval((e) => {

        // 抓到 分跟秒
        let timerText = timer.innerHTML;
        let minute = timerText.substring(0, 2);
        let second = timerText.substring(3, 5);

        // 陣列裝減秒 function 的 return
        [minute, second] = calTime(minute, second);

        // 調用減秒、補零 function
        minute = formatToTwoDigits(minute);
        second = formatToTwoDigits(second);

        // 修改文字
        timerText = timer.textContent = `${minute}:${second}`

    }, 1000)

    log(e.target)
})

// 減秒 function：減少秒數、秒數歸零則扣分
function calTime(minute, second) {
    if (second !== '00') {
        second = second - 1
    } else if (second == '00' && minute == '00') {
        clearInterval(timeoutId);
        console.log('結束');
    } else {
        minute = minute - 1;
        second = 59;
    }

    return [minute, second]
}

// 補 0 function：補 0 在分秒的數字前
function formatToTwoDigits(digit) {
    let newDigit = String(digit).padStart(2, '0');
    return newDigit;
}