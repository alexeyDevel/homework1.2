#!/usr/bin/env node
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rundomValue = Math.round(Math.random() * 100) ;

const rl = readline.createInterface({ input, output });
let res = true;
rl.question('Загаданное число в диапазоне от 0 до 100', (answer) => {
    rl.on('line', input => {
        if(input == rundomValue){
            console.log("Число отгадано");
            rl.close();
        }else{
            input > rundomValue ? console.log(`Меньше`) : console.log(`Больше`);
            res = false;
        }
    })
});