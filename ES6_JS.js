// # Variablen & Scopes
// - let (blockscope), const (konstante Bindung), var (function scope, vermeiden)
// - Temporal Dead Zone (TDZ) beachten

// TODO: AUFGABE 1 : Block Scope

{
    let a = 10; // X
    const b = 20; // X
    var c = 30;
}
//console.log(a); => Refference Error a is not defined
//console.log(b); => Refference Error b is not defined
console.log(c); // => 30

// TODO: Aufgabe 2 : Function Scope

function testFunctionScope() {
    var x = 100;
    let y = 200;
    const z = 300;
    console.log(x);
    console.log(y);
    console.log(z);
}
testFunctionScope(); // => 100/200/300

//console.log(x); // => Refference Error x is not defined
// console.log(y); // => Refference Error y is not defined
// console.log(z); // => Refference Error z is not defined

// TODO: Aufgabe 3 : Global Scope

var globalVar = "Ich bin global";
let globalLet = "Ich auch global";
const globalConst = "Auch global";

function showGlobal() {
    console.log(globalVar);
    console.log(globalLet);
    console.log(globalConst);
}

showGlobal(); //Ich bin global/Ich auch global/Auch global

// Scope Übersicht
// !| Deklaration | Scope-Typ      | Zugriff innerhalb Block/Funktion | Zugriff außerhalb Block/Funktion |
// !|------------|----------------|---------------------------------|--------------------------------|
// !| var        | Function Scope | Ja, innerhalb der Funktion      | Nein, wenn innerhalb Funktion; Ja, wenn global deklariert |
// !| let        | Block Scope    | Ja, innerhalb des Blocks        | Nein                           |
// !| const      | Block Scope    | Ja, innerhalb des Blocks        | Nein

//Block Scope (let / const)

// TODO: AUFGABE 1: => Schreibe einen Block, in dem du eine let-Variable score und eine const-Variable maxScore deklarierst. Verändere score innerhalb des Blocks, und versuche danach, beide Variablen außerhalb des Blocks zu nutzen.

{
    let score = 10;
    const maxScore = 20;
    score += 20;
}
try {
    console.log(score);
} catch (error) {
    console.error(`Fehler abfangen: ${error.message} is outside of scope`);
}

// TODO: AUFGABE 2: => Erstelle ein if-Statement, in dem du let name und const age deklarierst. Innerhalb des Blocks soll eine neue Variable message entstehen, die name und age kombiniert. Prüfe danach, welche Variablen außerhalb noch zugreifbar sind.

if (true) {
    let name = "Lukasz";
    const age = 30;
    const combinedAgeName = `${name} ${age}`;
}
try {
    console.log(`Checking if accesible: ${name}, ${age}, ${combinedAgeName}`);
} catch (error) {
    console.error(`Fehler abfangen: ${error.message} is outside of scope`);
}

// TODO: AUFGABE 3: => Schreibe eine for-Schleife, die von 1 bis 5 läuft. Innerhalb der Schleife deklariere let square = i*i und var double = i*2. Versuche danach, auf beide Variablen außerhalb der Schleife zuzugreifen.

for (let i = 0; i < 5; i++) {
    let square = i * i;
    var double = i * 2;
}
try {
    throw new Error(`${square} ${double}`);
} catch (error) {
    if (error instanceof ReferenceError) {
        console.error(
            `ReferenceError: do not acces variables outside their scope: ${error.message}`
        );
    }
} finally {
    console.log(double);
}

// # Template Literals
// - String-Interpolation: `Hallo ${name}`
// - Mehrzeilige Strings ohne Escape-Sequenzen
// - Mehrzeilige Strings mit Escape-Sequenzen

let firstName = "Lukasz";
console.log(`Hello \n\t ${firstName}`);

// # Default Parameters
// - function greet(name = "Gast") { ... }

function typeOf(type = "x") {
    return typeof type;
}
console.log(`${typeOf()}`);

// # Arrow Functions
// - Kürzere Syntax, implizites return
// - Lexical this (anders als normale Funktionen)

const ShorthandSquareFunction = (number) => number * number;
console.log(ShorthandSquareFunction(5));

const NoShortHandSquareFunction = (number) => {
    return number * number;
};
console.log(NoShortHandSquareFunction(2));

// TODO: 📝 Aufgabe: Array Destructuring => Verwende Array Destructuring, um die ersten beiden Früchte in Variablen 'first' und 'second' zu speichern.Speichere alle restlichen Früchte in einer Variable 'restFruits'.Gib alle drei Variablen in der Konsole aus.

const fruits = ["Apfel", "Banane", "Kirsche", "Mango"];
const [first, second, ...restFruits] = fruits;
console.log(`Fruits: ${first}, ${second}, ${restFruits}`);

// TODO: 📝 Aufgabe: Advanced Array Destructuring

const fruitsCategories = [
    ["Zitrone", "Orange", "Grapefruit"],
    ["Erdbeere", "Himbeere", "Brombeere", "Heidelbeere"],
];

const citrus = fruitsCategories[0];
const [berries1, berries2, ...otherBerries] = fruitsCategories[1];

console.log(citrus);
console.log(berries1, berries2);
console.log(otherBerries);

// TODO: 📝 Aufgabe: Array Destructuring Adventure

const teamData = [
    ["Alice", "Bob", "Charlie"], // Teammitglieder
    ["Frontend", "Backend", "Design"], // Rollen
    [
        // Erfolge der Mitglieder
        ["Projektsieg 2023", "Hackathon 2022"],
        ["Bugfix Champion 2023"],
        ["UI Award 2022", "Best Design 2021"],
    ],
];
const [members, roles, achievements] = teamData;
const [aliceAchievements, bobAchievements, charlieAchievements] = achievements;

console.log(`Team: ${members}`);
console.log(`Rollen: ${roles}`);
console.log(`Alice Erfolge: ${aliceAchievements}`);
console.log(`Bob Erfolge: ${bobAchievements}`);
console.log(`Charlie Erfolge: ${charlieAchievements}`);

// TODO: 📝 Aufgabe: Array Destructuring Adventure 2

const companyData = [
    ["Anna", "Ben", "Clara"], // Teammitglieder
    ["Marketing", "Sales", "Dev"], // Rollen
    [
        // Erfolge der Mitglieder
        ["Award 2021", "Project X 2022"],
        ["Top Seller 2021", "Deal of the Year 2022"],
        [
            "Code Master 2021",
            "Hackathon Winner 2022",
            "Open Source Contribution",
        ],
    ],
    [
        // Lieblingsfarben der Mitglieder
        ["Blau", "Grün"],
        ["Rot", "Gelb"],
        ["Schwarz", "Weiß"],
    ],
];
const [memberss, roless, achievments, favoriteColors] = companyData;

const [annasAchievments, bensAchievments, clarasAchievments] = achievements;
const [annasFavoriteColor, BensFavoriteColor, clarasFavoriteColor] =
    favoriteColors;
const [annasRole, bensRole, clarasRole] = roless;
console.log(
    `Members: ${members[0]} Erfolge: ${achievements[0]} Lieblingsfarbe: ${favoriteColors[0]} Rolle: ${roles[0]}`
);
console.log(
    `Members: ${members[1]} Erfolge: ${achievements[1]} Lieblingsfarbe: ${favoriteColors[1]} Rolle: ${roles[1]}`
);
console.log(
    `Members: ${members[2]} Erfolge: ${achievements[2]} Lieblingsfarbe: ${favoriteColors[2]} Rolle: ${roles[2]}`
);

// TODO: 📝 Aufgabe: Array Destructuring - Travel Data

const travelData = [
    ["Alice", "Bob", "Charlie"], // Mitglieder
    ["Berlin", "Paris", "Rom"], // Reiseziele
    [
        ["Hotel A", "Airbnb B"], // Alice Unterkünfte
        ["Hostel X"], // Bob Unterkünfte
        ["Villa Z", "Hotel Y"], // Charlie Unterkünfte
    ],
    ["Zug", "Flugzeug", "Auto"], // Transportmittel
];

const [mitglieder, reiseZiele, unterkunfte, transportMittel] = travelData;

const [alice, bob, charlie] = mitglieder;
const [alicesReiseZiel, bobsReiseZiel, charliesReiseZiel] = reiseZiele;
const [alicesUnterkunft, bobsUnterkunft, charliesUnterkunft] = unterkunfte;
const [alicesTransportMittel, bobsTransportMittel, charliesTransportmittel] =
    transportMittel;

console.log(
    `Mitglieder: ${mitglieder[0]} | Reiseziele: ${reiseZiele[0]} Unterkunft: ${unterkunfte[0]} Transportmittel: ${transportMittel[0]}`
);
console.log(
    `Mitglieder: ${mitglieder[1]} | Reiseziele: ${reiseZiele[1]} Unterkunft: ${unterkunfte[1]} Transportmittel: ${transportMittel[1]}`
);
console.log(
    `Mitglieder: ${mitglieder[2]} | Reiseziele: ${reiseZiele[2]} Unterkunft: ${unterkunfte[2]} Transportmittel: ${transportMittel[2]}`
);

const travelDatas = [
    ["Alice", "Bob", "Charlie"], // Mitglieder
    ["Berlin", "Paris", "Rom"], // Reiseziele
    [
        ["Hotel A", "Airbnb B"], // Alice Unterkünfte
        ["Hostel X"], // Bob Unterkünfte
        ["Villa Z", "Hotel Y"], // Charlie Unterkünfte
    ],
    ["Zug", "Flugzeug", "Auto"], // Transportmittel
];

const [
    [alices, bobs, charlies],
    [aliceDestination, bobsDestination, charliesDestnation],
    [alicesSchelter, bobsSchelter, charliesSchelter],
    [alicesTransport, bobsTransport, charliesTransport],
] = travelDatas;

console.log(
    `${alices} fährt nach ${aliceDestination}, schläft in ${alicesSchelter}, reist mit ${alicesTransport}`
);
console.log(
    `${bobs} fährt nach ${bobsDestination}, schläft in ${bobsSchelter}, reist mit ${bobsTransport}`
);
console.log(
    `${charlies} fährt nach ${charliesDestnation}, schläft in ${charliesSchelter}, reist mit ${charliesTransport}`
);

// # Destructuring
// - Arrays: const [a, b] = [1, 2]
// - Objekte: const { name, age } = user
// - Default-Werte: const { city = "Berlin" } = user
// - Nested Destructuring: const { address: { street } } = user
// - Nützlich bei API-Responses und komplexen Daten

const userProfile = {
    user: {
        name: "Alice",
        age: 25,
        city: "Berlin",
        favoriteLanguages: ["JavaScript", "Python", "Go"],
    },
    job: "Webentwickler",
};

const {
    user: {
        name,
        age,
        city,
        favoriteLanguages: [firstLang, secondLang, thirdLang],
    },
} = userProfile;
console.log(
    `Name: ${name} | Age: ${age} | City: ${city} | Favorite Languages: ${firstLang}, ${secondLang}, ${thirdLang}`
);

const bookProfile = {
    book: {
        title: "Learn JS",
        author: "Max Mustermann",
        year: 2025,
        genres: ["Programming", "Education", "Technology"],
    },
    publisher: "CodeBooks",
};

const {
    book: {
        title,
        author,
        year,
        genres: [firstGenre, secondGenre, thirdGenre],
    },
    publisher,
} = bookProfile;
console.log(
    `Title: ${title} Author: ${author} Year: ${year} Genres: ${firstGenre}, ${secondGenre}, ${thirdGenre} Publisher: ${publisher}`
);

const usersData = {
    members: [
        {
            info: {
                username: "Charlie",
                agee: 22,
                location: "Hamburg",
                skills: ["HTML", "CSS", "JavaScript"],
            },
            membership: "Gold",
        },
        {
            info: {
                username: "Diana",
                agee: 29,
                location: "München",
                skills: ["Python", "Django", "SQL"],
            },
            membership: "Platinum",
        },
        {
            info: {
                username: "Ethan",
                age: 35,
                location: "Köln",
                skills: ["Java", "Spring", "React"],
            },
            membership: "Silver",
        },
    ],
    totalMembers: 3,
};

// 1️⃣ Destrukturiere den ersten Benutzer so, dass du username, age, location und die drei Skills direkt in Variablen hast.
// 2️⃣ Destrukturiere die Membership des ersten Benutzers ebenfalls.
// 3️⃣ Gib alles in der Konsole aus.

const {
    members: [
        {
            info: {
                username,
                agee,
                location,
                skills: [firstSkill, secondSkill, thirdSkill],
            },
            membershipp,
        },
    ],
} = usersData;

console.log(
    `Username: ${username} | Age: ${agee} | Location: ${location} | Skills: ${firstSkill}, ${secondSkill}, ${thirdSkill}, Membership: ${membershipp}`
);

const {
    members: [
        ,
        {
            info: {
                username: username2,
                agee: age2,
                location: location2,
                skills: [skill1, skill2, skill3],
            },
            membership,
        },
    ],
} = usersData;

console.log(
    `Username: ${username2} | Age: ${agee} | Location: ${location2} | Skills: ${firstSkill}, ${secondSkill}, ${thirdSkill}, Membership: ${membership}`
);

// TODO: 📝 Aufgabe: Object-Array Destructuring - School Data => Long Version

const schoolData = {
    schoolName: "Bright Future Academy",
    cityy: "Hamburg",
    classes: [
        {
            className: "Mathematics",
            students: [
                {
                    studentName: "Lena",
                    studentAge: 16,
                    role: "Class Rep",
                    hobbies: ["Chess", "Math Club"],
                },
                {
                    studentName: "Tom",
                    studentAge: 17,
                    role: "Student",
                    hobbies: ["Football", "Music"],
                },
            ],
        },
        {
            className: "Science",
            students: [
                {
                    studentName: "Mia",
                    studentAge: 16,
                    role: "Lab Assistant",
                    hobbies: ["Chemistry", "Robotics"],
                },
                {
                    studentName: "Noah",
                    studentAge: 18,
                    role: "Student",
                    hobbies: ["Astronomy", "Coding"],
                },
            ],
        },
    ],
    established: 2000,
};

const {
    schoolName,
    established,
    cityy,
    classes: [
        {
            className: firstClassName,
            students: [
                {
                    studentName: name1,
                    studentAge: age1,
                    role: role1,
                    hobbies: [hobbie1, hobbie2],
                },
                {
                    studentName: name2,
                    studentAge: age_2,
                    role: role2,
                    hobbies: [hobbie3, hobbie4],
                },
            ],
        },
        {
            className: secondClassName,
            students: [
                {
                    studentName: otherName,
                    studentAge: otherAge,
                    role: otherRole,
                    hobbies: [otherHobbie1, otherHobbie2],
                },
                {
                    studentName: otherName1,
                    stundeAge: otherAge1,
                    role: otherRole1,
                    hobbies: [otherHobbie3, otherHobbie4],
                },
            ],
        },
    ],
} = schoolData;

console.log(
    `Establishment: ${established} | Schoolname: ${schoolName} | City: ${cityy}\n First Class: ${firstClassName} | First Student: ${name1} | Age: ${age1} | Role: ${role1} | Hobbies: ${
        (hobbie1, hobbie2)
    }\n Second Student: ${name2} | Age: ${age_2} | Role: ${role2} | Hobbies : ${
        (hobbie3, hobbie4)
    }\n Second Class: ${secondClassName} | Third Student: ${otherName} | Age: ${otherAge} | Role: ${otherRole} | Hobbies: ${
        (otherHobbie1, otherHobbie2)
    }\n Fourth Student: ${otherName1} | Age: ${otherAge1} | Role: ${otherRole1} | Hobbies: ${
        (otherHobbie3, otherHobbie4)
    }`
);

// TODO: 📝 Aufgabe: Object-Array Destructuring - Company Projects - Direkte Destrukturierung (SHORT VERSION)
const companyDatas = {
    company: "TechVision",
    country: "Germany",
    projects: [
        {
            projectName: "AI Assistant",
            leader: { leaderName: "Sarah", position: "CEO" },
            team: [
                { memberName: "Max", position: "Developer" },
                { memberName: "Emma", position: "Designer" },
            ],
        },
        {
            projectName: "SmartHome",
            leader: { leaderName: "Daniel", position: "CTO" },
            team: [
                { memberName: "Anna", position: "Engineer" },
                { memberName: "Leo", position: "Researcher" },
            ],
        },
    ],
};
const {
    company: companyName,
    country: localisation,
    projects: [
        {
            projectName: nameOfProject,
            leader: { leaderName: name_1, position: position_1 },
            team: [
                { memberName: teamMember_1, position: positionMember_1 },
                { memberName: teamMemebr_2, position: positionMemeber_2 },
            ],
        },
        {
            projectName: { nameOfProject_2 },
            leader: { leaderName: n2, position: p2 },
            team: [
                { memberName: n3, position: p3 },
                { memberName: n4, position: p4 },
            ],
        },
    ],
} = companyDatas;

console.log(
    companyName,
    localisation,
    nameOfProject,
    name_1,
    position_1,
    teamMember_1,
    positionMember_1,
    teamMemebr_2,
    positionMemeber_2
);

// # Spread & Rest Operator
// - Spread: Kopieren/Zusammenführen [...arr], { ...obj }
// - Rest: function sum(...args) { ... }
// - Verhindert Mutation von Daten

// ! Spread = "auseinanderziehen"
// ! Rest = "zusammenpacken"
// ! Das brauchst du überall in der Praxis:
// ! - Arrays/Objekte kopieren ohne Mutation (z. B. React-State 🟦)
// ! - Daten mergen (z. B. API-Response + lokale Daten)
// ! - Funktionen mit flexibler Parameteranzahl schreiben

// ! Spread = "auseinanderziehen" mit anderen Worten Kopieren ohne das Objekt oder das Array zu mutieren das Uhrsprüngliche Array/Objekt bleibt unverändert.

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

const mergeBothArrays = [...arr1, ...arr2];
console.log(mergeBothArrays);

const firstObject = { fruit: "Apple" };
const firstArray = ["LOL", true, null, undefined];

const mergeArray_Object = [{ ...firstObject }, ...firstArray];
console.log(mergeArray_Object);

// ! Spread = "auseinanderziehen" Das gleiche kannst du natürlich mit Strings machen. Du kannst mit dem Spread Operator strings in einzelne Array Indexe umwandeln

const fName = "Lukasz";
const createArray = [...fName];
console.log(createArray);

// ! Rest = "zusammenpacken" ist das Gegenteil von dem Spread Operator nützlich wenn du eine Funktion schreiben willst aber nicht weißt wie viele Parameter du brauchen wirst.
// ! Rest = Wichtig zu verstehen hier ist dass es ein Array wiedergibt.

const sumAllNumbers = (...numbersArr) => {
    let totalCounter = 0;
    for (let i = 0; i < numbersArr.length; i++) {
        totalCounter += numbersArr[i];
    }
    return numbersArr;
};
console.log(sumAllNumbers(5, 5, 20, 100));

// TODO: 📝 Aufgabe: Spread + Rest Operator

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const allNumbers = [...numbers1, ...numbers2];

const sumNumbers = (...nums) => {
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        counter += nums[i];
    }
    return counter;
};
console.log(`The Sum is: ${sumNumbers(...allNumbers)}`);

// TODO: Erstelle ein Objekt user mit den Eigenschaften:

const user = {
    name: "Max",
    age: 25,
    city: "Berlin",
};
const updatedUser = { ...user, country: "Germany" };

const printUser = ({ name, ...rest }) => {
    console.log("Name:", name);
    console.log("Other Info:", rest);
};

printUser(updatedUser);

// TODO: 📝 Aufgabe – Spread & Rest kombinieren

const fruit_s = ["Apple", "Bananna"];
const moreFruit_s = ["Orange", "Kiwi"];

const allFruit_s = ["Mango", ...fruit_s, ...moreFruit_s];

const fPersonObj = { name: "Melissa", age: 27, city: "Düsseldorf" };

const updatedPerson = { ...fPersonObj, country: "Germany" };

const printPerson = ({ name, ...rest }) => {
    console.log(allFruit_s);
    console.log(name);
    console.log(rest);
};

printPerson(updatedPerson);

// TODO: 📝 Aufgabe – Spread & Rest

const animals = ["Dog", "Cat"];
const moreAnimals = ["Elephant", "Tiger"];

const allAnimals = ["Lion", ...animals, ...moreAnimals];

const car = {
    brand: "Porsche",
    model: "Panamera",
    year: 1995,
};

const updatedCar = {
    color: "Black",
    ...car,
};

const printCar = ({ brand, ...rest }) => {
    console.log(allAnimals);
    console.log(brand);
    console.log(rest);
};
printCar(updatedCar);

// # Array Methoden
// - Iteration: Basics, map, filter, reduce
// - Suche: find, findIndex, some, every, includes
// - Mutierend: push, pop, shift, unshift, splice, sort, reverse
// - Nicht mutierend: slice, concat
// - Transformation: flat, flatMap
// - Praktisch für Datenlisten, Tabellen, API-Responses

// ! forEach verändert das Array nicht.
// ! Aktzeptiert 3 Parameter

let numbers = [1, 2, 3];
numbers.forEach((number) => console.log(number * 2));

// TODO: Aufgabe 1 – Elemente ausgeben

let fruitss = ["Apple", "Banana", "Cherry"];
let returnArry = fruitss.forEach((fruit) => {
    return console.log(fruit);
});

// TODO: Aufgabe 3 – Array summieren

const arrayNumbers = [1, 2, 3, 4, 5];
let sum = 0;
arrayNumbers.forEach((number) => {
    sum += number;
});

console.log(`Summe: ${sum}`);

// TODO: 📝 Aufgabe: Rest + Spread + forEach kombinieren

const temperatures = [22, 18, 27, 30, 25];

const getMaxTemp = (...temps) => {
    let maxValue = -Infinity; // kleinster möglicher Startwert
    let maxIndex = -1; // Startwert für Index

    temps.forEach((temp, index) => {
        if (temp > maxValue) {
            maxValue = temp;
            maxIndex = index;
        }
    });

    console.log(`Max Temperatur ist ${maxValue} an Index ${maxIndex}`);
    return { maxValue, maxIndex };
};

// Wichtig: hier den Spread nutzen!
getMaxTemp(...temperatures);

// TODO :  Aufgabe 1 – Rest Parameter in Funktionen

// Schreibe eine Funktion sumAll, die beliebig viele Zahlen als Argumente entgegennimmt und sie alle summiert.

const sumAll = (...args) => {
    let counter = 0;
    for (let i = 0; i < args.length; i++) {
        counter += args[i];
    }
    return console.log(counter);
};
sumAll(1, 2, 3, 4, 5);

// TODO : Aufgabe 2 – Spread Operator in Funktionsaufrufen
const arrNumbers = [2, 3, 4];
const multiply = (a, b, c) => {
    return console.log(a * b * c);
};

multiply(...arrNumbers);

// TODO: Schreibe eine Funktion sumAll, die beliebig viele Zahlen annimmt.

const sumArrayNumbers = (...args) => {
    let counter = 0;
    for (let i = 0; i < args.length; i++) {
        counter += args[i];
    }
    return counter;
};
console.log(sumArrayNumbers(33, 33, 33, 21, 2));

// TODO: Schreibe eine Funktion firstAndRest, die ein Array entgegennimmt und das erste Element vom Rest trennt.

const firstAndRest = (arr) => {
    const [first, ...rest] = arr;

    console.log(`erstes = ${first}, rest = ${rest}`);
};
firstAndRest([1, 2, 3, 4]); // erstes = 1, rest = [2, 3, 4]
firstAndRest(["a", "b", "c"]); // erstes = "a", rest = ["b", "c"]

// TODO: Schreibe eine Funktion omitAge, die ein Objekt entgegennimmt und alle Eigenschaften außer age zurückgibt.

const omitAge = (object) => {
    const { age, ...rest } = object;
    return console.log(rest);
};

omitAge({ name: "Bob", age: 30, city: "Hamburg" });
// { name: "Bob", city: "Hamburg" }

omitAge({ age: 99, country: "Germany", hobby: "Coding" });
// { country: "Germany", hobby: "Coding" }

// TODO: Schreibe eine Funktion mergeAndGreet, die folgendes tut:

const mergeAndGreet = (firstArr, secondArr, ...names) => {
    const newArray = [...firstArr, ...secondArr, ...names];

    for (let i = 0; i < newArray.length; i++) {
        console.log(`Hallo ${newArray[i]}!`);
    }
};

mergeAndGreet(["Alice", "Bob"], ["Charlie"], "David", "Eva");

// TODO : Schreibe eine Funktion greetUsers, die folgendes tut:
/*Sie nimmt beliebig viele User-Objekte als Parameter entgegen.
Jeder User hat die Keys: name und city.
Die Funktion soll für jeden User einen Begrüßungs-String ausgeben:*/
const greetUsers = (...user) => {
    for (let users of user) {
        const { name, city } = users;
        console.log(`Hallo ${name} aus ${city}`);
    }
};

greetUsers(
    { name: "Alice", city: "Berlin" }, // Hallo Alice aus Berlin!
    { name: "Bob", city: "Hamburg" }, // Hallo Bob aus Hamburg!
    { name: "Charlie", city: "München" } // Hallo Charlie aus München!
);

// TODO: Schreibe eine Funktion introduceUsers, die folgendes tut:
//  1. Sie nimmt zwei Arrays von User-Objekten als Parameter entgegen.
//     (Jeder User hat die Keys: name und job.)
//  2. Beide Arrays sollen mit dem Spread-Operator zu einem einzigen Array kombiniert werden.
//  3. Danach soll die Funktion zusätzlich beliebig viele weitere User-Objekte über den Rest-Parameter annehmen.

const introduceUsers = (firstUserArr, secondUserArr, ...moreUserArrs) => {
    const allUsers = [...firstUserArr, ...secondUserArr, ...moreUserArrs];

    for (const user of allUsers) {
        //console.log(`${user.name} arbeitet als ${user.job}`);
        const { name, job } = user;
        console.log(`${name} arbeitet als ${job}`);
    }
};

introduceUsers(
    [
        { name: "Alice", job: "Entwicklerin" },
        { name: "Bob", job: "Designer" },
    ],
    [{ name: "Charlie", job: "Manager" }],
    { name: "David", job: "Tester" },
    { name: "Eva", job: "Projektleiterin" }
);

// # Object Methoden
// - Object.keys(obj), Object.values(obj), Object.entries(obj)
// - Object.assign(target, source)
// - Object.fromEntries() (Array -> Objekt)
// - Object.freeze(), Object.seal()
// - Zugriff via Punkt-Notation oder Bracket-Notation
// - Dynamisch Keys hinzufügen/ändern
// - Verschachtelte Objekte sicher abfragen mit ?. (Optional Chaining)

// ! Object.keys() | Object.values() | Object.entries() => Gibt ein Array zurück !!!
// ! Sehr nützlich wenn man über API-Daten iterieren musst und die Daten Dynamisch verarbeite musst.
// ! Datenbankobjekte , Formulareingaben, generische Verarbeitung.

const userData = { name: "Lukasz", age: 30, city: "Düsseldorf" };

const userDataKeys = Object.keys(userData);
const userDataValues = Object.values(userData);
const userDataEntries = Object.entries(userData);

console.log(
    `The Keys: ${userDataKeys}\nThe Values: ${userDataValues}\nThe Entries: ${userDataEntries}`
);

for (const [key, value] of Object.entries(userData)) {
    console.log(`Keys: ${key} ||| Values: ${value}`);
}

// ! Object.assign(target, source)
// ! Kopiert die Eigenschaften eines Objekts in ein anderes.
// ! Kann verwendet werden, um Objekte zu mergen oder Default-Werte zu setzen.
// ! Häufig in State-Management oder Backend-Updates, z. B. beim Zusammenführen von neuen Daten mit bestehenden Objekten.
// ! Vorsicht: flache Kopie → verschachtelte Objekte werden nur referenziert. (das heißt das einfache Werte wie Strings, Zahlen und Booleans kopiert werden. Obj und Arr werden als Referenz kopiert sie zeigen aber auf den gleichen Speicherort).

const deflautSetting = { theme: "light", notification: true };
const userSettings = { notifications: false };

const finalAdjustmentSettings = Object.assign({}, deflautSetting, userSettings);
console.log(finalAdjustmentSettings);

for (const [key, value] of Object.entries(finalAdjustmentSettings)) {
    console.log(`Key: ${key} ||| Value: ${value}`);
}

console.log(
    "-----------------------------------------------------------------"
);

const mergeAndListUser = (userObjectOne, userObjectTwo) => {
    const newUserObject = Object.assign({}, userObjectOne, userObjectTwo);

    const objectKeys = Object.keys(newUserObject);
    const objectValues = Object.values(newUserObject);

    for (const [key, value] of Object.entries(newUserObject)) {
        console.log(`Key: ${key} value: ${value}`);
    }
    console.log(`${objectKeys}\n${objectValues}`);
};

mergeAndListUser(
    { name: "Alice", city: "Berlin" },
    { job: "Developer", age: 28 }
);

console.log(
    "-----------------------------------------------------------------"
);

// ! Object.fromEntries(array)
// ! Wandelt ein Array von [key, value] Paaren zurück in ein Objekt um.
// ! Praktisch z. B. für Formulare, Query-Parameter oder Filterlisten.
// ! Es zerlegt quasi ein Verschachteltes Arry von [key, value] Paaren in ein Objekt welches ich wiederum an die Datenbank schicken kann.

const entries = [
    ["name", "Alice"],
    ["age", 25],
];

const transformIntoObject = Object.fromEntries(entries); // Hier wandeln wir ein verschachteltes Arry in ein Objekt um.

console.log(transformIntoObject); // hier funktioniert das weil wir das Objekt direkt in der Console ausgeben

console.log(`${transformIntoObject}`); // Hier bekommen wir Objekt Objekt weil das Template Literal versucht das objekt in einen String umzuwandeln

console.log(`${transformIntoObject.name}, ${transformIntoObject.age}`); // Hier bekommen wir wiederum das Ergebniss aber nicht in einem Objekt sondern wir greifen einfach auf die Eigenschaften zu.

console.log(`${JSON.stringify(transformIntoObject)}`); // Hier können wir das Objekt als ein ganzes JSON-String ausgeben.

const transormIntoJsonFormat = JSON.stringify(transformIntoObject);
const transformBackIntoObject = JSON.parse(transormIntoJsonFormat);
console.log(transformBackIntoObject);

console.log("-----------------------------------------------------");

// ! Object.freeze() / Object.seal()
// ! freeze() => Objekt kann nicht mehr verändert werden
// ! seal() => neue properties nicht nicht erlaubt aber bestehende können verändert werden
// Praktisch, um Immutable-Objekte zu erstellen (z. B. Configs, Defaults).
// ! freeze() ist deutlich stärker und seal() wird nicht so oft benötigt.

const webSiteConfigs = { theme: "dark", font: "sans-serif" };
const inMutableConfig = Object.freeze(webSiteConfigs);
console.log(inMutableConfig);

console.log("-----------------------------------------------------");

// ! Dynamisch Keys hinzufügen/ändern
// ! Objekte können nachträglich beliebige Keys bekommen. (das heißt es ist erweiterbar wenn wir wollen das es erweiterbar ist)
// ! Sehr häufig im Backend, z. B. beim Bauen von Response-Objekten oder beim Aktualisieren von Datensätzen.

const addingObjectKeys = { name: "Lukasz" };

addingObjectKeys.age = 30; // Eine Möglichkeit ist die Punkt Notation
addingObjectKeys["city"] = "Düsseldorf"; // Eine andere Möglichkeit ist die Bracket Notation
console.log(addingObjectKeys);

console.log("-----------------------------------------------------");

// ! Verschachtelte Objekte sicher abfragen mit Optional Chaining ?.
// ! Vermeidet Fehler, wenn ein verschachtelter Key nicht existiert.
// ! Extrem nützlich bei API-Daten, wo Felder fehlen können.
// ! Immer in Fullstack-Projekten für unsichere Daten nutzen.

const optionalChainingObject = {
    name: "Lukasz",
    adress: { city: "Düsseldorf" },
};

console.log(optionalChainingObject.contact?.phone); // Hier bekommen wir ein udefined statt einen Fehler
const optionalChainingObjectKey = optionalChainingObject.adress?.city;
console.log(optionalChainingObjectKey);

console.log("-----------------------------------------------------");

// TODO: Aufgabe: "User Management System"

const manageUsers = (userObject, ...allPossibleUserObjects) => {
    const newUserObject = Object.assign(
        {},
        userObject,
        ...allPossibleUserObjects
    );

    newUserObject.isActive = true;
    newUserObject.age = 30;

    const returnObjectKeys = Object.keys(newUserObject);
    const returnObjectValues = Object.values(newUserObject);
    const returnObjectEntries = Object.entries(newUserObject);

    console.log(
        `Keys: ${returnObjectKeys}\nValues: ${returnObjectValues}\nEntries: ${returnObjectEntries}`
    );

    for (const [key, value] of Object.entries(newUserObject)) {
        console.log(`${key} : ${value}`);
    }

    Object.seal(newUserObject);
    newUserObject.name = "Alicia";

    const checkOptionalChainingAfterSeal = newUserObject.isWokring?.true;
    if (checkOptionalChainingAfterSeal === undefined) {
        const retunNewError = new Error(
            "Neues Property hinzufügen? Fehlgeschlagen!"
        );
        console.log(retunNewError);
    } else {
        return;
    }
    const stringifyEntireObject = JSON.stringify(newUserObject);
    console.log(`--- JSON String --- ${stringifyEntireObject}`);

    const parseStringifyToObject = JSON.parse(stringifyEntireObject);
    console.log(parseStringifyToObject);
};
manageUsers({ name: "Alice", age: 25, city: "Berlin", job: "Developer" });

console.log("-----------------------------------------------------");

// # Promises
// - new Promise((resolve, reject) => {...})
// - then(), catch(), finally()
// - Chaining

// ! Was ist ein Promise ?
// ! Es ist ein Behälter für ein Ergebniss, das später kommt (asynchron). Dieses Ergebniss hat 3 Zustände
// ! pending | fulfilled | rejected
// ! Man kann beliebig viele .then((param) => {}) aneinander hängen
// ! Finally(() => {}) kommt immer zum Schluss egal ob resolve oder reject kommt. (nützlich wenn man einen Spinne hat wenn etwas lädt und zum schluss kannst du im Finally Block den spinner        ausschalten, benutzer abmelden, Temporäre Dateien löschen, Cache zurücksetzen oder einen request beenden).
// !

// Beispiel einer einfachen Aufgabe

const promiseWithRandomNumber = () => {
    return new Promise((resolve, reject) => {
        const generateRandomNumber = Math.floor(Math.random() * 10) + 1;
        if (generateRandomNumber > 5) {
            resolve(generateRandomNumber);
        } else {
            reject("Die Zahl war < als 5");
        }
    });
};
promiseWithRandomNumber()
    .then((randomNumber) => {
        console.log("1. Zahl erhalten: ", randomNumber);
        return randomNumber * 2;
    })
    .then((randomNumberDoubled) => {
        console.log("2. Zahl verdoppelt: ", randomNumberDoubled);
        return randomNumberDoubled + 5;
    })
    .then((finalResult) => {
        console.log("3. Endergebnis: ", finalResult);
    })
    .catch((error) => {
        console.error("Fehler aufgetreten: ", error);
    })
    .finally(() => {
        console.log("Promise-Kette ist fertig");
    });

console.log("-----------------------------------------------------");

// TODO : Schreibe eine Funktion simulateDataFetch(), die einen Promise zurückgibt.

const simulateDataFetch = () => {
    return new Promise((resolve, reject) => {
        const string = "Rohdaten geladen";
        if (string) {
            setTimeout(() => {
                resolve(string);
            }, 2000);
        } else {
            reject("Fehler beim laden der Rohdaten");
        }
    });
};
// ! HIER GANZ WICHTIG : Wenn ich im ersten then was an das 2 then weitergeben will muss ich immer im ersten then return angeben sonst kommt im 2 then undefined raus.
// ! HIER GANZ WICHTIG : Die Parameter müssen nicht gleich im jeden then heißen die werden trotzdem weitergegeben.
simulateDataFetch()
    .then((string) => {
        console.log(`${string}`);
        return string.toUpperCase();
    })
    .then((string) => {
        console.log(string);
        return string + " ✅";
    })
    .then((string) => {
        console.log(string);
    })
    .catch((error) => {
        console.error(`Fehler beim laden der Rohdaten... : ${error}`);
    })
    .finally(() => {
        console.log("Operation Beendet");
    });

// TODO : Aufgabe: „User Daten verarbeiten“

const processUsers = (users) => {
    return new Promise((resolve, reject) => {
        if (users.every((user) => user.age >= 18)) {
            setTimeout(() => {
                resolve(users);
            }, 2000);
        } else {
            reject("Ein oder mehrere User sind zu jung!");
        }
    });
};
processUsers([
    { name: "Alice", age: 25, job: "Developer" },
    { name: "Bob", age: 30, job: "Designer" },
    { name: "Charlie", age: 19, job: "Student" },
])
    .then((users) => {
        users.forEach((user) => console.log(`Name: ${user.name}`));
        return users;
    })
    .then((userJobs) => {
        userJobs.forEach((user) => console.log(`Job: ${user.job}`));
        return userJobs;
    })
    .catch((error) => {
        console.error(`Something went wrong... ${error}`);
    })
    .finally(() => {
        console.log("User-Verarbeitung abgeschlossen");
    });

// TODO : Aufgabe: „Produkte verarbeiten mit Promises“

const processProducts = (products) => {
    return new Promise((resolve, reject) => {
        if (products.every((price) => price.price > 0)) {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        } else {
            reject("Ungültiger Preis gefunden!");
        }
    });
};
processProducts([
    { name: "Laptop", price: 1200 },
    { name: "Smartphone", price: 800 },
    { name: "Kopfhörer", price: 200 },
])
    .then((products) => {
        products.map((product) => console.log(product.name));
        return products;
    })
    .then((products) => {
        const total = products.reduce((sum, price) => sum + price.price, 0);
        console.log(`Gesammtpreis: ${total}`);
        return total;
    })
    .catch((error) => {
        console.error("Something went wrong: " + error);
    })
    .finally(() => {
        console.log("Produkte-Verarbeitung abgeschlossen");
    });

// TODO : 📝 Aufgabe: „Mitarbeiter verarbeiten mit Promises“

const processEmployees = (employees) => {
    return new Promise((resolve, reject) => {
        if (employees.every((employee) => employee.salary > 0)) {
            setTimeout(() => {
                resolve(employees);
            }, 2000);
        } else {
            reject("Ungültiges Gehalt gefunden!");
        }
    });
};
processEmployees([
    { name: "Anna", department: "IT", salary: 3500 },
    { name: "Bernd", department: "HR", salary: 2800 },
    { name: "Clara", department: "IT", salary: 4200 },
    { name: "David", department: "Marketing", salary: 3150 },
])
    .then((employees) => {
        employees.map((employee) => console.log(employee.name));
        return employees;
    })
    .then((employees) => {
        const totalSumOfLoan = employees.reduce((sum, e) => sum + e.salary, 0);
        console.log(`Total Loan Sum: ${totalSumOfLoan}`);
        // WICHTIG: employees zurückgeben, nicht nur die Summe
        return employees;
    })
    .then((employees) => {
        const itEmployees = employees.filter((e) => e.department === "IT");
        console.log("IT-Mitarbeiter:");
        itEmployees.forEach((e) => console.log(`${e.name} - ${e.salary}`));
        return itEmployees;
    })
    .catch((error) => {
        console.error("Something went wrong: " + error);
    })
    .finally(() => {
        console.log("Mitarbeiter-Verarbeitung abgeschlossen");
    });

// TODO : 📝 Aufgabe: „Bestellungen verarbeiten mit Promises“
const processCostumerOrders = (processOrders) => {
    return new Promise((resolve, reject) => {
        if (processOrders.items.every((p) => p.price > 0)) {
            setTimeout(() => {
                resolve(processOrders);
            }, 2000);
        } else {
            reject("Der Preis ist = 0 || < 0");
        }
    });
};
processCostumerOrders({
    customer: "Max",
    items: [
        { product: "Laptop", price: 1200, quantity: 1 },
        { product: "Maus", price: 50, quantity: 2 },
    ],
})
    .then((customer) => {
        console.log(`${customer.customer}`);
        return customer;
    })
    .then((customer) => {
        const totalPrice = customer.items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );
        console.log(`Total Price: ${totalPrice}`);
        return { ...customer, totalPrice };
    })
    .then((customer) => {
        const customerOrder = customer.items.filter(
            (order) => order.price > 1000
        );
        customerOrder.forEach((order) =>
            console.log(`Gesammtbetrag: ${order.price}`)
        );
        return customerOrder;
    })
    .catch((error) => {
        console.error("Fehler: " + error);
    })
    .finally(() => {
        console.log("Promise Abgeschlossen");
    });

// # Async/Await
// - async function, await fetch()
// - try/catch für Error Handling

// ! Das Async Schlüsselwort muss vor die Funktion gesetzt werden
// ! Sie gibt immer ein Promise zurück
// ! Das Await Schlüsselwort kann nur bei async Funktionen verwendet werden.
// ! Es wartet ebenfalls bis etwas resolved order rejected wird

// TODO : Verwenden von async/await für die Pokemon Api um sie in der Console auszugeben


const fetchPokemon = async (pokemon) => {
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const data = await response.json();
        console.log(data.abilities);
    }catch(error){
        console.error("Fehler is aufgetreten:", error);
    }
};

fetchPokemon("pikachu");


// TODO : Alle Pokémon-Namen der ersten 20 Pokémon + Danach gezielt die Basis-Infos von Pikachu abruft (z. B. Höhe, Gewicht, Fähigkeiten).

const fetchPokeIndex = async () => {
    try{
        const firstTwentyPokemons = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
        const pikachu = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');

        const firstTwentyPokemonsData = await firstTwentyPokemons.json();
        const pikachuData = await pikachu.json();

        if(!firstTwentyPokemons.ok || !pikachu.ok){
            throw new Error('Error while fetch data...');
        }else{
            console.log('All Pokemons:');
            firstTwentyPokemonsData.results.forEach(p => console.log(p.name));
            console.log("\nPikachu Data:");
            console.log(`Height: ${pikachuData.height}`);
            console.log(`Weight: ${pikachuData.weight}`);
            console.log("Abilities: ", pikachuData.abilities.map(a => a.ability.name).join(", "));
        }
    }catch(error){
        console.error("An Error occured in Try Block while fetching...")
    }
}
fetchPokeIndex();


// TODO: Neue Aufgabe: Hole dir alle Pokémon von 1 bis 10 (also ?limit=10).

// TODO:    1. Gib deren Namen in Großbuchstaben mit forEach in der Konsole aus.
// TODO:    2. Hole dir danach gezielt die Daten von Charmander (/pokemon/charmander).
// TODO:    3. Gib seine Basisinfos in der Konsole aus: Name, Typ(en) z.B. "fire" + Basis-Stats (Attack, Defense, Speed … → aus stats-Array)


const asynchronPokemonApiFetchFunction = async () => {
    let charmanderEndPoint = 'https://pokeapi.co/api/v2/pokemon/charmander';
    let pokemonsEndPoint = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20';
    try{
        const firstResponce = await fetch(pokemonsEndPoint);
        const secondResponce = await fetch(charmanderEndPoint);

        const dataFirstResponce = await firstResponce.json();
        const dataSecondResponce = await secondResponce.json();

        if(!firstResponce.ok && !secondResponce.ok){
            throw new Error('Error while fetching Data. Check for await or wrong Endpoints or check your statement.');
        }else{
            dataFirstResponce.results.forEach(name => console.log(`Names: ${name.name}`.toUpperCase()));
            console.log(`\nPokemon: ${dataSecondResponce.name}`);

            console.log(`\nPokemon : ${dataSecondResponce.name}  is from type: ${dataSecondResponce.types.map(t => t.type.name)}`);

            console.log(`\nStats: ${dataSecondResponce.stats.map(s => `\nBase Stats: ${s.base_stat}, \nEfford needed: ${s.effort}, \nNames of Stat: ${s.stat.name}`)}`);
        }
    }catch(error){
        console.error("An Error occured" , error);
    }
}
asynchronPokemonApiFetchFunction();


// # Iterables & Loops
// - for...of für Iterables (Array, String, Set, Map)
// - for...in für Objekt-Keys

// - Array-Methoden (map/filter/reduce,some,every,forEach) statt for-Schleifen, wenn möglich


// TODO: For of
// ! Funktioniert nur für Arrays, Strings, Sets, Maps => NICHT FÜR OBJEKTE DIREKT
// ! Wenn wir über werte iterieren möchten und die Werte direkt brauchen wir bekommen die "WERTE ALS INDEX"

// TODO: For in
// ! Wird für Objekte verwendet wenn wir einen Schlüssel eines Objektes brauchen
// ! wir bekommen aber die Keys nicht direkt die Werte
// ! wir können Methoden verwendet um die keys auszuspielen es funktioniert aber auch mit der for in Schleife

//TODO: Array-Methoden: map, filter, reduce, some, every, forEach

// ! map : Erstellt neues Array aus altem, transformiert die Werte.
// ! filter : Erstellt neues Array, nur Werte die true für Bedingung sind.
// ! reduce : Reduziert Array auf einen Wert. 
// ! some : Prüft, ob mindestens ein Element die Bedingung erfüllt.
// ! every : Prüft, ob alle Elemente die Bedingung erfüllen.
// ! forEach : Iteriert über jedes Element, führt Funktion aus. Ähnlich wie for...of, erzeugt aber kein neues Array.


const doubleNumbers = (...numbers) => {

    const doubled = numbers.map(n => n * 2);

    return console.log([...doubled, 10, 20, 30]);
}

doubleNumbers(1, 2, 3, 4);



const mergeAndUpperCase = (...words) => {

    const returnUpperCase = words.map(u => u.toUpperCase());
    return console.log([...returnUpperCase, "pikachu", "bulbasaur"]);
    
}

mergeAndUpperCase("hello", "world", "charmander");




const filterAndDouble = (...numbers) => {

    const filterEvenNumbers = numbers.filter(num => num % 2 === 0);

    const returnEvenAndMultiplyByTwo = filterEvenNumbers.map(num => num * 2);

    return console.log([...returnEvenAndMultiplyByTwo]);
}
filterAndDouble(1, 2, 3, 4, 5, 6);




const sumEvenDoubled = (...number) => {
    const filterEvenNumbers = number.filter(num => num % 2 === 0);
    const multiplyDoubleNumbers = filterEvenNumbers.map(multiply => multiply * 2);
    const finalDoubledSum = multiplyDoubleNumbers.reduce((sum, number) => {
        return sum += number;
    })
    return console.log(finalDoubledSum);
}
sumEvenDoubled(1, 2, 3, 4, 5, 6);


const processNumbers = (...numbers) => {
    const returnOnlyBiggerThanFive = numbers.filter(num => num > 5);

    const doubleBiggerThanFive = returnOnlyBiggerThanFive.map(num => num * 2);

    const sumOfDoubledNumbers = doubleBiggerThanFive.reduce((sum, num) => sum + num, 0);

    const hasBigNumberAbove20 = doubleBiggerThanFive.some(num => num > 20);
    
    const allEven = doubleBiggerThanFive.every(num => num % 2 === 0);
    return { 
        sum: sumOfDoubledNumbers, 
        hasBigNumber: returnOnlyBiggerThanFive, 
        hasBigNumberAbove20,
        allEven
    };
}
console.log(processNumbers(2, 3, 4, 7, 10));


// # Neuere Features (ES2020+)
// - Optional Chaining (obj?.prop)
// - Nullish Coalescing (val ?? "Default")
// - BigInt (123n)
// - Top-Level Await
// - Private Class Fields (#)
// - Promise.allSettled(), Promise.any()


// ! Optional Chaining ermöglicht den Zugriff auf Verschachtelte Eigenschaften ohne direkt einen Fehler zu werfen
// ! Ohne dies würden wir einen Fehler bekommen und das Programm wurde abbrechen so bekommen wir undefined
// ! Bei API responses spart es mir an  codezeilen z.b. if(user && user.address && user.address.street) durch if(user.address?.street)


// ! Nullish Coalesing ?? gibt standartwerte für Variablen  aber nur wenn sie als null || undefined sind
// ! Nutzernamen aus Apis oder deflaut als "Guest"

// ! Promise.allSettled()
// ! Mehrere Daten aufeinmal laden

//! WURDE GEMACHT ODER SPÄTER MACHEN  ---------------------------------------------------------------------------------------------------------------------


// # Module System (import/export)
// - export default vs. export const
// - import x from './mod.js'
// - import { a, b } from './mod.js'

// # Enhanced Object Literals
// - Shorthand: { name, age }
// - Methoden-Definition: greet() { ... }
// - Computed Property Names: { [key]: value }

// # Klassen & OOP
// - class, constructor, Methoden
// - Vererbung mit extends, super()
// - Getter/Setter
// - static Methoden
// - Private Felder (#secret)

// # Symbols
// - Einzigartige Keys für Objekte
// - Oft für interne System-Funktionen genutzt