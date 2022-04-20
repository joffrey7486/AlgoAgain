// Sujet 1:
/* Avec une liste de nombres entiers relatifs et un nombre k, crée une méthode retournant un booléen qui affiche si deux nombres de cette liste ont k comme résultat de leur somme.
Par exemple, si je te donne la liste [10, 15, 3, 7] et k = 17, la fonction devra sortir true car 10 + 7 = 17. Si je te donne la liste [1, 8, 10, 21] et k = 19, la fonction devra sortir false car il n'y a pas deux nombres ayant 19 comme résultat de leur addition. */

// Sujet 2:
/* Nous allons te donner une liste contenant la hauteur (en étages) d'immeubles appartenant à une rue, d'est en ouest. Un agent immobilier voudrait que tu écrives un algorithme qui retourne combien de bâtiments de cette rue ont au moins un appartement avec une vue sur le soleil couchant (à l'ouest), afin de bien évaluer la valeur des bâtiments de la rue.
Par exemple, avec la liste [3, 7, 8, 3, 6, 1], la fonction devrait retourner 3, puisque l'étage le plus haut des immeubles ayant comme taille 8, 6, et 1 ont tous une vue à l'ouest. Ou autre exemple la liste [1, 4, 5, 8] devrait te retourner 1 puisque seul le dernier bâtiment a au moins un appartement avec une vue à l'ouest. */

// créer une ligne de séparation suivi d'un espace de ligne
const createLine = () => {
    let line = '';
    for (let i = 0; i < 50; i++) { line += '#'; }
    console.log(line);
    let space = '';
    for (let i = 0; i < 50; i++) { space += ' '; }
    console.log(space);
}

// EXERCICE 1
const checkSum = (list, k) => {
    // créer une variable de booléens 
    let result = false;
    // parcourir le tableau
    for (let i = 0; i < list.length; i++) {
        // parcourir le tableau à partir de l'index i
        for (let j = 0; j < list.length; j++) {
            // si la somme des éléments est égale à k
            if (list[i] + list[j] === k) {
                result = true;
            }
        }
    }
    console.log(`Pour ${list}, obtenir la somme de ${k} avec deux éléments du tableau: ${result}`);
    createLine();
}
checkSum([10, 15, 3, 7], 17); // doit sortir true
checkSum([1, 8, 10, 21], 19); // doit sortir false 




// EXERCICE 2
const viewSunSet = (list) => {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        let hasView = true;
        for (let j = i + 1; j < list.length; j++) {
            if (list[i] <= list[j]) hasView = false;
        }
        hasView ? count++ : null;
    }
    console.log(`Pour ${list}, nombre de bâtiments avec une vue sur le soleil couchant: ${count}`);
    createLine();
}
viewSunSet([3, 7, 8, 3, 6, 1]); // doit sortir 3
viewSunSet([1, 4, 5, 8]); // doit sortir 1



// EXERCICE 3 ET 5
// Objet set():  https://www.youtube.com/watch?v=lGJJ60NZ64g
const checkSum3 = (list, k) => {
    // créer une varriable égal à un object set() (permet de stocker des valeurs unique)
    let searchValues = new Set();
    let count = 0;

    // ajouter les valeurs du tableau dans l'objet set()
    searchValues.add(k - list[0]);

    for (let i = 0; i < list.length; i++) {
        // créer une variable qui contient la valeur de la somme des éléments du tableau
        let searchVal = k - list[i];
        

        // *****************************************************
        // console.log(`Départ boucle for => searchVal => ${searchVal}`);
        // *****************************************************

        // si la valeur de la somme des éléments du tableau est dans l'objet set()
        if (searchValues.has(list[i])) {
            count++;
            // *****************************************************
            // console.log(`Condition if => searchVal: ${searchVal}`);
            // *****************************************************

            // afficher le résultat
            console.log(`Pour ${list}, obtenir la somme de ${k} avec deux éléments du tableau: ${true}`);
            createLine();
            return;
        } else {
            // sinon ajouter la valeur de la somme des éléments du tableau dans l'objet set()
            searchValues.add(searchVal);

            // *****************************************************
            // console.log(`Conditions else => searchVal => ${searchVal}`);
            // *****************************************************
        }
    }
    // afficher le résultat
    // console.log(`Fin de boucle => searchValues: ${searchValues}`);
    console.log(`Pour ${list}, obtenir la somme de ${k} avec deux éléments du tableau: ${false}`);
    console.log(`Pour ${list}, le nombre de boucle: ${count}`);
    createLine();
}
checkSum3([10, 15, 3, 7], 17); // doit sortir true
checkSum3([1, 8, 10, 21], 19); // doit sortir false

//La méthode some() teste si au moins un élément du tableau passe le test implémenté par la fonction fournie. Elle renvoie un booléen indiquant le résultat du test.
const checkSumBonus = (list, k) => list.some((set => n => set.has(n) || !set.add(k - n))(new Set));
console.log("Bonus exercice 3: [10, 15, 3, 7] =>" + checkSumBonus([10, 15, 3, 7], 17)); // doit sortir true
console.log("Bonus exercice 3: [1, 8, 10, 21] =>" + checkSumBonus([1, 8, 10, 21], 19)); // doit sortir false



// EXERCICE 4
// même fonction que viewSunSet() mais avec une seule boucle for
const viewSunSet2 = (list) => {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if(list[i] > list[i + 1] || i === list.length - 1) count++;
    }
    console.log(`Pour ${list}, nombre de bâtiments avec une vue sur le soleil couchant: ${count}`);
    createLine();
}
viewSunSet2([3, 7, 8, 3, 6, 1]); // doit sortir 3
viewSunSet2([1, 4, 5, 8]); // doit sortir 1



// EXERCICE 6
