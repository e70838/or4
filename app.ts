import fs from "fs";

console.log('Hello world !');

// process devient visible si on a fait : npm i --save-dev @types/node
let cwd : string|undefined = process.env.PWD;

//let a:number = 12;


console.log(process.argv);

const texte:string = fs.readFileSync("toto.txt", {"encoding":"utf8"});

console.log(texte);

const a = {"hjk" : 12};
a.hjk++;

console.log(`Hello world from ${cwd} !`);

