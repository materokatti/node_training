const grab = (flag) => {
    const indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag]
}

const user = grab("--user");
const greeting = grab("--greeting");

console.log(user);
console.log(greeting);