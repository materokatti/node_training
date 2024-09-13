const grab = (flag) => {
    const indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag]
}

const user = grab("--user");
const greeting = grab("--greeting");

console.log(user);
console.log(greeting);

// stdinput and output

const questions = [
    "What is your name?",
    "What are you doing?",
    "What is your favorite programming language?"
]

const answer = [];

const ask = (i = 0) => {
    process.stdout.write(questions[i])
    process.stdout.write(' > ')
}

ask();

process.stdin.on("data", (data) => {
    answer.push(data.toString().trim());
    if(answer.length < questions.length) {
        ask(answer.length);
    } else {
        process.exit();
    }
})

process.on("exit", () => {
    process.stdout.write("\n \n \n ");
    process.stdout.write(`Keep ${answer[1]} ${answer[0]} you can write ${answer[2]} tomorrow.`);
})

