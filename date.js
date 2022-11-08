#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv))
    .option('--year', {
        alias: '-y',
        type: 'boolean',
    })
    .option('--month', {
        alias: '-m',
        type: 'boolean',
    })
    .option('--date', {
        alias: '-d',
        type: 'boolean',
    }).parse();
const dateISO = new Date();
if(argv._.length > 0){
    switch (argv._[0]) {
        case 'add':
            argv.date &&  dateISO.setDate(dateISO.getDate() + argv._[1]);
            argv.month && dateISO.setMonth(dateISO.getMonth() + argv._[1]);
            argv.year && dateISO.setFullYear(dateISO.getMonth() + argv._[1]);
            break;
        case 'sub':
            argv.date && dateISO.setDate(dateISO.getDate() - argv._[1]);
            argv.month && dateISO.setMonth(dateISO.getMonth() - argv._[1]);
            argv.year && dateISO.setFullYear(dateISO.getMonth() - argv._[1]);
            break;
        default:
            console.log("Please check the input");
    }
}
argv.year && console.log(dateISO.getFullYear());
argv.month && console.log(dateISO.getMonth() + 1);
argv.date && console.log(dateISO.getDate());



