const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = (questions, done) => {
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