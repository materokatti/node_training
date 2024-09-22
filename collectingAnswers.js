const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    "What is your name?",
    "Where do you live?",
    "What are you going to do with Node.js?"
];

const collectAnswers = (questions, done) => {
    const answers = [];
    
    const askQuestion = index => {
        if(index < questions.length) {
            rl.question(questions[index], (answer) => {
                answers.push(answer.trim());
                askQuestion(index+1)
            })
        } else {
            done(answers);
            rl.close();
        }
    };

    askQuestion(0);
}

collectAnswers(questions, answers => {
    console.log(answers);
})
