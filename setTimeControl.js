const waitTime = 3000;
console.log(`setting a ${waitTime / 1000} second delay`);
const timerFinished = () => {
    clearInterval(interval);
    console.log("done");
}

setTimeout(timerFinished, waitTime);

const waitInterval = 500;
let currentTime = 0;
const incTime = () => {
    currentTime += waitInterval;
    const progressPercentage = Math.floor(currentTime / waitTime * 100) ;
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting... ${progressPercentage}%`);
}

const interval = setInterval(incTime, waitInterval);