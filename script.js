const digitalElement = document.querySelector('.digital');
const sElement = document.querySelector('.p_s');
const mElement = document.querySelector('.p_m');
const hElement = document.querySelector('.p_h');
const dataElement = document.querySelector('.data');

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let day = now.getDay();
    let month = now.getMonth();
    let year = now.getFullYear();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`

    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;

    dataElement.innerHTML = `${fixZeroData(day)} / ${fixZeroData(month)} / ${fixZeroData(year)}`;

}

function fixZeroData(date) {
    return date < 10 ? '0'+date : date;
}

function fixZero(time) {
    return time < 10 ? '0'+time : time;
}

updateClock();
setInterval(updateClock, 1000);
