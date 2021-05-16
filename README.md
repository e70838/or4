# début type script

    mkdir OR4
    cd OR4

    npm help init

    npm init

donne un nom au package

    npm install tsc

J'avais typescript installé en global. Je l'ai enlevé avec npm uninstall -g typescript

Pour l'installer en local dans un projet

    npm install typescript --save-dev

Cf https://www.typescriptlang.org/download


Pour aider à créer le fichier tsconfig.json :
    (npm bin)/tsc --noImplicitReturns --noFallthroughCasesInSwitch --strict --noUnusedLocals *--showConfig*


Pour jouer en ligne avec typescript, il y a
https://www.typescriptlang.org/play

On remonte tout sous github:

    git init .
    git add .
    git commit -m "first commit"
    git remote add origin git@github.com:e70838/or4.git
    git push -u origin master