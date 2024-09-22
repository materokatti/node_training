const events = require("events");

let emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
    console.log(`${user} : ${message}`);
})

emitter.emit("customEvent", "Write something!", "Computer");

process.stdin.on("data", data => {
    const inputData = data.toString().trim();
    if(inputData === "exit") {
        emitter.emit("customEvent", inputData, "terminal");
        process.exit();
    }
    emitter.emit("customEvent", inputData, "terminal");
});