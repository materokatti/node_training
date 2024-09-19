const waitTime = 3000;

const timerFinished = () => {
    clearInterval(interval);
    console.log("\n")
    console.log("done");
}

setTimeout(timerFinished, waitTime);

const drawProgressBar = (progress) => {
    const barWidth = 30;
    const filledWidth = Math.floor(progress / 100 * barWidth);
    const emptyWidth = barWidth - filledWidth;
    const progressBar = '█'.repeat(filledWidth) + '▒'.repeat(emptyWidth);
    return `[${progressBar}] ${progress}%`;
}

const waitInterval = 100;
let currentTime = 0;
const incTime = () => {
    currentTime += waitInterval;
    const progressPercentage = Math.floor(currentTime / waitTime * 100) ;
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Progress: ${drawProgressBar(progressPercentage)}`);
}

const interval = setInterval(incTime, waitInterval);