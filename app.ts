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

function extraire_chiffres(nombre : number, taille : number) : number[] {
    const res = new Array(taille);

    for (let i = 0 ; i < taille; i++) {
        const d = nombre % 10;
        res[i] = d;
        nombre = (nombre - d) / 10;
    }

    return res;
}

function multiplication_phase1 (nombre_a : number, nombre_b : number) : number[][] {
    let digit_a = 1+Math.floor(Math.log10(nombre_a));
    let digit_b = 1+Math.floor(Math.log10(nombre_b));
    if (digit_a < digit_b) {
        [nombre_a, nombre_b] = [nombre_b, nombre_a];
        [digit_a, digit_b] = [digit_b, digit_a];
    }

    //const chiffres_a = extraire_chiffres(nombre_a, digit_a);
    const chiffres_b = extraire_chiffres(nombre_b, digit_b);

    let res:number[][] = new Array(digit_b + 1);
    // i indice de la ligne
    for (let i = 0; i < digit_b; i++) {
        // anticipe que le tableau sera complété par i x le chiffre '0'
        res[i] = extraire_chiffres(nombre_a * chiffres_b[i], digit_a+digit_b-i);
        // res[i].unshift(new Array(i).fill(0));
        for (let j = 0; j < i ; j++) {
            res[i].unshift(0);
        }
    }
    // alloue le tableau de chiffres pour la ligne totale
    res[digit_b] = new Array(digit_a+digit_b);

    let retenue = 0;
    // j indice de la colonne
    for (let j = 0; j < digit_a+digit_b; j++) {
        let total = retenue;
        for (let i = 0; i < digit_b ; i++) {
            total = total + res[i][j];
        }
        const d = total % 10;
        res[digit_b][j] = d;
        retenue = (total - d) / 10;
    }

    // enlever le zero initial si inutile
    if (res[digit_b][res[digit_b].length-1] === 0) {
        for (let i = 0; i < res.length ; i++) {
            res[i].pop();
        }
    }

    return res;
}

const m:number[][] = multiplication_phase1(1479, 596);
for (let i = 0; i < m.length; i++) {
    console.log(m[i].slice().reverse().join(' '));
}

debugger;